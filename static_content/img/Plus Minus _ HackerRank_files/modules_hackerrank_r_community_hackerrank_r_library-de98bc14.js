(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"2Svy":function(e,t){e.exports={colorGrayLighter:"hsla(210.00, 14.29%, 94.51%, 1)",colorGrayLight:"hsla(218.57, 12.96%, 78.82%, 1)",colorGray:"hsla(220.00, 13.04%, 63.92%, 1)",colorGrayDark:"hsla(221.38, 12.89%, 44.12%, 1)",colorGrayDarker:"hsla(214.29, 15.56%, 26.47%, 1)",colorPrimary:"hsla(141.82, 62.60%, 48.24%, 1)",colorSecondary:"hsla(220.00, 13.04%, 63.92%, 1)",colorLink:"hsla(214.43, 90.72%, 61.96%, 1)",colorSuccess:"hsla(141.82, 62.60%, 48.24%, 1)",colorInfo:"hsla(52.08, 100.00%, 89.61%, 1)",colorWarning:"hsla(45.39, 82.83%, 54.31%, 1)",colorDanger:"hsla(7.30, 91.30%, 59.41%, 1)",colorStar:"hsla(44.48, 100.00%, 65.88%, 1)",colorWhite:"hsla(0.00, 0.00%, 100.00%, 1)",colorBronze:"hsla(30.81, 61.16%, 52.55%, 1)",colorSilver:"hsla(214.74, 11.80%, 68.43%, 1)",colorGold:"hsla(38.04, 92.56%, 52.55%, 1)",spaceXsmall:"5px",spaceSmall:"10px",spaceMedium:"20px",spaceLarge:"40px",spaceGutter:"15px",fontNormal:"14px",fontMedium:"16px",fontSmall:"12px",fontXsmall:"10px",fontBig:"18px",fontXbig:"24px",fontWeightLight:300,fontWeightNormal:400,fontWeightMedium:500,fontWeightBold:600,fontFamily:"'Avenir', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",fontFamilyMedium:"'AvenirNext-Medium', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",fontFamilyDemibold:"'AvenirNext-Demibold', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",boxShadow:"0 4px 8px 0 rgba(51, 51, 51, 0.4)",boxShadowSmall:"0 2px 4px 0 rgba(51, 51, 51, 0.4)",boxShadowHighlight:"0 0 4px 0 rgba(51, 51, 51, 0.4)",borderRadius:"3px",borderSolid:"1px solid rgb(239, 241, 243)",brandPrimary:"hsla(141.82, 62.60%, 48.24%, 1)",modalOverlayColor:"rgba(0, 0, 0, 0.7)",modalInverseColor:"rgba(255, 255, 255, 0.7)"}},LPUq:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n("cDcd"),o=n.n(a),r=n("17x9"),s=n.n(r),i=n("ANjH"),l=n("/MKj"),c=n("s/Ur"),d=n.n(c),u=n("0e0P");const p={isMobile:s.a.bool.isRequired,isAppMounted:s.a.bool.isRequired};let h=function(e){let t=e.isAppMounted,n=e.isMobile,a=e.children;return t||n?o.a.createElement(d.a,{children:a,maxWidth:t?767:1e5,values:{width:320}}):null};h.propTypes=p;let m=function(e){let t=e.isAppMounted,n=e.isMobile,a=e.children;return!t&&n?null:o.a.createElement(d.a,{children:a,minWidth:t?768:0,values:{width:1240}})};function b(e){return{isMobile:e.metadata.isMobile}}m.propTypes=p;m=Object(i.d)(Object(l.c)(b),u.a)(m),h=Object(i.d)(Object(l.c)(b),u.a)(h)},QahQ:function(e,t,n){"use strict";var a=n("pVnL"),o=n.n(a),r=n("QILm"),s=n.n(r),i=n("lSNA"),l=n.n(i),c=n("cDcd"),d=n.n(c),u=n("/MKj"),p=n("17x9"),h=n.n(p),m=n("jNdJ");class b extends c.PureComponent{constructor(){super(...arguments),l()(this,"state",{adSeen:!1}),l()(this,"onAdSeen",e=>{!this.state.adSeen&&e.intersectionRatio>=1&&this.setState({adSeen:!0},()=>{this.metrics("View")})})}metrics(e){const t=this.props,n=t.sendMetrics,a=t.adUnit;n&&n(e,a)}render(){var e,t;const n=this.props,a=n.children,r=n.component,i=n.slot,l=n.adUnit,u=n.minItems,p=s()(n,["children","component","slot","adUnit","minItems"]),h=null!==(e=null==l||null===(t=l.metadata)||void 0===t?void 0:t.position)&&void 0!==e?e:this.props.position,b=d.a.Children.toArray(a);if(b.length<u||!l)return a;const v={root:null,rootMargin:"0px",threshold:1,onChange:this.onAdSeen};return d.a.createElement(c.Fragment,null,[...b.slice(0,h),d.a.createElement(m.a,o()({key:`NativeAd-${i}-${h}`},v),d.a.createElement(r,o()({slot:i,promoMeta:l,ref:this.onAdLoad,onClick:this.metrics.bind(this,"Click"),onClose:this.props.onClose},p))),...b.slice(h,b.length)])}}l()(b,"propTypes",{component:h.a.node.isRequired,slot:h.a.string.isRequired,position:h.a.number,sendMetrics:h.a.func,minItems:h.a.number,adUnit:h.a.shape({ad_unit_type:h.a.string,heading:h.a.string,subtitle:h.a.string,cta_link:h.a.string,cta_text:h.a.string,metadata:h.a.shape({position:h.a.number,background:h.a.string,ctas_arr:h.a.array})}),onClick:h.a.func,children:h.a.oneOfType([h.a.arrayOf(h.a.node),h.a.node])}),l()(b,"defaultProps",{minItems:0,position:0,children:null});t.a=Object(u.c)((e,t)=>{const n=t.slot,a="hackerrankx"===e.metadata.productNamespace?e.work.nativeAds:e.community.nativeAds;return{adUnit:a&&a[n]}})(b)},jNdJ:function(e,t,n){"use strict";var a=n("w13Q"),o=n("QILm"),r=n.n(o),s=n("lSNA"),i=n.n(s),l=n("cDcd"),c=n.n(l);class d extends l.PureComponent{render(){return this.props.children}}class u extends l.PureComponent{constructor(){super(...arguments),i()(this,"state",{observer:null}),i()(this,"hasUnmounted",!1)}loadObserverModules(){return new Promise((e,t)=>{(()=>{const a=t;n.e(130).then((t=>{void 0===window.IntersectionObserver&&(n("T39b"),n("9AAn"),n("Wr5T"));const a=n("fadw").default;e(a)}).bind(null,n)).catch(a)})()})}componentDidMount(){this.loadObserverModules().then(e=>{this.hasUnmounted||this.setState({observer:e})})}componentWillUnmount(){this.hasUnmounted=!0}render(){const e=this.props,t=e.children,n=r()(e,["children"]),a=this.state.observer,o=a||l.Fragment,s=a?n:{};return c.a.createElement(o,s,c.a.createElement(d,null,c.a.Children.only(t)))}}t.a=u,Object(a.d)("hackerrank_r_intersection_observer.js")},ySAj:function(e,t,n){"use strict";var a=n("ZaSc"),o=n("UQja"),r=n("Ckvm");const s=Object(r.b)(),i=s+"community/v1/",l=s+"ent/api/v1/",c={loadNativeAds:i+"promotion_slots/::slot",loadNativeAdsEnt:l+"promotion_slots/::slot",dismissNativeAd:i+"promotion_slots/dismiss_ad",dismissNativeAdEnt:l+"user_ad_unit_associations/ad_unit/::ad_unit_id",clearKeyNativeAd:i+"promotion_slots/clear_ad_unit_key"};function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(c,e,t)}var u=n("/SOd");const p={loadNativeAds:(e,t)=>n=>{const o=e.slot,r=e.productType;return Object(a.c)({url:d("hackerrank"===r?"loadNativeAds":"loadNativeAdsEnt",{slot:o}),ajaxServerConf:t,headers:{Accept:"application/vnd.api+json"},success:e=>{const t=(e.data.attributes||{}).ad_unit;n({type:u.a.NATIVE_AD.LOAD_NATIVE_ADS,data:{slot:o,adUnit:t}})}})},dismissNativeAd:(e,t)=>n=>{const o=e.slot,r=e.id,s=e.ad_unit_type,i=e.productType,l="hackerrank"===i?"dismissNativeAd":"dismissNativeAdEnt",c="hackerrank"===i?o:s;return Object(a.f)({url:d(l,{ad_unit_id:r}),ajaxServerConf:t,headers:{Accept:"application/vnd.api+json"},data:{ad_unit_id:r},success:()=>{n({type:u.a.NATIVE_AD.DISMISS_NATIVE_ADS,data:{slot:c}})},error:e=>{console.log("error ",e)}})}};t.a=p}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_library-de98bc14.js.map