(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e6e0d23d","chunk-2d0b2979":"77ef5f72"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=l(t);var c=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/flower-shop/",r.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7b17");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppLayout",[a("router-view")],1)],1)},n=[],l=(a("5c0b"),a("2877")),r={},o=Object(l["a"])(r,i,n,!1,null,null,null),c=o.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home"},[a("TheCarousel"),a("TheBenefits"),a("TheCategories"),a("AppAboutUs"),a("TheNewArrivals"),a("TheCustomFlower"),a("TheLatestPosts"),a("AppTestimonial")],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel carousel-fade carousel-dark slide",attrs:{id:"myCarousel","data-bs-ride":"carousel"}},[t._m(0),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active",attrs:{"data-bs-interval":"4000"}},[a("div",{staticClass:"bg-img img-carousel-1"}),a("div",{staticClass:"carousel-caption pb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"carousel__text text-start"},[a("span",[t._v("Shop hoa tươi & Quà tặng")]),a("h2",[t._v("Đẹp nhẹ nhàng đắm say lòng người.")]),a("router-link",{staticClass:"btn-florist",attrs:{to:"/gioi-thieu"}},[t._v("Giới thiệu")])],1)])])])])]),a("div",{staticClass:"carousel-item",attrs:{"data-bs-interval":"4000"}},[a("div",{staticClass:"bg-img img-carousel-2"}),a("div",{staticClass:"carousel-caption pb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"carousel__text text-start"},[a("span",[t._v("Shop hoa tươi & Quà tặng")]),a("h2",[t._v("Đẹp tinh khôi tặng người yêu mến.")]),a("router-link",{staticClass:"btn-florist",attrs:{to:"/dich-vu"}},[t._v("Dịch vụ")])],1)])])])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel-indicators"},[a("button",{staticClass:"active",attrs:{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0","aria-label":"Slide 1","aria-current":"true"}}),a("button",{attrs:{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}})])}],h={name:"TheCarousel"},f=h,b=Object(l["a"])(f,p,v,!1,null,null,null),g=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"benefits"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.benefitItems,(function(e){return a("div",{key:e.id,staticClass:"col-sm-6 col-md-6 col-lg-3"},[a("div",{staticClass:"benefits__item"},[a("div",{staticClass:"benefits__item__icon"},[a("img",{attrs:{src:"img/benefit/benefit-"+e.id+".png"}})]),a("div",{staticClass:"benefits__item__text"},[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.content))])])])])})),0)])])},_=[],y={name:"TheBenefits",data:function(){return{benefitItems:[{id:1,title:"Hoa tươi",content:"Đảm bảo chất lượng, cam kết dùng 100% hoa tươi."},{id:2,title:"Băng rôn",content:"Chúng tôi miễn phí thiệp, băng rôn kèm theo hoa."},{id:3,title:"Vận chuyển",content:"Chúng tôi miễn phí giao hoa nội thành Tp. Hà Nội."},{id:4,title:"Chụp hình",content:"Cam kết uy tín, có chụp hình gửi khách xem trước."}]}}},z=y,A=Object(l["a"])(z,C,_,!1,null,null,null),I=A.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.categoriesItems,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-3"},[a("div",{staticClass:"categories__item set-bg",style:{"background-image":"url(img/categories/categories-"+e.id+".jpg)"}},[a("div",{staticClass:"categories__item__text"},[a("h4",[a("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])]),a("span",[t._v("( SL: "+t._s(e.quantity)+" )")])])])])})),0)])])},E=[],k={name:"TheCategories",data:function(){return{categoriesItems:[{id:1,name:"Hoa tươi",quantity:25,link:"#"},{id:2,name:"Cây mọng nước",quantity:162,link:"#"},{id:3,name:"Cây xương rồng",quantity:58,link:"#"},{id:4,name:"Cây nội thất",quantity:25,link:"#"}]}}},B=k,x=Object(l["a"])(B,w,E,!1,null,null,null),T=x.exports,M=a("f975"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"arrival spad"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[t._m(0),a("div",{staticClass:"filter__controls"},[a("ul",t._l(t.filterSet,(function(e){return a("li",{key:e.id,class:{active:t.selectedFilterId==e.id},on:{click:function(a){t.selectedFilterId=e.id}}},[t._v(" "+t._s(e.filterName)+" ")])})),0)])])]),a("div",{staticClass:"row"},[t._l(t.newArrivalsItems,(function(e){return[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.selectedFilterId||e.filterId==t.selectedFilterId,expression:"selectedFilterId == 0 || item.filterId == selectedFilterId"}],key:e.productId,staticClass:"d-col"},[a("div",{staticClass:"product__item"},[a("div",{staticClass:"product__item__pic set-bg",style:{"background-image":"url("+e.bgImgUrl+")"}},[""!=e.label?a("div",{staticClass:"label"},[t._v(" "+t._s(e.label)+" ")]):t._e(),a("ul",{staticClass:"product__item__hover"},[a("li",[a("button",{attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#productPreviewModal"},on:{click:function(a){t.quickViewProductId=e.productId}}},[a("span",{attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Xem chi tiết"}},[a("BaseIconSearch")],1)])]),a("li",[a("button",{attrs:{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:0==e.quantity||e.quantityInCart==e.quantity?"Hết số lượng để thêm vào giỏ":"Thêm vào giỏ hàng"},on:{click:function(a){return t.addToCard(e)}}},[a("span",[0==e.quantity||e.quantityInCart==e.quantity?a("BaseIconCartDisable"):0==e.quantityInCart?a("BaseIconCart"):a("BaseIconCartPlus")],1)])]),a("li",[a("button",{attrs:{type:"button"}},[a("span",{attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:e.isFavorited?"Bỏ khỏi danh sách yêu thích":"Thêm vào danh sách yêu thích"},on:{click:function(a){return t.favoriteToggle(e)}}},[e.isFavorited?a("BaseIconHeartFill"):a("BaseIconHeart")],1)])])])]),a("div",{staticClass:"product__item__text"},[a("button",{staticClass:"product__name",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#productPreviewModal"},on:{click:function(a){t.quickViewProductId=e.productId}}},[a("span",{attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Xem chi tiết"}},[t._v(" "+t._s(t.getFilterNameById(e.filterId))+" "),a("b",[t._v("No. "+t._s(e.productId))])])]),a("div",{staticClass:"price"},[t._v(" "+t._s(e.price)+"đ "),e.oldPrice>0?a("span",[t._v(t._s(e.oldPrice)+"đ")]):t._e()]),0!=e.quantity&&e.quantityInCart<e.quantity?a("button",{staticClass:"cart-btn",attrs:{type:"button"}},[t._v(" Thêm vào giỏ hàng ")]):t._e()])])])]}))],2),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"view__all"},[a("router-link",{staticClass:"btn-florist",attrs:{to:"/san-pham"}},[t._v("Xem tất cả sản phẩm")])],1)])])]),a("div",{staticClass:"modal fade",attrs:{id:"productPreviewModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v(t._s(t.quickViewProductId))]),t._m(2)])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("span",[t._v("Hoa tươi")]),a("h2",[t._v("Mới Nhập Về")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])}],j=a("b85c"),F=a("bc3a"),O=a.n(F),q={name:"TheNewArrivals",data:function(){return{selectedFilterId:0,quickViewProductId:-1,filterSet:null,newArrivalsItems:null}},created:function(){var t=this;O.a.get("".concat("https://api.jsonstorage.net/v1/json","/b9614b1d-567b-4e4c-9fe3-845b0a734ab5")).then((function(e){t.filterSet=e.data.filterSet,t.newArrivalsItems=e.data.newArrivalsItems})).catch((function(t){return console.log(t)}))},methods:{getFilterNameById:function(t){var e,a=Object(j["a"])(this.filterSet);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(s.id==t)return s.filterName}}catch(i){a.e(i)}finally{a.f()}return this.filterSet[0].filterName},addToCard:function(t){t.quantityInCart<t.quantity&&(t.quantityInCart++,this.$root.$data.selectedProductsCount++)},favoriteToggle:function(t){t.isFavorited?this.$root.$data.favoriteProductsCount--:this.$root.$data.favoriteProductsCount++,t.isFavorited=!t.isFavorited}}},H=q,D=Object(l["a"])(H,S,P,!1,null,null,null),L=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"custom-flower"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"custom-flower__text px-4"},[a("span",[t._v("Hoa thiết kế theo yêu cầu")]),a("h2",[t._v("Hoa thay bạn nói lời yêu thương.")]),a("router-link",{staticClass:"btn-florist",attrs:{to:"/san-pham/dat-hang"}},[t._v("Đặt hàng")]),a("router-link",{staticClass:"btn-florist btn-outline-florist",attrs:{to:"/gioi-thieu"}},[t._v("Giới thiệu")])],1)])])])])},J=[],U={name:"TheCustomFlower"},Q=U,R=Object(l["a"])(Q,N,J,!1,null,null,null),Z=R.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"latest-post",attrs:{id:"latest-post"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-5 col-md-6"},[a("div",{staticClass:"latest__btn"},[a("router-link",{staticClass:"btn-florist btn-outline-florist",attrs:{to:"/blog"}},[t._v("Xem tất cả blog")])],1)])]),a("div",{staticClass:"row"},t._l(t.latestPostsItems,(function(e){return a("div",{key:e.id,staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"blog__item"},[a("div",{staticClass:"blog__item__pic"},[a("img",{attrs:{src:e.imgUrl}})]),a("div",{staticClass:"blog__item__text"},[a("div",{staticClass:"label"},[a("span",[t._v(t._s(e.category))])]),a("h4",{staticClass:"text-center"},[a("router-link",{attrs:{to:"/blog/"+e.postId}},[t._v(t._s(e.title))])],1),a("p",[t._v(" "+t._s(e.content)+" ")]),a("p",{staticClass:"text-end"},[a("BaseIconCalendar"),t._v(t._s(e.postDate)+" "),a("BaseIconAuthor"),t._v(t._s(e.author)+" ")],1)])])])})),0)])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-7 col-md-6"},[a("div",{staticClass:"section-title"},[a("span",[t._v("Bài viết mới đăng")]),a("h2",[t._v("Các blog chúng tôi chia sẻ")])])])}],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"}}),a("path",{attrs:{d:"M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})])},Y=[],K=(a("a9e3"),{name:"BaseIconCalendar",props:{size:{type:[String,Number],default:16}}}),W=K,$=Object(l["a"])(W,X,Y,!1,null,null,null),tt=$.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])},at=[],st={name:"BaseIconAuthor",props:{size:{type:[String,Number],default:18}}},it=st,nt=Object(l["a"])(it,et,at,!1,null,null,null),lt=nt.exports,rt={name:"TheLatestPosts",components:{BaseIconCalendar:tt,BaseIconAuthor:lt},data:function(){return{latestPostsItems:null}},created:function(){var t=this;O.a.get("".concat("https://api.jsonstorage.net/v1/json","/f0e442b2-aa85-499d-903a-36f43954c027")).then((function(e){return t.latestPostsItems=e.data})).catch((function(t){return console.log(t)}))}},ot=rt,ct=Object(l["a"])(ot,G,V,!1,null,null,null),ut=ct.exports,dt=a("d946"),mt={name:"Home",pageTitle:"Florist | Trang chủ",components:{TheCarousel:g,TheBenefits:I,TheCategories:T,AppAboutUs:M["a"],TheNewArrivals:L,TheCustomFlower:Z,TheLatestPosts:ut,AppTestimonial:dt["a"]}},pt=mt,vt=Object(l["a"])(pt,d,m,!1,null,null,null),ht=vt.exports;s["a"].use(u["a"]);var ft=[{path:"/",name:"Home",component:ht},{path:"/gioi-thieu",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],bt=new u["a"]({mode:"history",base:"/flower-shop/",routes:ft}),gt=bt;function Ct(t){var e=t.$options.pageTitle;if(e)return"function"===typeof e?e.call(t):e}var _t={data:function(){return{get pageTitleStart(){return"Florist | "}}},created:function(){var t=Ct(this);t&&(document.title=t)}},yt=a("c987"),zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{attrs:{src:"data:image/webp;base64,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",alt:"Florist Logo"}})},At=[],It={name:"BaseLogo"},wt=It,Et=Object(l["a"])(wt,zt,At,!1,null,null,null),kt=Et.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.iconSize,height:t.iconSize,fill:"currentColor",viewBox:"0 0 "+t.defaultWidthHeight+" "+t.defaultWidthHeight}},[t._t("default")],2)},xt=[],Tt={name:"BaseIconSvgTemplate",data:function(){return{defaultWidthHeight:18}},props:{iconSize:{type:[String,Number],default:18}}},Mt=Tt,St=Object(l["a"])(Mt,Bt,xt,!1,null,null,null),Pt=St.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})])},Ft=[],Ot={name:"BaseIconCart",props:{size:{type:[String,Number],default:18}}},qt=Ot,Ht=Object(l["a"])(qt,jt,Ft,!1,null,null,null),Dt=Ht.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}}),a("path",{attrs:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])},Nt=[],Jt={name:"BaseIconCartPlus",props:{size:{type:[String,Number],default:18}}},Ut=Jt,Qt=Object(l["a"])(Ut,Lt,Nt,!1,null,null,null),Rt=Qt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"}}),a("path",{attrs:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])},Gt=[],Vt={name:"BaseIconCartMinus",props:{size:{type:[String,Number],default:18}}},Xt=Vt,Yt=Object(l["a"])(Xt,Zt,Gt,!1,null,null,null),Kt=Yt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"}}),a("path",{attrs:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])},$t=[],te={name:"BaseIconCartDisable",props:{size:{type:[String,Number],default:18}}},ee=te,ae=Object(l["a"])(ee,Wt,$t,!1,null,null,null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}}),a("path",{attrs:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])},ne=[],le={name:"BaseIconCartCheck",props:{size:{type:[String,Number],default:18}}},re=le,oe=Object(l["a"])(re,ie,ne,!1,null,null,null),ce=oe.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}})])},de=[],me={name:"BaseIconHeart",props:{size:{type:[String,Number],default:18}}},pe=me,ve=Object(l["a"])(pe,ue,de,!1,null,null,null),he=ve.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})])},be=[],ge={name:"BaseIconHeartFill",props:{size:{type:[String,Number],default:18}}},Ce=ge,_e=Object(l["a"])(Ce,fe,be,!1,null,null,null),ye=_e.exports,ze=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])},Ae=[],Ie={name:"BaseIconSearch",props:{size:{type:[String,Number],default:18}}},we=Ie,Ee=Object(l["a"])(we,ze,Ae,!1,null,null,null),ke=Ee.exports;s["a"].mixin(_t),s["a"].component("AppLayout",yt["default"]),s["a"].component("BaseLogo",kt),s["a"].component("BaseIconSvgTemplate",Pt),s["a"].component("BaseIconCart",Dt),s["a"].component("BaseIconCartPlus",Rt),s["a"].component("BaseIconCartMinus",Kt),s["a"].component("BaseIconCartDisable",se),s["a"].component("BaseIconCartCheck",ce),s["a"].component("BaseIconHeart",he),s["a"].component("BaseIconHeartFill",ye),s["a"].component("BaseIconSearch",ke),s["a"].config.productionTip=!1,new s["a"]({router:gt,data:{isSignedIn:!1,selectedProductsCount:0,favoriteProductsCount:0},render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},c083:function(t,e,a){var s={"./AppLayout.vue":["c987"],"./AppLayoutDefault.vue":["2588","chunk-2d0b2979"]};function i(t){if(!a.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],i=e[0];return Promise.all(e.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(s)},i.id="c083",t.exports=i},c987:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.layout,{tag:"component"},[t._t("default")],2)},i=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),"AppLayoutDefault"),l={name:"AppLayout",computed:{layout:function(){var t=this.$route.meta.layout||n;return function(){return a("c083")("./".concat(t,".vue"))}}}},r=l,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=c.exports},d946:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"testimonial carousel slide carousel-dark",attrs:{id:"myTestimonial","data-bs-ride":"carousel"}},[a("div",{staticClass:"carousel-indicators pb-4"},t._l(3,(function(t){return a("button",{key:t,class:{active:1==t},attrs:{"data-bs-slide-to":t-1,"aria-label":"Slide "+t,"data-bs-target":"#myTestimonial",type:"button"}})})),0),a("div",{staticClass:"carousel-inner"},t._l(t.testimonialItems,(function(e){return a("div",{key:e.id,staticClass:"carousel-item",class:{active:1==e.id},attrs:{"data-bs-interval":"5000"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"carousel-caption row justify-content-center"},[a("div",{staticClass:"col-lg-7"},[a("div",{staticClass:"testimonial__text mx-5"},[a("img",{attrs:{src:"data:image/webp;base64,UklGRmACAABXRUJQVlA4TFMCAAAvQgANEOdgkG2k7V7y/UWmYTZtGzVT/3+2U4nitm0j2fv/M2tPIYhkG/8SvPcT+JU1owkJXoD6m9l/rzXRFY0EKYAVEUqgSIK4IaBhQCsBU/kyYZNm3il9t+tCsm3bUdxcJIwxhUt0B+T4/f+Poo5kmElE/ydAyc8NYFlef0zNu+8LOJblx6npROn3RyO7KDy+ujpH5eGbzFS+rGaAtyR5P67cF2sQoJfU+X4+Aa7Pigjxdu/iCVyuiVe2DwAvayZZBBgekXwANmsnuRPon5FmYLMHZCtc7iENwKtggLlCtsJhVX2FBiDmHMll+XEZuRNi2cz9WL4/LKMJ6DKaE/fFpdQDXVF33u7Xj6UUYM4pnhkYUgowF8mFDGyW8oDL3c2PM8CY8oAVJbs+7sBlCb1hLrv7HegTCjDUSbIJ2Czh4KqTBTgsMcK7idQDMaEdfJ26E2KiAxppgssSE0wNNMKW0Aq+ke0wJDyEFgZ0idBOEeZHtINPzDC06iEkBDQJuQixlYPtnzM4n9n+hh5Cg+43/w2nGrnf7McFU41fLsrHJj8b5aeV2Re1kxq4jcrdqWwD2EM+ejXw3EN+Hk1lEXibmhbYAWevtjcHjGpcMMFueiBC0GOA1xMB/GMOVj1yQPfYAPMzgB6LEP8LWsE1e0N/8xCadbDrDX2zDdytg6NZD0ERDms0AkqeMLbaIMpOeFkTf0FMjYBvYi84TfLA8eFq7PcFBGUD8Pq1GvfnAHpJijTfu1y303xW0u+NJlOhTY3OXlmL81pzhtir0sdw1qzvaLoDAA=="}}),a("p",[t._v("“"+t._s(e.content)+"”")]),a("h4",[t._v(t._s(e.name))])])])])])])])])})),0),t._m(0),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#myTestimonial","data-bs-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#myTestimonial","data-bs-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],n=a("bc3a"),l=a.n(n),r={name:"AppTestimonial",data:function(){return{testimonialItems:null}},created:function(){var t=this;l.a.get("".concat("https://api.jsonstorage.net/v1/json","/ba79d80e-fd4e-4084-a851-2eaa13e0e68a")).then((function(e){return t.testimonialItems=e.data})).catch((function(t){return console.log(t)}))}},o=r,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=u.exports},f975:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7"},[a("div",{staticClass:"about__video set-bg",staticStyle:{"background-image":"url('img/about/about-video.jpg')"}},[a("a",{attrs:{href:"https://www.youtube.com"}},[a("svg",{staticClass:"bi bi-play-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"}})])])])]),a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"about__text"},[a("span",[t._v("Sống chậm & ngắm hoa")]),a("h2",[t._v("Sống chậm và hít thở cùng đóa hồng")]),a("p",[t._v(" Lorem ipsum dolor sit amet, ultrices dui sapien. Tellus orci ac auctor au auue neque. Maada fames ac pis egestas maeceas conlis posuere. Arcu risus quis vaius qu quis id diam. ")]),a("router-link",{staticClass:"btn-florist",attrs:{to:"/lien-he"}},[t._v("Liên hệ")])],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"section-title"},[a("span",[t._v("Giới thiệu")]),a("h2",[t._v("Chúng tôi cung cấp nhiều loại dịch vụ hoa tươi")])])]),a("div",{staticClass:"col-lg-7 offset-lg-1"},[a("div",{staticClass:"about__top__text"},[a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi. Non sodales neque sodales ut etiam sit. Diam vulputate ut pharetra sit amet aliquam. Scelerisque purus semper eget duis. Fusce ut placerat orci nulla pellentesque enim. ")])])])])}],n={name:"AppAboutUs"},l=n,r=a("2877"),o=Object(r["a"])(l,s,i,!1,null,null,null);e["a"]=o.exports}});
//# sourceMappingURL=app.c3034c30.js.map