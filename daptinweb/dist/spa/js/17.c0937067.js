(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-breadcrumbs",{scopedSlots:t._u([{key:"separator",fn:function(){return[a("q-icon",{attrs:{size:"1.2em",name:"arrow_forward"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{attrs:{label:t.serverConfig.hostname,icon:"fas fa-home"}})],1)],1),a("q-separator"),a("div",{staticClass:"row",staticStyle:{overflow:"scroll",height:"90vh"}},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-4 col-xs-12 col-sm-12 q-pa-md q-gutter-sm"},[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{size:"lg",name:"fas fa-user"}})],1)],1),a("q-item-section",[t.showHostnameEdit?t._e():a("span",{staticClass:"text-h4"},[t._v("Users")]),t.showHostnameEdit?t._e():a("span",{staticClass:"text-bold"},[t._v("@ "+t._s(t.serverConfig.hostname))]),t.showHostnameEdit?a("q-input",{attrs:{value:t.serverConfig.hostname,label:"Hostname"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveHostname()}},model:{value:t.serverConfig.hostname,callback:function(e){t.$set(t.serverConfig,"hostname",e)},expression:"serverConfig.hostname"}}):t._e()],1),a("q-item-section",{attrs:{avatar:""}},[t.showHostnameEdit?t._e():a("q-icon",{staticStyle:{cursor:"pointer"},attrs:{name:"fas fa-edit",size:"xs"},on:{click:function(e){return t.changeHostname()}}}),t.showHostnameEdit?a("q-icon",{staticStyle:{cursor:"pointer"},attrs:{name:"fas fa-save",size:"xs"},on:{click:function(e){return t.saveHostname()}}}):t._e()],1)],1)],1),a("q-card-section",[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Total")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.userAggregate.count)+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("User registrations")])]),a("div",{staticClass:"col-6 text-right"},[a("q-btn-toggle",{attrs:{size:"sm",rounded:"",color:"white","toggle-color":"primary","toggle-text-color":"white","text-color":"black",options:[{label:t.signUpPublicAvailable?"Enabled":"Enable",value:!0},{label:t.signUpPublicAvailable?"Disable":"Disabled",value:!1}]},model:{value:t.signUpPublicAvailable,callback:function(e){t.signUpPublicAvailable=e},expression:"signUpPublicAvailable"}})],1)]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Password Reset")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  Disabled\n                  ")])])])],1)],1),a("div",{staticClass:"col-6  col-md-6 col-lg-6 col-xl-3 col-xs-12 col-sm-12 q-pa-md q-gutter-sm"},[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{size:"lg",name:"fas fa-database"}})],1)],1),a("q-item-section",[a("span",{staticClass:"text-h4"},[t._v("Data tables")])])],1)],1),a("q-card-section",[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Total")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.tables().length)+"\n                ")])])]),a("q-card-section",[a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 q-pa-md q-gutter-sm"},[a("q-btn",{staticClass:"float-right",attrs:{icon:"list",round:""},on:{click:function(e){return t.$router.push("/tables")}}}),a("q-btn",{staticClass:"float-right",attrs:{round:"",icon:"add"},on:{click:function(e){return t.$router.push("/tables/create")}}})],1)])])],1)],1),a("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-3 col-xs-12 col-sm-12 q-pa-md q-gutter-sm"},[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{size:"lg",name:"fas fa-film"}})],1)],1),a("q-item-section",[a("span",{staticClass:"text-h4"},[t._v("Sites")])])],1)],1),a("q-card-section",[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Active")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.siteAggregate.active)+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Total")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.siteAggregate.total)+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Cloud stores")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.cloudStoreAggregate.count)+"\n                ")])])]),a("q-card-section",[a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 q-pa-md q-gutter-sm"},[a("q-btn",{staticClass:"float-right",attrs:{round:"",icon:"list"},on:{click:function(e){return t.$router.push("/cloudstore/sites")}}})],1)])])],1)],1),a("div",{staticClass:"col-6  col-md-6 col-lg-6 col-xl-3 col-xs-12 col-sm-12 q-pa-md q-gutter-sm"},[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{size:"lg",name:"fas fa-bolt"}})],1)],1),a("q-item-section",[a("span",{staticClass:"text-h4"},[t._v("Integrations")])])],1)],1),a("q-card-section",[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("API Specs")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.integrationAggregate.count)+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Actions")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.actionAggregate.count)+"\n                ")])])]),a("q-card-section",[a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 q-pa-md q-gutter-sm"},[a("q-btn",{staticClass:"float-right",attrs:{label:"Add API Spec"}}),a("q-btn",{staticClass:"float-right",attrs:{label:"Create an action"}})],1)])])],1)],1)])]),a("div",{staticClass:"col-4  col-md-6 col-lg-4 col-xl-3 col-xs-12 col-sm-12 q-pa-md q-gutter-sm"},[a("div",{staticClass:"row"},[a("div",[a("q-card",[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{size:"lg",name:"fas fa-plug"}})],1)],1),a("q-item-section",[a("span",{staticClass:"text-h4"},[t._v("Services")])]),a("q-item-section",{attrs:{avatar:""}},[a("q-btn",{attrs:{rounded:"",color:"primary",flat:"",size:"md",icon:"fas fa-sync"},on:{click:function(e){return t.reloadServer()}}})],1)],1)],1),a("q-card-section",[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("JSON API endpoint")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  Yes\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("FTP service")])]),a("div",{staticClass:"col-6 text-right"},[a("q-btn-toggle",{attrs:{size:"sm",rounded:"",color:"white","toggle-color":"primary","toggle-text-color":"white","text-color":"black",options:[{label:t.serverConfig["ftp.enable"]?"Enabled":"Enable",value:!0},{label:t.serverConfig["ftp.enable"]?"Disable":"Disabled",value:!1}]},on:{click:function(e){return t.updateFtpEndpoint()}},model:{value:t.serverConfig["ftp.enable"],callback:function(e){t.$set(t.serverConfig,"ftp.enable",e)},expression:"serverConfig['ftp.enable']"}})],1)]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("GraphQL endpoint")])]),a("div",{staticClass:"col-6 text-right"},[a("q-btn-toggle",{attrs:{size:"sm",rounded:"",color:"white","toggle-color":"primary","toggle-text-color":"white","text-color":"black",options:[{label:t.serverConfig["graphql.enable"]?"Enabled":"Enable",value:!0},{label:t.serverConfig["graphql.enable"]?"Disable":"Disabled",value:!1}]},on:{click:function(e){return t.updateGraphqlEndpoint()}},model:{value:t.serverConfig["graphql.enable"],callback:function(e){t.$set(t.serverConfig,"graphql.enable",e)},expression:"serverConfig['graphql.enable']"}})],1)]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("IMAP endpoint")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s("true"===t.serverConfig["imap.enabled"]?"Yes":"No")+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Connection throttle")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.serverConfig["limit.max_connections"])+"\n                ")])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-4"},[a("span",{staticClass:"text-bold"},[t._v("Allowed rate limit")])]),a("div",{staticClass:"col-6 text-right"},[t._v("\n                  "+t._s(t.serverConfig["limit.rate"])+"\n                ")])])])],1)],1)])])]),t.showHelp?t._e():a("q-page-sticky",{attrs:{position:"top-right",offset:[0,0]}},[a("q-btn",{attrs:{flat:"",fab:"",icon:"fas fa-question"},on:{click:function(e){t.showHelp=!0}}})],1),a("q-drawer",{attrs:{overlay:"",width:400,side:"right"},model:{value:t.showHelp,callback:function(e){t.showHelp=e},expression:"showHelp"}},[t.showHelp?a("q-scroll-area",{staticClass:"fit"},[a("help-page",{on:{closeHelp:function(e){t.showHelp=!1}}})],1):t._e()],1)],1)},o=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),n=a.n(i),l=a("2f62");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"PageIndex",methods:c({updateGraphqlEndpoint:function(){var t=this;console.log("Update graphql endpoint",this.serverConfig["graphql.enable"]),this.saveConfig({name:"graphql.enable",value:this.serverConfig["graphql.enable"]}).then((function(e){t.serverConfig["graphql.enable"]?t.$q.notify({message:"GraphQL endpoint enabled"}):(t.$q.notify({message:"GraphQL endpoint disabled"}),t.reloadServer()),t.showHostnameEdit=!1})).catch((function(e){console.log("Failed to update graphql endpoint",e),t.$q.notify({message:"Failed to update endpoint status"})}))},updateFtpEndpoint:function(){var t=this;console.log("Update ftp endpoint",this.serverConfig["ftp.enable"]),this.saveConfig({name:"ftp.enable",value:this.serverConfig["ftp.enable"]}).then((function(e){t.serverConfig["ftp.enable"]?t.$q.notify({message:"ftp enabled"}):(t.$q.notify({message:"ftp disabled"}),t.reloadServer()),t.showHostnameEdit=!1})).catch((function(e){console.log("Failed to update ftp endpoint",e),t.$q.notify({message:"Failed to update ftp status"})}))},saveHostname:function(){var t=this;this.saveConfig({name:"hostname",value:this.serverConfig.hostname}).then((function(e){t.$q.notify({message:"Hostname updated"}),t.reloadServer(),t.showHostnameEdit=!1})).catch((function(e){console.log("failed to upate hostname",e),t.$q.notify({message:"Failed to update hostname"})}))},changeHostname:function(){this.showHostnameEdit=!0},reloadServer:function(){console.log("Reload server");var t=this;t.executeAction({tableName:"world",actionName:"restart_daptin"}).then((function(e){t.$q.notify({message:"Server restarted"})})).catch((function(e){t.$q.notify({message:"Failed to restart"}),console.log("Failed to restart daptin",e)}))}},Object(l["b"])(["loadData","loadAggregates","loadServerConfig","executeAction","saveConfig"])),data:function(){return c({text:"",showHelp:!1,showHostnameEdit:!1,actionMap:{},userAggregate:{},cloudStoreAggregate:{},serverConfig:{},siteAggregate:{},integrationAggregate:{},actionAggregate:{},signUpPublicAvailable:!1,resetPublicAvailable:!1},Object(l["c"])(["tables"]))},mounted:function(){var t=this;t.loadData({tableName:"action",params:{page:{size:500}}}).then((function(e){console.log("Actions",e);var a=e.data,s={},o=a.filter((function(t){return s[t.action_name]=t,"signup"===t.action_name}))[0];o&&o.permission&&(t.signUpPublicAvailable=!0);var i=a.filter((function(t){return"resetpassword"===t.action_name}))[0];i&&i.permission&&(t.resetPublicAvailable=!0),t.actionMap=s,console.log("Action map",s)})).catch((function(t){console.log("Failed to load actions",t)})),t.loadAggregates({tableName:"user_account",column:"count"}).then((function(e){console.log("User account aggregates",e),t.userAggregate=e.data[0]})),t.loadAggregates({tableName:"cloud_store",column:"count"}).then((function(e){console.log("cloud store aggregates",e),t.cloudStoreAggregate=e.data[0]})),t.loadAggregates({tableName:"site",column:"count",group:"enable"}).then((function(e){console.log("Site aggregates",e);var a=null,s=null;for(var o in e.data){var i=e.data[o];!0===i.enable||1===i.enable?a=i:s=i}t.siteAggregate={active:0,total:0},a&&(t.siteAggregate.active=a.count,t.siteAggregate.total+=a.count),s&&(t.siteAggregate.total+=s.count)})),t.loadAggregates({tableName:"action",column:"count"}).then((function(e){console.log("Action aggregates",e),t.actionAggregate=e.data[0]})),t.loadAggregates({tableName:"integration",column:"count"}).then((function(e){console.log("Integration aggregates",e),t.integrationAggregate=e.data[0]})),t.loadServerConfig().then((function(e){for(var a in e)"true"===e[a]?e[a]=!0:"false"===e[a]&&(e[a]=!1);console.log("Server config",e),t.serverConfig=e})).catch((function(t){console.log("Failed to load server config",t)}))}},g=d,v=a("2877"),p=a("9989"),u=a("ead5"),f=a("0016"),m=a("079e"),b=a("eb85"),h=a("f09f"),C=a("a370"),q=a("66e5"),x=a("4074"),w=a("cb32"),_=a("27f9"),A=a("6a67"),y=a("9c40"),k=a("8f8e"),S=a("de5e"),H=a("9404"),P=a("4983"),E=a("eebe"),O=a.n(E),Q=Object(v["a"])(g,s,o,!1,null,null,null);e["default"]=Q.exports;O()(Q,"components",{QPage:p["a"],QBreadcrumbs:u["a"],QIcon:f["a"],QBreadcrumbsEl:m["a"],QSeparator:b["a"],QCard:h["a"],QCardSection:C["a"],QItem:q["a"],QItemSection:x["a"],QAvatar:w["a"],QInput:_["a"],QBtnToggle:A["a"],QBtn:y["a"],QCheckbox:k["a"],QPageSticky:S["a"],QDrawer:H["a"],QScrollArea:P["a"]})}}]);