package resource

import (
	"errors"
	"github.com/artpar/api2go"
)

type CloudStoreFileGetActionPerformer struct {
	cruds map[string]*DbResource
}

func (d *CloudStoreFileGetActionPerformer) Name() string {
	return "site.file.get"
}

func (d *CloudStoreFileGetActionPerformer) DoAction(request Outcome, inFields map[string]interface{}) (api2go.Responder, []ActionResponse, []error) {

	responses := make([]ActionResponse, 0)

	path := inFields["path"].(string)
	siteReferenceId := inFields["site_id"].(string)

	siteCacheFolder := d.cruds["cloud_store"].SubsiteFolderCache[siteReferenceId]
	if siteCacheFolder == nil {

		restartAttrs := make(map[string]interface{})
		restartAttrs["type"] = "failed"
		restartAttrs["message"] = "Site cache not found"
		restartAttrs["title"] = "Failed"
		actionResponse := NewActionResponse("client.notify", restartAttrs)
		responses = append(responses, actionResponse)

		return nil, responses, []error{errors.New("site not found")}
	}

	contents, _ := siteCacheFolder.GetFileByName(path)

	fileListResponse := NewResponse(nil, api2go.NewApi2GoModelWithData("file", nil, 0, nil, map[string]interface{}{
		"files": contents,
	}), 200, nil)
	responses = append(responses, NewActionResponse("file", map[string]interface{}{
		"list": contents,
	}))

	return fileListResponse, responses, nil
}

func NewCloudStoreFileGetActionPerformer(cruds map[string]*DbResource) (ActionPerformerInterface, error) {

	handler := CloudStoreFileGetActionPerformer{
		cruds: cruds,
	}

	return &handler, nil

}
