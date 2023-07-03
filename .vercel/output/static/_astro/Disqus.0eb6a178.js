import{c as _e}from"./config.f17f2bd7.js";import{r as v}from"./index.c35d1a06.js";import{j as K}from"./jsx-runtime.6a0dbaeb.js";var oe={},N={},ie={exports:{}},ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ge=ve,be=ge;function ue(){}function ae(){}ae.resetWarningCache=ue;var Oe=function(){function e(r,o,i,s,f,c){if(c!==be){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ae,resetWarningCache:ue};return n.PropTypes=n,n};ie.exports=Oe();var $=ie.exports,l={};Object.defineProperty(l,"__esModule",{value:!0});l.insertScript=Ie;l.removeScript=Ce;l.removeResources=De;l.debounce=Re;l.isReactElement=fe;l.shallowComparison=se;var z=Ee(v);function Ee(e){return e&&e.__esModule?e:{default:e}}function w(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(n){return typeof n}:w=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(e)}function we(e){if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(e=Se(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,o=!0,i=!1,s;return{s:function(){r=e[Symbol.iterator]()},n:function(){var c=r.next();return o=c.done,c},e:function(c){i=!0,s=c},f:function(){try{!o&&r.return!=null&&r.return()}finally{if(i)throw s}}}}function Se(e,t){if(e){if(typeof e=="string")return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r}function Ce(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)}function De(){var e=window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]');e.forEach(function(t){return t.remove()})}function Re(e,t,n){var r;return function(){var o=this,i=arguments,s=function(){r=null,n||e.apply(o,i)},f=n&&!r;window.clearTimeout(r),r=setTimeout(s,t),f&&e.apply(o,i)}}function fe(e){return z.default.isValidElement(e)?!0:Array.isArray(e)?e.some(function(t){return z.default.isValidElement(t)}):!1}function se(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=we(n),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(w(e[i])==="object"){if(se(e[i],t[i]))return!0}else if(e[i]!==t[i]&&!fe(e[i]))return!0}}catch(s){r.e(s)}finally{r.f()}return!1}var a={};Object.defineProperty(a,"__esModule",{value:!0});a.CALLBACKS=a.RECOMMENDATIONS_SCRIPT_ID=a.RECOMMENDATIONS_ID=a.COMMENT_EMBED_HEIGHT=a.COMMENT_EMBED_WIDTH=a.COMMENT_COUNT_SCRIPT_ID=a.COMMENT_COUNT_CLASS=a.EMBED_SCRIPT_ID=a.THREAD_ID=void 0;var Te="disqus_thread";a.THREAD_ID=Te;var Me="dsq-embed-scr";a.EMBED_SCRIPT_ID=Me;var Pe="disqus-comment-count";a.COMMENT_COUNT_CLASS=Pe;var Ne="dsq-count-scr";a.COMMENT_COUNT_SCRIPT_ID=Ne;var $e=420;a.COMMENT_EMBED_WIDTH=$e;var je=320;a.COMMENT_EMBED_HEIGHT=je;var ke="disqus_recommendations";a.RECOMMENDATIONS_ID=ke;var qe="dsq-recs-scr";a.RECOMMENDATIONS_SCRIPT_ID=qe;var Ae=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];a.CALLBACKS=Ae;Object.defineProperty(N,"__esModule",{value:!0});N.CommentCount=void 0;var V=ce(v),p=ce($),_=l,b=a;function ce(e){return e&&e.__esModule?e:{default:e}}function S(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(n){return typeof n}:S=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(e)}function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function Ue(e,t){if(e==null)return{};var n=Be(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Be(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xe(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),e}function He(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}function U(e,t){return U=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},U(e,t)}function Le(e){var t=Ke();return function(){var n=R(e),r;if(t){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Qe(this,r)}}function Qe(e,t){return t&&(S(t)==="object"||typeof t=="function")?t:Ge(e)}function Ge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},R(e)}var ze=(0,_.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),le=function(e){He(n,e);var t=Le(n);function n(){return We(this,n),t.apply(this,arguments)}return xe(n,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(o){return this.props===o?!1:(0,_.shallowComparison)(this.props,o)}},{key:"componentDidUpdate",value:function(o){this.props.shortname!==o.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var o=window.document;o.getElementById(b.COMMENT_COUNT_SCRIPT_ID)?ze():(0,_.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),b.COMMENT_COUNT_SCRIPT_ID,o.body)}},{key:"cleanInstance",value:function(){var o=window.document;(0,_.removeScript)(b.COMMENT_COUNT_SCRIPT_ID,o.body),window.DISQUSWIDGETS=void 0,(0,_.removeResources)()}},{key:"render",value:function(){var o=this.props;o.shortname;var i=o.config,s=o.children,f=o.className,c=Ue(o,["shortname","config","children","className"]),g=f?" ".concat(f):"";return V.default.createElement("span",A({},c,{className:"".concat(b.COMMENT_COUNT_CLASS).concat(g),"data-disqus-identifier":i.identifier,"data-disqus-url":i.url}),s)}}]),n}(V.default.Component);N.CommentCount=le;le.propTypes={shortname:p.default.string.isRequired,config:p.default.shape({identifier:p.default.string,url:p.default.string,title:p.default.string}).isRequired,className:p.default.string,children:p.default.node};var j={};Object.defineProperty(j,"__esModule",{value:!0});j.CommentEmbed=void 0;var J=pe(v),d=pe($),X=a;function pe(e){return e&&e.__esModule?e:{default:e}}function I(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(n){return typeof n}:I=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},I(e)}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function Fe(e,t){if(e==null)return{};var n=Ve(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ye(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Je(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),e}function Xe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}function W(e,t){return W=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},W(e,t)}function Ze(e){var t=nt();return function(){var n=T(e),r;if(t){var o=T(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return et(this,r)}}function et(e,t){return t&&(I(t)==="object"||typeof t=="function")?t:tt(e)}function tt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},T(e)}var G=function(e){Xe(n,e);var t=Ze(n);function n(){return Ye(this,n),t.apply(this,arguments)}return Je(n,[{key:"getSrc",value:function(){var o=36,i=Number(this.props.commentId).toString(o),s=this.props.showParentComment?"1":"0",f=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(i,"?p=").concat(s,"&m=").concat(f)}},{key:"render",value:function(){var o=this.props,i=o.width,s=o.height;o.commentId,o.showMedia,o.showParentComment;var f=Fe(o,["width","height","commentId","showMedia","showParentComment"]);return J.default.createElement("iframe",B({},f,{src:this.getSrc(),width:i,height:s,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}]),n}(J.default.Component);j.CommentEmbed=G;G.defaultProps={showMedia:!0,showParentComment:!0,width:X.COMMENT_EMBED_WIDTH,height:X.COMMENT_EMBED_HEIGHT};G.propTypes={commentId:d.default.string.isRequired,showMedia:d.default.bool,showParentComment:d.default.bool,width:d.default.number,height:d.default.number,className:d.default.string};var k={};Object.defineProperty(k,"__esModule",{value:!0});k.DiscussionEmbed=void 0;var ee=de(v),u=de($),O=l,m=a;function de(e){return e&&e.__esModule?e:{default:e}}function C(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(e)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function rt(e,t){if(e==null)return{};var n=ot(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ot(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function it(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ut(e,t,n){return t&&te(e.prototype,t),n&&te(e,n),e}function at(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}function H(e,t){return H=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},H(e,t)}function ft(e){var t=lt();return function(){var n=M(e),r;if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return st(this,r)}}function st(e,t){return t&&(C(t)==="object"||typeof t=="function")?t:ct(e)}function ct(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},M(e)}var me=function(e){at(n,e);var t=ft(n);function n(){return it(this,n),t.apply(this,arguments)}return ut(n,[{key:"componentDidMount",value:function(){typeof window<"u"&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(o){return this.props===o?!1:(0,O.shallowComparison)(this.props,o)}},{key:"componentDidUpdate",value:function(o){this.props.shortname!==o.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var o=window.document;window&&window.DISQUS&&o.getElementById(m.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,O.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),m.EMBED_SCRIPT_ID,o.body))}},{key:"cleanInstance",value:function(){var o=window.document;(0,O.removeScript)(m.EMBED_SCRIPT_ID,o.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch{window.DISQUS=void 0}var i=o.getElementById(m.THREAD_ID);if(i)for(;i.hasChildNodes();)i.removeChild(i.firstChild);(0,O.removeResources)()}},{key:"getDisqusConfig",value:function(o){return function(){var i=this;this.page.identifier=o.identifier,this.page.url=o.url,this.page.title=o.title,this.page.category_id=o.categoryID,this.page.remote_auth_s3=o.remoteAuthS3,this.page.api_key=o.apiKey,o.sso&&(this.sso=o.sso),o.language&&(this.language=o.language),m.CALLBACKS.forEach(function(s){i.callbacks[s]=[o[s]]})}}},{key:"render",value:function(){var o=this.props;o.shortname,o.config;var i=rt(o,["shortname","config"]);return ee.default.createElement("div",x({},i,{id:m.THREAD_ID}))}}]),n}(ee.default.Component);k.DiscussionEmbed=me;me.propTypes={shortname:u.default.string.isRequired,config:u.default.shape({identifier:u.default.string,url:u.default.string,title:u.default.string,language:u.default.string,categoryID:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string,preData:u.default.func,preInit:u.default.func,onInit:u.default.func,onReady:u.default.func,afterRender:u.default.func,preReset:u.default.func,onIdentify:u.default.func,beforeComment:u.default.func,onNewComment:u.default.func,onPaginate:u.default.func,sso:u.default.shape({name:u.default.string,button:u.default.string,icon:u.default.string,url:u.default.string,logout:u.default.string,profile_url:u.default.string,width:u.default.string,height:u.default.string})}).isRequired};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.Recommendations=void 0;var ne=ye(v),y=ye($),E=l,h=a;function ye(e){return e&&e.__esModule?e:{default:e}}function D(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(n){return typeof n}:D=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(e)}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function pt(e,t){if(e==null)return{};var n=dt(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function mt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yt(e,t,n){return t&&re(e.prototype,t),n&&re(e,n),e}function ht(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}function Q(e,t){return Q=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Q(e,t)}function _t(e){var t=bt();return function(){var n=P(e),r;if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return vt(this,r)}}function vt(e,t){return t&&(D(t)==="object"||typeof t=="function")?t:gt(e)}function gt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},P(e)}var he=function(e){ht(n,e);var t=_t(n);function n(){return mt(this,n),t.apply(this,arguments)}return yt(n,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(o){return this.props===o?!1:(0,E.shallowComparison)(this.props,o)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(o){return function(){this.page.identifier=o.identifier,this.page.url=o.url,this.page.title=o.title,this.language=o.language}}},{key:"loadInstance",value:function(){typeof window<"u"&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(h.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,E.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),h.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,E.removeScript)(h.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch{window.DISQUS_RECOMMENDATIONS=void 0}var o=window.document.getElementById(h.RECOMMENDATIONS_ID);if(o)for(;o.hasChildNodes();)o.removeChild(o.firstChild);(0,E.removeResources)()}},{key:"render",value:function(){var o=this.props;o.shortname,o.config;var i=pt(o,["shortname","config"]);return ne.default.createElement("div",L({},i,{id:h.RECOMMENDATIONS_ID}))}}]),n}(ne.default.Component);q.Recommendations=he;he.propTypes={shortname:y.default.string.isRequired,config:y.default.shape({identifier:y.default.string,url:y.default.string,title:y.default.string,language:y.default.string})};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return t.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return n.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return r.DiscussionEmbed}}),Object.defineProperty(e,"Recommendations",{enumerable:!0,get:function(){return o.Recommendations}}),e.default=void 0;var t=N,n=j,r=k,o=q,i={CommentCount:t.CommentCount,CommentEmbed:n.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed,Recommendations:o.Recommendations},s=i;e.default=s})(oe);const St=({className:e})=>{const{disqus:t}=_e;return K.jsx("div",{className:e,children:t.enable&&K.jsx(oe.DiscussionEmbed,{shortname:t.shortname,config:t.settings})})};export{St as default};