"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[9514,4608],{8704:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(7294),o=a(3905),l=a(6291),c=a(6698),i=a(6010),r=a(941),s=a(3783),d=a(7898),m=a(5537),u=a(7462);const b=e=>n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var p=a(4973),h=a(6742),E=a(3919),f=a(8617);const g={menuLinkText:"menuLinkText_OKON"},_=(e,t)=>"link"===e.type?(0,r.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>_(e,t))),k=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(C,(0,u.Z)({key:t,item:e},a)))))}));function C(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(v,(0,u.Z)({item:t},a)):n.createElement(S,(0,u.Z)({item:t},a))}function v(e){let{item:t,onItemClick:a,activePath:o,...l}=e;const{items:c,label:s,collapsible:d}=t,m=_(t,o),{collapsed:b,setCollapsed:p,toggleCollapsed:h}=(0,r.uR)({initialState:()=>!!d&&(!m&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:o}=e;const l=(0,r.D9)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a])}({isActive:m,collapsed:b,setCollapsed:p}),n.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":d,"menu__link--active":d&&m,[g.menuLinkText]:!d}),onClick:d?e=>{e.preventDefault(),h()}:void 0,href:d?"#":void 0},l),s),n.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(k,{items:c,tabIndex:b?-1:0,onItemClick:a,activePath:o})))}function S(e){let{item:t,onItemClick:a,activePath:o,...l}=e;const{href:c,label:s}=t,d=_(t,o);return n.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,E.Z)(c)&&{onClick:a},l),(0,E.Z)(c)?s:n.createElement("span",null,s,n.createElement(f.Z,null))))}const Z={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"};function N(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",Z.collapseSidebarButton),onClick:t},n.createElement(b,{className:Z.collapseSidebarButtonIcon}))}function I(e){let{path:t,sidebar:a,onCollapse:o,isHidden:l}=e;const c=function(){const{isClosed:e}=(0,r.nT)(),[t,a]=(0,n.useState)(!e);return(0,d.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:u}=(0,r.LU)(),{isClosed:b}=(0,r.nT)();return n.createElement("div",{className:(0,i.Z)(Z.sidebar,{[Z.sidebarWithHideableNavbar]:s,[Z.sidebarHidden]:l})},s&&n.createElement(m.Z,{tabIndex:-1,className:Z.sidebarLogo}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",Z.menu,{[Z.menuWithAnnouncementBar]:!b&&c})},n.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:t}))),u&&n.createElement(N,{onClick:o}))}const T=e=>{let{toggleSidebar:t,sidebar:a,path:o}=e;return n.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:o,onItemClick:()=>t()}))};function M(e){return n.createElement(r.Cv,{component:T,props:e})}const w=n.memo(I),B=n.memo(M);function x(e){const t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(w,e),o&&n.createElement(B,e))}var y=a(6845),L=a(4608),H=a(6550);const A="backToTopButton_i9tI",F="backToTopButtonShow_wCmF",P=!1;function W(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=P?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const D=function(){const e=(0,H.TH)(),{smoothScrollTop:t,cancelScrollToTop:a}=W(),[o,l]=(0,n.useState)(!1);return(0,d.Z)(((e,t)=>{let{scrollY:n}=e;if(!t)return;const o=n<t.scrollY;if(o||a(),n<300)l(!1);else if(o){const e=document.documentElement.scrollHeight;n+window.innerHeight<e&&l(!0)}else l(!1)}),[e]),n.createElement("button",{className:(0,i.Z)("clean-btn",A,{[F]:o}),type:"button",onClick:()=>t()},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},R={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};var z=a(9105);function O(e){let{currentDocRoute:t,versionMetadata:a,children:l}=e;const{pluginId:s,version:d}=a,m=t.sidebar,u=m?a.docsSidebars[m]:void 0,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),_=(0,n.useCallback)((()=>{f&&g(!1),E(!h)}),[f]);return n.createElement(c.Z,{wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,r.os)(s,d)}},n.createElement("div",{className:R.docPage},n.createElement(D,null),u&&n.createElement("aside",{className:(0,i.Z)(R.docSidebarContainer,{[R.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(R.docSidebarContainer)&&h&&g(!0)}},n.createElement(x,{key:m,sidebar:u,path:t.path,onCollapse:_,isHidden:f}),f&&n.createElement("div",{className:R.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(b,{className:R.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(R.docMainContainer,{[R.docMainContainerEnhanced]:h||!u})},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",R.docItemWrapper,{[R.docItemWrapperEnhanced]:h})},n.createElement(o.Zo,{components:y.Z},l)))))}const U=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,c=t.find((e=>(0,H.LX)(o.pathname,e)));return c?n.createElement(n.Fragment,null,n.createElement(z.Z,null,n.createElement("html",{className:a.className})),n.createElement(O,{currentDocRoute:c,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(L.default,e)}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),o=a(6698),l=a(4973);const c=function(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);