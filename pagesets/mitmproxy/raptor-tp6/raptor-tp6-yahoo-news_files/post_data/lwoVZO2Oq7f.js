if (self.CavalryLogger) { CavalryLogger.start_js(["51zND"]); }

__d("ClickableAreaButton.react",["cx","invariant","Focus","React","ReactDOM","XUICard.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.componentDidMount=function(){"use strict";this.$1&&b("Focus").relocate(b("ReactDOM").findDOMNode(this.$1),b("ReactDOM").findDOMNode(this))};a.prototype.focus=function(){"use strict";b("Focus").set(this.$1)};a.prototype.render=function(){"use strict";var a=this.props,c=a.children,d=a.disabled,e=a.label,f=a.onClick,g=a.onMouseDown,i=a.onMouseEnter,j=a.onMouseMove,k=a.onMouseOut,l=a.pressed;a=a.tabIndex;c=b("React").Children.only(c);c.props.onClick&&h(0,2794);l=f?b("React").createElement("button",{"aria-pressed":l,className:"accessible_elem",disabled:d,label:e,key:"accessible_button",tabIndex:a,ref:function(a){return this.$1=a}.bind(this)},e):null;return b("React").cloneElement(c,{onClick:d?null:f,onMouseDown:g,onMouseEnter:i,onMouseMove:j,onMouseOut:k},[c.props.children,l])};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);