(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2979"],{2588:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("TheHeader"),t._t("default"),e("TheInstagram"),e("TheFooter")],2)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"py-2"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("div",{staticClass:"container"},[t._m(0),e("a",{staticClass:"navbar-brand mx-auto d-none",attrs:{href:"/"}},[e("BaseLogo",{staticClass:"mx-auto"})],1),e("div",{staticClass:"navbar-icons d-flex pt-2"},[e("router-link",{staticClass:"nav-link px-2",attrs:{to:"/san-pham/tim-kiem","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Tìm kiếm sản phẩm"}},[e("BaseIconSearch",{attrs:{size:"20"}})],1),e("router-link",{staticClass:"nav-link px-2",attrs:{to:"/san-pham/yeu-thich","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Sản phẩm yêu thích"}},[e("div",{staticClass:"position-relative"},[e("BaseIconHeart",{attrs:{size:"20"}}),t.favoriteProductsCount>0?e("span",{staticClass:"\n                position-absolute\n                top-0\n                start-100\n                translate-middle\n                badge\n                rounded-pill\n                bg-danger\n              "},[t._v(" "+t._s(t.favoriteProductsCount)+" ")]):t._e()],1)]),e("router-link",{staticClass:"nav-link px-2",attrs:{to:"/san-pham/gio-hang","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Sản phẩm đã chọn"}},[e("div",{staticClass:"position-relative"},[e("BaseIconCart",{attrs:{size:"20"}}),t.selectedProductsCount>0?e("span",{staticClass:"\n                position-absolute\n                top-0\n                start-100\n                translate-middle\n                badge\n                rounded-pill\n                bg-danger\n              "},[t._v(" "+t._s(t.selectedProductsCount)+" ")]):t._e()],1)]),e("div",{staticClass:"dropdown text-end"},[e("span",{staticClass:"nav-link dropdown-toggle d-block",class:[t.isLoggedIn?"sign-in-icon":"sign-out-icon"],attrs:{id:"dropdownUser","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false",role:"button",title:"Tài khoản"}},[t.isLoggedIn?e("BaseIconSignIn",{staticClass:"rounded-circle",attrs:{size:"20"}}):e("BaseIconSignOut",{staticClass:"rounded-circle",attrs:{size:"20"}})],1),e("ul",{staticClass:"dropdown-menu dropdown-menu-end text-small",attrs:{"aria-labelledby":"dropdownUser"}},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"dropdown-item",class:{disabled:t.isLoggedIn},attrs:{to:"/dang-ky"}},[t._v(" Đăng ký ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"dropdown-item",class:{disabled:t.isLoggedIn},attrs:{to:"/dang-nhap"}},[t._v(" Đăng nhập ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"dropdown-item",class:{disabled:!t.isLoggedIn},attrs:{to:"/dang-xuat"}},[t._v(" Đăng xuất ")])],1),t._m(1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"dropdown-item",class:{disabled:!t.isLoggedIn},attrs:{to:"/dashboard"}},[t._v(" Bảng điều khiển ")])],1)])])],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[e("ul",{staticClass:"navbar-nav mx-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item nav-item--logo pt-3"},[e("a",{attrs:{href:"/"}},[e("BaseLogo")],1)]),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" TRANG CHỦ ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/gioi-thieu"}},[t._v("GIỚI THIỆU")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/dich-vu"}},[t._v("DỊCH VỤ")])],1),e("li",{staticClass:"nav-item dropdown"},[e("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:"/san-pham",id:"dropdown01","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" SẢN PHẨM ")]),e("ul",{staticClass:"dropdown-menu dropdown-menu-dark",attrs:{"aria-labelledby":"dropdown01"}},[e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/dat-hang"}},[t._v("Đặt hàng sản phẩm")])],1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/gio-hang"}},[t._v("Sản phẩm đã chọn")])],1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/thanh-toan"}},[t._v("Thanh toán")])],1),t._m(2),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/yeu-thich"}},[t._v("Sản phẩm yêu thích")])],1),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/tim-kiem"}},[t._v("Tìm kiếm sản phẩm")])],1),t._m(3),e("li",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/san-pham/deco"}},[t._v("Góc deco sản phẩm")])],1)])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/tin-tuc"}},[t._v("TIN TỨC")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/lien-he"}},[t._v("LIÊN HỆ")])],1)])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("hr",{staticClass:"dropdown-divider"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("hr",{staticClass:"dropdown-divider"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("hr",{staticClass:"dropdown-divider"})])}],l=(e("a9e3"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])}),r=[],c={name:"BaseIconSignIn",props:{size:{type:[String,Number],default:18}}},d=c,u=e("2877"),m=Object(u["a"])(d,l,r,!1,null,null,null),p=m.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}})])},v=[],g={name:"BaseIconSignOut",props:{size:{type:[String,Number],default:18}}},_=g,f=Object(u["a"])(_,h,v,!1,null,null,null),b=f.exports,C={name:"TheHeader",components:{BaseIconSignIn:p,BaseIconSignOut:b},data:function(){return{selectedProductsCount:{type:Number,default:0},favoriteProductsCount:{type:Number,default:0}}},computed:{isLoggedIn:{get:function(){return this.$root.$data.isSignedIn},set:function(t){this.$root.$data.isSignedIn=t}}},mounted:function(){this.isLoggedIn=this.$root.$data.isSignedIn,this.favoriteProductsCount=5,this.selectedProductsCount=3},methods:{signOut:function(){this.isLoggedIn=!1}}},I=C,k=Object(u["a"])(I,o,i,!1,null,null,null),z=k.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"instagram"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"instagram__post"},t._l(5,(function(a){return e("div",{key:a,staticClass:"instagram__post__item set-bg",style:{"background-image":"url(img/instagram/insta-"+a+".jpg)"}},[e("div",{staticClass:"instagram__post__item__hover"},[e("BaseIconInstagram",{attrs:{size:"30"}}),t._m(0,!0)],1)])})),0)])])])])},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h6",[t._v("Follow us "),e("a",{attrs:{href:"#"}},[t._v("@florist")])])}],B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})])},y=[],x={name:"BaseIconInstagram",props:{size:{type:[String,Number],default:18}}},S=x,L=Object(u["a"])(S,B,y,!1,null,null,null),E=L.exports,$={name:"TheInstagram",components:{BaseIconInstagram:E}},O=$,H=Object(u["a"])(O,w,T,!1,null,null,null),N=H.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__top"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"footer__logo"},[e("a",{staticClass:"d-inline-block",attrs:{href:"/"}},[e("BaseLogo")],1)])]),t._m(0),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"footer__top__social"},[e("a",{attrs:{href:"#","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Facebook"}},[e("BaseIconFacebook",{attrs:{size:"24"}})],1),e("a",{attrs:{href:"#","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Twitter"}},[e("BaseIconTwitter",{attrs:{size:"24"}})],1),e("a",{attrs:{href:"#","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Instagram"}},[e("BaseIconInstagram",{attrs:{size:"24"}})],1),e("a",{attrs:{href:"#","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Linkedin"}},[e("BaseIconLinkedin",{attrs:{size:"24"}})],1)])])])]),e("div",{staticClass:"footer__options"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"footer__widget footer__widget--info"},[e("h4",[t._v("Thông tin")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/gioi-thieu"}},[t._v("Giới thiệu")])],1),e("li",[e("router-link",{attrs:{to:"/dich-vu"}},[t._v("Dịch vụ")])],1),e("li",[e("router-link",{attrs:{to:"/lien-he"}},[t._v("Liên hệ")])],1)])])]),e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"footer__widget footer__widget--guide"},[e("h4",[t._v("Hướng dẫn")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/huong-dan-mua-hang"}},[t._v("Mua hàng")])],1),e("li",[e("router-link",{attrs:{to:"/huong-dan-doi-hang"}},[t._v("Đổi hàng")])],1),e("li",[e("router-link",{attrs:{to:"/huong-dan-thanh-toan"}},[t._v("Thanh toán")])],1)])])]),t._m(1),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"footer__widget footer__widget--address"},[e("h4",[t._v("Liên hệ")]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.google.com/maps/place/VMODEV/@21.0302135,105.781921,18.25z/data=!4m5!3m4!1s0x313454b354936a69:0xe0059369a89d3969!8m2!3d21.031066!4d105.781948",target:"_blank",rel:"noopener noreferrer"}},[e("BaseIconLocation"),t._v(" 68, Tôn Thất Thuyết, Cầu Giấy, Hà Nội ")],1)]),e("li",[e("a",{attrs:{href:"tel:+842433120103"}},[e("BaseIconTelephone"),t._v(" +84 24 3312 0103")],1)]),e("li",[e("a",{attrs:{href:"mailto:info@florist.com"}},[e("BaseIconEnvelope"),t._v(" info@florist.com")],1)])])])])])]),t._m(2)]),e("button",{staticClass:"text-white p-0 border-0 rounded-circle",attrs:{id:"back-to-top",title:"Lên đầu trang",type:"button"},on:{click:t.backToTop}},[e("BaseIconArrowUp")],1)])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"footer__top__text"},[e("p",{staticClass:"mb-0"},[t._v(" Chúng tôi giao hoa gần như hoàn toàn Miễn Phí đến các Quận nội thành Hà Nội và có hỗ trợ phí giao hàng tới các địa điểm xa khác. ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"footer__newslatter"},[e("h4",[t._v("Tin tức")]),e("p",[t._v(" Đăng ký nhận các bài viết của chúng tôi về các mẹo và thủ thuật cắm hoa, chăm sóc hoa ... ")]),e("form",{attrs:{action:"#"}},[e("input",{attrs:{type:"text",placeholder:"Email"}}),e("button",{attrs:{type:"submit"}},[t._v("Đăng ký")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer__copyright"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 text-center"},[e("p",[t._v("Copyright ©2021 Florist. All rights reserved")])])])])}],j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])},V=[],P={name:"BaseIconFacebook",props:{size:{type:[String,Number],default:18}}},F=P,U=Object(u["a"])(F,j,V,!1,null,null,null),G=U.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})])},J=[],Q={name:"BaseIconTwitter",props:{size:{type:[String,Number],default:18}}},R=Q,q=Object(u["a"])(R,D,J,!1,null,null,null),K=q.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}})])},X=[],Y={name:"BaseIconLinkedin",props:{size:{type:[String,Number],default:18}}},Z=Y,tt=Object(u["a"])(Z,W,X,!1,null,null,null),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}})])},st=[],nt={name:"BaseIconLocation",props:{size:{type:[String,Number],default:18}}},ot=nt,it=Object(u["a"])(ot,et,st,!1,null,null,null),lt=it.exports,rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}})])},ct=[],dt={name:"BaseIconTelephone",props:{size:{type:[String,Number],default:18}}},ut=dt,mt=Object(u["a"])(ut,rt,ct,!1,null,null,null),pt=mt.exports,ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"}})])},vt=[],gt={name:"BaseIconEnvelope",props:{size:{type:[String,Number],default:18}}},_t=gt,ft=Object(u["a"])(_t,ht,vt,!1,null,null,null),bt=ft.exports,Ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseIconSvgTemplate",{attrs:{"icon-size":t.size}},[e("path",{attrs:{d:"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"}})])},It=[],kt={name:"BaseIconArrowUp",props:{size:{type:[String,Number],default:40}}},zt=kt,wt=Object(u["a"])(zt,Ct,It,!1,null,null,null),Tt=wt.exports,Bt={name:"TheFooter",components:{BaseIconFacebook:G,BaseIconTwitter:K,BaseIconInstagram:E,BaseIconLinkedin:at,BaseIconLocation:lt,BaseIconTelephone:pt,BaseIconEnvelope:bt,BaseIconArrowUp:Tt},mounted:function(){this.$nextTick((function(){var t=document.getElementById("back-to-top");function a(){document.documentElement.scrollTop>100||document.body.scrollTop>100?t.style.display="block":t.style.display="none"}window.onscroll=function(){a()}}))},methods:{backToTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}},yt=Bt,xt=Object(u["a"])(yt,A,M,!1,null,null,null),St=xt.exports,Lt={name:"AppLayoutDefault",components:{TheHeader:z,TheInstagram:N,TheFooter:St}},Et=Lt,$t=Object(u["a"])(Et,s,n,!1,null,null,null);a["default"]=$t.exports}}]);
//# sourceMappingURL=chunk-2d0b2979.f0772e89.js.map