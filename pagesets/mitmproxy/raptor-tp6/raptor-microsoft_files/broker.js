if("undefined"==typeof COMSCORE)var COMSCORE={};"undefined"==typeof COMSCORE.SiteRecruit&&(COMSCORE.SiteRecruit={sv:"scor",testUrl:"broker-test.js",configUrl:"broker-config.js",builderUrl:"builder.js",allowScriptCaching:!1,CONSTANTS:{COOKIE_TYPE:{ALREADY_ASKED:1,DD_IN_PROGRESS:2},STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}}},COMSCORE.SiteRecruit.Utils=function(){var e=COMSCORE.SiteRecruit;return{location:document.location.toString(),referrer:document.referrer.toString(),loadScript:function(t,i){i&&!e.allowScriptCaching&&(t=e.Utils.appendQueryParams(t,(new Date).getTime()));var r=document.createElement("script");r.src=t,document.body.appendChild(r)},cleanURL:function(e){var t=e.split("?");if(t.length>1){var r="?";if(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)|%40/i.test(t[1])){var n=t[1].split("&");for(i=0;i<n.length;i++)/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)|%40/i.test(n[i])||(r+=0==i?n[i]:"&"+n[i]);e=r.length>1?t[0]+r:t[0]}}return e},getDevice:function(){var e=new RegExp("iphone|ipad|ipod|android|opera mini|blackberry|windows (phone|ce)|iemobile|htc|nokia|bb10|silk","i"),t=self.screen.availWidth>self.screen.availHeight?self.screen.availWidth:self.screen.availHeight,i={};return e.test(navigator.userAgent)?(i.type=2,t>=770&&(i.type=3)):i.type=1,i},fireBeacon:function(e){setTimeout(function(){e+=e.indexOf("?")==-1?(/\?/.test(e)?"&":"?")+(new Date).getTime():"&"+(new Date).getTime();var t=new Image;t.src=e},1)},appendQueryParams:function(e,t){return e?(e=e.replace("?","")+"?",t&&(e+=t.toString().replace("?","")),e):t},getRandom:function(e){function t(e,t,i,r,n){var o=Math.floor(e/i);return o=t*(e-o*i)-o*r,Math.round(o<0?o+n:o)}for(var i=1e9,r=2147483563,n=2147483399,o=40014,a=40692,s=53668,c=52774,u=12211,d=3791,l=67108862,g=2147483647&Math.round((new Date).getTime()%1e5),m=g,S=[32],f=0;f<19;f++)m=t(m,o,s,u,r);for(f=0;f<32;f++)m=t(m,o,s,u,r),S[31-f]=m;m=t(m,o,s,u,r),g=t(g,a,c,d,n);var v=Math.round((S[Math.floor(S[0]/l)]+g)%r),p=Math.floor(v/(r/(i+1)))/i;return"undefined"==typeof e?p:Math.floor(p*(e+1))},getExecutingPath:function(e){for(var t=document.getElementsByTagName("script"),i=t.length-1;i>=0;i--){var r=t[i].src;if(this.scriptUrl=r,r.indexOf("/"+e)!=-1)return r.replace(/(.*)(\/.*)$/,"$1/")}},JSONDeserialize:function(e){try{if(""===e&&(e='""'),e.length>4){if(window.JSON&&window.JSON.parse)return e.indexOf('"undefined"')==-1?window.JSON.parse(e.replace("undefined",'"undefined"')):window.JSON.parse(e);var t=e.substring(1,e.indexOf(","))+e.substring(e.indexOf("}")+1,e.length-1),i=e.slice(e.indexOf("name"),e.indexOf("}")).replace(/"/gi,""),r=e.substring(e.indexOf("[")+1,e.indexOf("]")).replace(/"/gi,""),n=t.substring(0,t.indexOf("surveys")-1).replace(/"/gi,"")+t.substring(t.indexOf("],")+2,t.length).replace(/"/gi,""),o=i.split(","),a=r.split(","),s=n.split(","),c={};c.sv=s[0].substring(s[0].indexOf(":")+1),c.state={},c.state.name=o[0].substring(o[0].indexOf(":")+1),c.state.url=o[1].substring(o[1].indexOf(":")+1),c.state.timestamp=parseInt(o[2].substring(o[2].indexOf(":")+1)),c.lastinvited=parseInt(s[1].substring(s[1].indexOf(":")+1)),c.userid=s[2].substring(s[2].indexOf(":")+1),c.vendorid=parseInt(s[3].substring(s[3].indexOf(":")+1)),c.surveys=[];for(var u=0;u<a.length;u++)c.surveys.push(a[u]);return c.graceperiod=parseInt(s[4].substring(s[4].indexOf(":")+1)),c.trackertimestamp=parseInt(s[5].substring(s[5].indexOf(":")+1)),c}return null}catch(e){return null}},JSONSerialize:function(e){try{var t=typeof e;if("object"!=t||null===e)return"string"==t&&(e='"'+e+'"'),String(e);var i,r,n=[],o=e&&e.constructor==Array;for(i in e)r=e[i],t=typeof r,"function"!=t&&("string"==t?r='"'+r+'"':"object"==t&&null!==r&&(r=this.JSONSerialize(r)),n.push((o?"":'"'+i+'":')+String(r)));return(o?"[":"{")+String(n)+(o?"]":"}")}catch(e){return""}}}}(),COMSCORE.SiteRecruit.Utils.UserPersistence={maxNumberOfPids:6,CONSTANTS:{STATE_NAME:{IDLE:"IDLE",DDINPROGRESS:"DDINPROGRESS"}},getCookieName:function(){var e;return COMSCORE.SiteRecruit.Broker&&COMSCORE.SiteRecruit.Broker.config&&(e=COMSCORE.SiteRecruit.Broker.config.cookie,e.name)?e.name:""},getDefaultCookieOptions:function(){var e={path:"/",domain:""};return e},getVendorId:function(){var e=1;return e},createCookie:function(e,t,i){if(t=escape(t),i.duration&&i.duration<0){var r=new Date;r.setTime(r.getTime()+24*i.duration*60*60*1e3),t+="; expires="+r.toGMTString()}else if("s"==i.duration)/msie|rv\:11|edge/i.test(navigator.userAgent)||(t+="; expires=");else{var r=new Date;r.setTime(r.getTime()+63072e6),t+="; expires="+r.toGMTString()}return i.path&&(t+="; path="+i.path),i.domain&&(t+="; domain="+i.domain),i.secure&&(t+="; secure"),i.graceperiod&&(t+="; graceperiod="+i.graceperiod),document.cookie=e+"="+t,!0},removeCookie:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"},getCookieValue:function(e){var t=document.cookie.match("(?:^|;)\\s*"+e+"=([^;]*)");return!!t&&unescape(t[1])},createUserObj:function(e){var t=new Date,i=e.pid,r=e.url,n=this.CONSTANTS.STATE_NAME.IDLE;e.statename&&(n=e.statename);var o=t.getTime();e.timestamp&&(o=e.timestamp);var a=this.getCookieName();e.cookiename&&(a=e.cookiename),e.cookieoptions||(e.cookieoptions=this.getDefaultCookieOptions());var s={};s.sv=COMSCORE.SiteRecruit.sv,s.state={},s.state.name=n,s.state.url=r,s.state.timestamp=o,s.lastinvited=o,s.userid=t.getTime().toString()+Math.floor(1e16*Math.random()).toString(),s.vendorid=this.getVendorId(),s.surveys=[],s.surveys.push(i),s.graceperiod=5;var c=COMSCORE.SiteRecruit.Utils.JSONSerialize(s);return this.createCookie(a,c,e.cookieoptions),s},setUserObj:function(e){var t,r,n,o,a,s,c,u,d=this.getUserObj(e);if(d||(d=this.createUserObj(e)),u=new Date,o=0,a=this.getCookieName(),s=5,c=0,n=this.CONSTANTS.STATE_NAME.IDLE,t=e.pid,e.url?r=e.url:d.state.url&&(r=d.state.url),e.statename?n=e.statename:d.state&&d.state.name&&(n=d.state.name),e.timestamp?o=e.timestamp:d.state&&d.state.timestamp&&(o=d.state.timestamp),e.cookiename&&(a=e.cookiename),e.cookieoptions||(e.cookieoptions=this.getDefaultCookieOptions()),e.graceperiod?s=e.graceperiod:d.graceperiod&&(s=d.graceperiod),e.trackertimestamp?c=e.trackertimestamp:d.trackertimestamp&&(c=d.trackertimestamp),d.lastinvited=u.getTime(),t){var l=!1;for(i=0;i<d.surveys.length;i++)d.surveys[i]&&d.surveys[i].toLowerCase()==t.toLowerCase()&&(l=!0);for(l===!1&&(d.surveys.length?d.surveys.length<this.maxNumberOfPids?d.surveys.push(t):(d.surveys.splice(0,1),d.surveys.push(t)):d.surveys.push(t)),i=0;i<d.surveys.length;i++)null===d.surveys[i]&&d.surveys.splice(i,1)}n&&(d.state.name=n,d.state.url=r,d.state.timestamp=o,d.graceperiod=s,d.trackertimestamp=c);var g=COMSCORE.SiteRecruit.Utils.JSONSerialize(d);return this.createCookie(a,g,e.cookieoptions),d},getUserObj:function(e){var t=this.getCookieName();e.cookiename&&(t=e.cookiename);var i=this.getCookieValue(t);if(i&&""!==i){var r=COMSCORE.SiteRecruit.Utils.JSONDeserialize(i);if(r)return r}return null}},COMSCORE.SiteRecruit.DDKeepAlive=function(){var e,t=1e3,i=COMSCORE.SiteRecruit,r=i.Utils;return{start:function(){var r=this;e=setInterval(function(){i.Broker.isDDInProgress()&&r.isTrackerPageOpen()?r.setDDTrackerCookie():r.isTrackerPageOpen()?r.stop():r.handleClosedTrackerPage()},t)},stop:function(){clearInterval(e)},isTrackerPageOpen:function(){var e={};e.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;var t,n=r.UserPersistence.getUserObj(e),o=(new Date).getTime(),a=!0,s=!1;if(n&&n.state&&n.state.name==i.CONSTANTS.STATE_NAME.DDINPROGRESS&&n.state.timestamp&&n.trackertimestamp){var c=o-n.trackertimestamp;if(COMSCORE.SiteRecruit.Builder&&COMSCORE.SiteRecruit.Builder.invitation&&COMSCORE.SiteRecruit.Builder.invitation.config?t=COMSCORE.SiteRecruit.Builder.invitation.config.trackerGracePeriod:n.gracePeriod&&(t=n.gracePeriod),t){t=parseInt(t);var u=2*t*1e3;s=c<u,s||(a=!1)}}return a},handleClosedTrackerPage:function(){var e={},t=i.Broker.config.cookie;e.cookiename=t.name,e.statename=i.CONSTANTS.STATE_NAME.IDLE,e.cookieoptions={path:t.path,domain:t.domain},e.url=escape(r.location),e.timestamp=(new Date).getTime(),r.UserPersistence.setUserObj(e),this.stop()},setDDTrackerCookie:function(){var e=i.Broker.config.cookie,t={};t.cookiename=e.name;var n=r.UserPersistence.getUserObj(t);t.cookiename=e.name,t.cookieoptions={path:e.path,domain:e.domain},document.hidden===!1||void 0===document.hidden?t.url=escape(r.location):t.url=r.UserPersistence.getUserObj(e.name).state.url,t.statename=i.CONSTANTS.STATE_NAME.DDINPROGRESS,t.timestamp=(new Date).getTime(),COMSCORE.SiteRecruit.Builder&&COMSCORE.SiteRecruit.Builder.invitation&&COMSCORE.SiteRecruit.Builder.invitation.config?(t.pid=COMSCORE.SiteRecruit.Builder.invitation.config.projectId,t.graceperiod=COMSCORE.SiteRecruit.Builder.invitation.config.trackerGracePeriod):n&&n.gracePeriod&&(t.graceperiod=n.graceperiod),r.UserPersistence.setUserObj(t)},mDDKeepAlive:function(){e=setInterval(function(){var t,i,n=0;void 0!=sessionStorage.locationList&&(t=sessionStorage.locationList),void 0!=sessionStorage.timeList&&(i=sessionStorage.timeList);var o=escape(r.cleanURL(window.location.toString()));if(/\,/.test(t)){var a=t.split(",");a[a.length-1]!=o&&(t+=","+o,i+=","+(new Date).getTime(),n=1)}else o!=t&&(t+=","+o,i+=","+(new Date).getTime(),n=1);1==n&&(sessionStorage.locationList=t,sessionStorage.timeList=i),0==COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("mDDS")&&(clearInterval(e),void 0!=sessionStorage.locationList&&sessionStorage.removeItem("locationList"),void 0!=sessionStorage.timeList&&sessionStorage.removeItem("timeList"),void 0!=sessionStorage.locationList&&sessionStorage.removeItem("csLocation"),void 0!=sessionStorage.timeList&&sessionStorage.removeItem("csReferrer"))},3e3)}}}(),COMSCORE.SiteRecruit.PagemapFinder=function(){var e,t=COMSCORE.SiteRecruit,i=t.Utils;return{getTotalFreq:function(){return e},find:function(t){var i=window.location.toString();/cs\_tstMode\=(.+)/i.test(i)&&/([^\#+]*)/.test(i)&&(i=RegExp.$1);var r=t,n=[],o=!1;e=0;for(var a=0;r&&a<r.length;a++){var s=!1,c=r[a];if(c){var u=new RegExp(c.m,"i");if(i.search(u)!=-1){var d=r[a].prereqs;s=!0,d&&(this.isMatchContent(d.content)||(s=!1),this.isMatchCookie(d.cookie)||(s=!1),this.isMatchLanguage(d.language)||(s=!1))}if(s){if(c.halt){o=!0;break}n.push(c),e=c.f}}}return o===!0?(n=null,e=0,null):this.choosePriority(n)},choosePriority:function(t){for(var i=null,r=0;r<t.length;r++)null===i?(i=t[r],e=t[r].f):i.p<t[r].p?(i=t[r],e=t[r].f):i.p==t[r].p;return i},isMatchContent:function(e){for(var t=!0,i=0;t&&i<e.length;){var r=!1,n=!1,o=e[i];if(o.element)for(var a=document.getElementsByTagName(o.element),s=!0,c=0;c<a.length;c++){var u=new RegExp(o.elementValue,"i");if(u?u.test(a[c].innerHTML)&&(s&&(s=!1),r=!0):r=!0,o.attrib&&o.attrib.length){var d=a[c].attributes.getNamedItem(o.attrib),l=new RegExp(o.attribValue);d&&(o.attribValue&&o.attribValue.length?l.test(d.value)&&(n=!0):n=!0)}else n=!0}r&&n||(t=!1),i++}return t},isMatchCookie:function(e){for(var t=!0,r=0;t&&r<e.length;){var n=e[r],o=i.UserPersistence.getCookieValue(n.name),n=e[r],o=i.UserPersistence.getCookieValue(n.name);if(!o||null===o)return!1;var a=new RegExp(n.value,"i");t=a.test(o),r++}return t},isMatchLanguage:function(e){var t=navigator.language||navigator.userLanguage;if(t=t.toLowerCase(),!e)return!0;var i=new RegExp(e);return!!i.test(t)}}}(),COMSCORE.SiteRecruit.Broker=function(){var e=COMSCORE.SiteRecruit,t=e.Utils;return{init:function(){e.device=t.getDevice(),t.location=t.cleanURL(t.location),t.referrer=t.cleanURL(t.referrer),e.executingPath=t.getExecutingPath("broker.js"),/cs\_tstMode/i.test(window.location)&&t.loadScript("https://www.microsoft.com/library/svy/"+e.testUrl,!0),t.loadScript(e.executingPath+e.configUrl,!0)},start:function(){this.init()},run:function(){var i=(COMSCORE.SiteRecruit.Broker.config.mTracker,COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("mDDS"));if(/^1/.test(i)&&/pid=(p\d+)\,site\=(\d+)/.test(i)&&(t.loadScript(e.executingPath+"inv_mdds_"+RegExp.$1+"_"+RegExp.$2+".js",!0),COMSCORE.SiteRecruit.DDKeepAlive.mDDKeepAlive()),this.config.Events.beforeRecruit(),this.config.mobile){var r=new RegExp(this.config.mobile.match,"i");if(this.config.mobile.halt===!0&&r.test(navigator.userAgent))return}if(e.sv===this.config.sv){var n,o,a=this.config.testMode;if(n=t.UserPersistence.getCookieValue("tstMode")!==!1,o=a||n,this.isDDInProgress()&&this.processDDInProgress(),!a||this.isDDInProgress()){var s={};s.cookiename=this.config.cookie.name;var c=t.UserPersistence.getUserObj(s),u=new Date,d=this.config.cookie.duration,l=u.getTime()-24*d*60*60*1e3;if(c&&c.lastinvited>l)return}if(this.findPageMapping()&&(!COMSCORE.SiteRecruit._halt||COMSCORE.SiteRecruit._halt!==!0)){if(o)return void(this.pagemap&&this.loadBuilder());var g=t.getRandom();g<=e.PagemapFinder.getTotalFreq()&&this.pagemap&&this.loadBuilder()}}},mDDSbuildLayer:function(e,t,i,r,n){var o=COMSCORE.SiteRecruit,a=(o.Utils,document.createElement("div"));a.id=r;var s=a;s.innerHTML=e;var c=this.mDDSgetPageWidth(2),u=this.mDDSgetPageHeight(2),d=s.style;d.position="fixed",d.zIndex=1999999999999,d.left=c,d.top=u,d.marginLeft=t*-1+"px",d.marginTop=i*-1+"px",1==n?d.visibility="visible":d.visibility="hidden",document.body.appendChild(s)},mDDSdestroyLayer:function(e){var t=document.getElementById(e);t.style.visibility="hidden";try{t.parentNode.removeChild(t)}catch(e){}},mDDSshowLayer:function(e){document.getElementById(e).style.visibility="visible"},mDDSlaunchSurvey:function(){var e=COMSCORE.SiteRecruit.mobile.tracker;/pid=(p\d+)\,site\=(\d+),frequency\=(.+)/.test(t.UserPersistence.getCookieValue("mDDS"))&&(e.f=RegExp.$3);var i=t.UserPersistence.getUserObj("msresearch");t.UserPersistence.removeCookie("mDDS"),void 0!=sessionStorage.locationList?e.acceptParams.raw+="&locationList="+sessionStorage.locationList+"&timeList="+sessionStorage.timeList+"&location="+sessionStorage.csLocation+"&referrer="+sessionStorage.csReferrer:e.acceptParams.raw+="&locationList=NOTSUPPORTED&timeList=NOTSUPPORTED&location=NOTSUPPORTED&referrer=NOTSUPPORTED",void 0!=sessionStorage.removeItem("locationList")&&sessionStorage.removeItem("locationList"),void 0!=sessionStorage.removeItem("timeList")&&sessionStorage.removeItem("timeList"),void 0!=sessionStorage.removeItem("csLocation")&&sessionStorage.removeItem("csLocation"),void 0!=sessionStorage.removeItem("csReferrer")&&sessionStorage.removeItem("csReferrer"),window.open(e.acceptUrl+"?"+e.acceptParams.raw+"&site="+e.acceptParams.siteCode+"&projectId="+e.projectId+"&SRmethodology="+e.methodology+"&weight="+e.weight+"&device="+COMSCORE.SiteRecruit.device.type+"&sv=scor&frequency="+e.f+"&userid="+i.userid+"&surveys="+i.surveys,"","")},mDDStrackerSwap:function(e){1==e?(this.mDDSdestroyLayer("csMenu"),this.mDDSlaunchSurvey()):(this.mDDSdestroyLayer("csTrack"),this.mDDSshowLayer("csMenu"))},mDDSgetPageWidth:function(e){switch(e){case 0:return"0%";case 1:return"50%";case 2:return"100%";default:return"0%"}},mDDSgetPageHeight:function(e){switch(e){case 0:return"0%";case 1:return"50%";case 2:return"100%";default:return"0%"}},isDDInProgress:function(){var i=!1,r={};r.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;var n=t.UserPersistence.getUserObj(r);return n&&n.state.name==e.CONSTANTS.STATE_NAME.DDINPROGRESS&&(i=!0),i},processDDInProgress:function(){e.DDKeepAlive.start()},findPageMapping:function(){return this.pagemap=e.PagemapFinder.find(this.config.mapping),this.pagemap},loadBuilder:function(){var i=e.executingPath+e.builderUrl;t.loadScript(i)}}}(),COMSCORE.isDDInProgress=COMSCORE.SiteRecruit.Broker.isDDInProgress,COMSCORE.SiteRecruit.OnReady=function(){var e=COMSCORE.SiteRecruit;return{onload:function(){e.OnReady.done||(e.OnReady.done=!0,e.Broker.start(),e.OnReady.timer&&clearInterval(e.OnReady.timer),document.addEventListener&&document.removeEventListener("DOMContentLoaded",e.OnReady.onload,!1))},listen:function(){var t=document.domain.split(".");t="."+t[t.length-2]+"."+t[t.length-1];var i="msresearch",r=COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(i);/DDINPROGRESS/i.test(r)&&(COMSCORE.SiteRecruit.Broker.config={cookie:{name:i,path:"/",domain:t,duration:90,rapidDuration:0,expireDate:""}},COMSCORE.SiteRecruit.Broker.processDDInProgress());var n=document.domain.split("."),o="";n=n[n.length-2]+"."+n[n.length-1];var a=new RegExp(n,"i");if(""!==document.referrer&&(o=document.referrer),""===o||void 0===o||a.test(o)?e.Broker.delayConfig=!1:e.Broker.delayConfig=!0,document.addEventListener&&(/loading|uninitialized/i.test(document.readyState)?document.addEventListener("DOMContentLoaded",e.OnReady.onload,!1):e.OnReady.onload()),window.ActiveXObject)COMSCORE.SiteRecruit.OnReady.waitForLoad=setInterval(function(){try{document.documentElement.doScroll("left")}catch(e){return}COMSCORE.SiteRecruit.OnReady.waitForLoad=clearInterval(COMSCORE.SiteRecruit.OnReady.waitForLoad),COMSCORE.SiteRecruit.OnReady.onload()},1e3);else if(window.addEventListener)window.addEventListener("load",e.OnReady.onload,!1);else if(window.attachEvent)return window.attachEvent("onload",e.OnReady.onload)},f:[],done:!1,timer:null}}(),COMSCORE.SiteRecruit.OnReady.listen());