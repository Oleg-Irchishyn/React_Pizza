(this["webpackJsonpreact-pizza-shop"]=this["webpackJsonpreact-pizza-shop"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t),a.d(t,"addPizzaToCart",(function(){return C})),a.d(t,"clearCart",(function(){return E})),a.d(t,"removeCartItem",(function(){return d})),a.d(t,"plusCartItem",(function(){return g})),a.d(t,"minusCartItem",(function(){return p}));var n=a(19),A=a(1),c=a(41),r="react-pizza/cart/ADD_PIZZA_TO_CART",o="react-pizza/cart/CLEAR_CART",i="react-pizza/cart/REMOVE_CART_ITEM",l="react-pizza/cart/PLUS_CART_ITEM",s="react-pizza/cart/MINUS_CART_ITEM",u={items:JSON.parse(localStorage.getItem("cartItems"))||{},totalPrice:JSON.parse(localStorage.getItem("cartItemsTotalPrice"))||0,totalCount:JSON.parse(localStorage.getItem("cartItemsTotalCount"))||0},m=function(e){return e.reduce((function(e,t){return t.price+e}),0)},C=function(e){return{type:r,payload:e}},E=function(){return{type:o}},d=function(e){return{type:i,payload:e}},g=function(e){return{type:l,payload:e}},p=function(e){return{type:s,payload:e}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var a=e.items[t.payload.id]?[].concat(Object(c.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],C=Object(A.a)(Object(A.a)({},e.items),{},Object(n.a)({},t.payload.id,{items:a,totalPrice:m(a)})),E=Object.keys(C).reduce((function(e,t){return C[t].items.length+e}),0),d=Object.keys(C).reduce((function(e,t){return C[t].totalPrice+e}),0);return Object(A.a)(Object(A.a)({},e),{},{items:C,totalCount:E,totalPrice:d});case o:return{items:{},totalPrice:0,totalCount:0};case i:var g=Object(A.a)({},e.items),p=g[t.payload].totalPrice,b=g[t.payload].items.length;return delete g[t.payload],Object(A.a)(Object(A.a)({},e),{},{items:g,totalPrice:e.totalPrice-p,totalCount:e.totalCount-b});case l:var h=[].concat(Object(c.a)(e.items[t.payload].items),[e.items[t.payload].items[0]]),B=Object(A.a)(Object(A.a)({},e.items),{},Object(n.a)({},t.payload,{items:h,totalPrice:m(h)})),f=Object.keys(B).reduce((function(e,t){return B[t].items.length+e}),0),k=Object.keys(B).reduce((function(e,t){return B[t].totalPrice+e}),0);return Object(A.a)(Object(A.a)({},e),{},{items:Object(A.a)(Object(A.a)({},e.items),{},Object(n.a)({},t.payload,{items:h,totalPrice:m(h)})),totalCount:f,totalPrice:k});case s:var I=e.items[t.payload].items,Q=I.length>1?e.items[t.payload].items.slice(1):I,w=Object(A.a)(Object(A.a)({},e.items),{},Object(n.a)({},t.payload,{items:Q,totalPrice:m(Q)})),y=Object.keys(w).reduce((function(e,t){return w[t].items.length+e}),0),O=Object.keys(w).reduce((function(e,t){return w[t].totalPrice+e}),0);return Object(A.a)(Object(A.a)({},e),{},{items:w,totalCount:y,totalPrice:O});default:return e}}},14:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return A})),a.d(t,"a",(function(){return c}));var n=function(e){return e.cart.totalPrice},A=function(e){return e.cart.totalCount},c=function(e){return e.cart.items}},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return A}));var n=function(e){return e.filters.category},A=function(e){return e.filters.sortBy}},16:function(e,t,a){"use strict";a.r(t);var n=a(20),A=a.n(n),c=a(33),r=a(1),o=a(54).create({baseURL:"/"}),i=function(e,t){return o.get("pizzas?".concat(null!==e?"category=".concat(e):null,"&_sort=").concat(t,"&_order=asc")).then((function(e){return e.data}))},l=function(e,t){return o.get("pizzasEng?".concat(null!==e?"category=".concat(e):null,"&_sort=").concat(t,"&_order=asc")).then((function(e){return e.data}))},s=function(e,t){return o.get("pizzasUkr?".concat(null!==e?"category=".concat(e):null,"&_sort=").concat(t,"&_order=asc")).then((function(e){return e.data}))};a.d(t,"setPizzas",(function(){return E})),a.d(t,"setLoaded",(function(){return d})),a.d(t,"setPizzasSuccess",(function(){return g})),a.d(t,"setEngPizzasSuccess",(function(){return p})),a.d(t,"setUkrPizzasSuccess",(function(){return b}));var u="react-pizza/pizzas/SET_PIZZAS",m="react-pizza/pizzas/SET_LOADED",C={items:null,isLoaded:!1},E=function(e){return{type:u,payload:e}},d=function(e){return{type:m,value:e}},g=function(e,t){return function(){var a=Object(c.a)(A.a.mark((function a(n){var c;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!1)),a.next=3,i(e,t);case 3:c=a.sent,n(E(c));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(c.a)(A.a.mark((function a(n){var c;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!1)),a.next=3,l(e,t);case 3:c=a.sent,n(E(c));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(c.a)(A.a.mark((function a(n){var c;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!1)),a.next=3,s(e,t);case 3:c=a.sent,n(E(c));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(r.a)(Object(r.a)({},e),{},{items:t.payload,isLoaded:!0});case m:return Object(r.a)(Object(r.a)({},e),{},{isLoaded:t.value});default:return e}}},22:function(e,t,a){"use strict";a.r(t),a.d(t,"setSortBy",(function(){return o})),a.d(t,"setCategoty",(function(){return i}));var n=a(1),A="react-pizza/filters/SET_SORT_BY",c="react-pizza/filters/SET_CATEGORY",r={sortBy:"rating",category:null,sortItems:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name"}]},o=function(e){return{type:A,payload:e}},i=function(e){return{type:c,payload:e}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(n.a)(Object(n.a)({},e),{},{sortBy:t.payload});case c:return Object(n.a)(Object(n.a)({},e),{},{category:t.payload});default:return e}}},23:function(e,t,a){"use strict";var n=a(0),A=a.n(n),c=a(56),r=a.n(c),o=a(17),i=a.n(o),l=a(11),s=a(5),u=a(14),m=function(e){var t=e.outline,a=e.className;A.a.useEffect((function(){localStorage.setItem("cartItemsTotalPrice",JSON.stringify(c)),localStorage.setItem("cartItemsTotalCount",JSON.stringify(r))}));var n=Object(s.d)((function(e){return{totalPrice:Object(u.c)(e),totalCount:Object(u.b)(e)}})),c=n.totalPrice,r=n.totalCount;return(A.a.createElement("div",{className:"header__cart"},A.a.createElement(l.b,{to:"/cart",className:i()("button",a,{"button-outline":t})},A.a.createElement("span",null,c,"\u20bd"),A.a.createElement("div",{className:"button__delimiter"}),A.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),A.a.createElement("span",null," ",r))))},C=a(100),E=function(){var e=Object(C.a)().t;return(A.a.createElement("div",{className:"header"},A.a.createElement("div",{className:"container"},A.a.createElement(l.b,{to:"/"},A.a.createElement("div",{className:"header__logo"},A.a.createElement("img",{width:"38",src:r.a,alt:"Pizza logo"}),A.a.createElement("div",null,A.a.createElement("h1",null,e("HeaderTitle.1")),A.a.createElement("p",null,e("HeaderDescription.1"))))),A.a.createElement(h,null),A.a.createElement(m,{outline:!0,className:"button--cart"}))))},d=a(1),g=a(4),p=a(16),b=a(15),h=Object(g.d)(Object(s.b)((function(e){return{category:Object(b.a)(e),sortBy:Object(b.b)(e)}}),(function(e){return Object(d.a)({},Object(g.b)(p,e))})))((function(e){var t=e.category,a=e.sortBy,n=e.setEngPizzasSuccess,c=e.setUkrPizzasSuccess,r=e.setPizzasSuccess,o=Object(C.a)().i18n,i=function(e){o.changeLanguage(e)};return A.a.createElement("div",null,A.a.createElement("nav",{className:"languagepicker"},A.a.createElement("button",{className:"languagepicker__item",onClick:function(){i("en"),n(t,a)}},"English"),A.a.createElement("button",{className:"languagepicker__item",onClick:function(){i("uk"),c(t,a)}},"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"),A.a.createElement("button",{className:"languagepicker__item",onClick:function(){i("ru"),r(t,a)}},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439")))})),B=a(18),f=a(22),k=A.a.memo((function(e){var t=e.items,a=e.setCategoty,c=Object(n.useState)(null),r=Object(B.a)(c,2),o=r[0],i=r[1],l=Object(C.a)().t,s=function(e){i(e),a(e)};return A.a.createElement("div",{className:"categories"},A.a.createElement("ul",null,A.a.createElement("li",{className:null===o?"active":"",onClick:function(){return s(null)}},l("categoryItems.All")),t&&t.map((function(e,t){return A.a.createElement("li",{className:o===t?"active":"",onClick:function(){return s(t)},key:"".concat(e,"_").concat(t)},e)}))))}));k.defaultProps={items:[]};var I=Object(g.d)(Object(s.b)(null,(function(e){return Object(d.a)({},Object(g.b)(f,e))})))(k),Q=A.a.memo((function(e){var t=e.items,a=e.activeSortType,c=e.setSortBy,r=Object(C.a)().t,o=t.find((function(e){return e.type===a})).name,i=Object(n.useState)(!1),l=Object(B.a)(i,2),s=l[0],u=l[1],m=Object(n.useRef)(),E=function(e){(e.path||e.composedPath&&e.composedPath()).includes(m.current)||u(!1)};return Object(n.useEffect)((function(){document.body.addEventListener("click",E)}),[]),A.a.createElement("div",{ref:m,className:"sort"},A.a.createElement("div",{className:"sort__label"},A.a.createElement("svg",{className:s?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),A.a.createElement("b",null,r("sortByText.text"),":"),A.a.createElement("span",{onClick:function(){u(!s)}},o)),s&&A.a.createElement("div",{className:"sort__popup"},A.a.createElement("ul",null,t&&t.map((function(e,t){return A.a.createElement("li",{className:a===e.type?"active":"",onClick:function(){return t=e.type,u(!1),void c(t);var t},key:"".concat(e.type,"_").concat(t)},e.name)})))))}));Q.defaultProps={items:[]};var w=Q,y=(a(51),function(e){var t=e.id,a=e.name,n=e.type,c=e.size,r=e.totalPrice,o=e.totalCount,i=e.onRemovePizza,l=e.onPlusItem,s=e.onMinusItem;return A.a.createElement("div",{className:"cart__item"},A.a.createElement("div",{className:"cart__item-img"},A.a.createElement("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})),A.a.createElement("div",{className:"cart__item-info"},A.a.createElement("h3",null,a),A.a.createElement("p",null,n," \u0442\u0435\u0441\u0442\u043e, ",c," \u0441\u043c.")),A.a.createElement("div",{className:"cart__item-count"},A.a.createElement("div",{onClick:function(){s(t)},className:"button button--outline button--circle cart__item-count-minus"},A.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),A.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),A.a.createElement("b",null,o),A.a.createElement("div",{onClick:function(){l(t)},className:"button button--outline button--circle cart__item-count-plus"},A.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),A.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),A.a.createElement("div",{className:"cart__item-price"},A.a.createElement("b",null,r," \u20bd")),A.a.createElement(O,{onClick:function(){i(t)}}))}),O=function(e){var t=e.onClick;return(A.a.createElement("div",{className:"cart__item-remove"},A.a.createElement("div",{onClick:t,className:"button button--outline button--circle"},A.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),A.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))},S=function(e){var t=e.onClickOrder,a=Object(C.a)().t;return A.a.createElement("div",{onClick:t,className:"button pay-btn"},A.a.createElement("span",null,a("cart.cartButtonText")))},v=function(e){var t=e.outline,a=e.className,n=e.onClick,c=e.addedCountToCart,r=Object(C.a)().t;return A.a.createElement("div",{onClick:n,className:i()("button",a,{"button-outline":t})},A.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),A.a.createElement("span",null,r("singlePizza.buttonText")),c&&A.a.createElement("i",null,c))},j=function(e){var t=e.id,a=e.imageUrl,c=e.name,r=e.price,o=e.types,l=e.sizes,s=e.onClickAddPizza,u=e.addedCountToCart,m=Object(C.a)().t,E=[m("singlePizza.sizetypeFirst"),m("singlePizza.sizetypeSecond")],d=[26,30,40],g=Object(n.useState)(o[0]),p=Object(B.a)(g,2),b=p[0],h=p[1],f=Object(n.useState)(0),k=Object(B.a)(f,2),I=k[0],Q=k[1];return A.a.createElement("div",{className:"pizza-block"},A.a.createElement("img",{className:"pizza-block__image",src:a,alt:"Pizza"}),A.a.createElement("h4",{className:"pizza-block__title"},c),A.a.createElement("div",{className:"pizza-block__selector"},A.a.createElement("ul",null,E.map((function(e,t){return A.a.createElement("li",{key:"".concat(e,"_").concat(t),className:i()({active:b===t,disabled:!o.includes(t)}),onClick:function(){return function(e){h(e)}(t)}},e)}))),A.a.createElement("ul",null,d.map((function(e,t){return A.a.createElement("li",{key:"".concat(e,"_").concat(t),className:i()({active:I===t,disabled:!l.includes(e)}),onClick:function(){return function(e){Q(e)}(t)}},e," ",m("singlePizza.sizeText"))})))),A.a.createElement("div",{className:"pizza-block__bottom"},A.a.createElement("div",{className:"pizza-block__price"}," ",m("singlePizza.priceText")," ",r," \u20b4"),A.a.createElement(v,{onClick:function(){var e={id:t,name:c,imageUrl:a,price:r,size:l[d],type:o[E]};s(e)},addedCountToCart:u,className:"button button--add"})))};j.defaultProps={name:"---",price:0,types:[],sizes:[]};var L=j,z=a(13),x=function(e){return e.pizzas.items},M=function(e){return e.pizzas.isLoaded},N=a(61),q=function(){return A.a.createElement(N.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},A.a.createElement("circle",{cx:"132",cy:"142",r:"115"}),A.a.createElement("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),A.a.createElement("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),A.a.createElement("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),A.a.createElement("rect",{x:"145",y:"415",rx:"15",ry:"15",width:"132",height:"41"}))},J=A.a.memo((function(e){var t=Object.assign({},e),a=Object(C.a)().t,n=[a("categoryItems.Meat"),a("categoryItems.Vegetarian"),a("categoryItems.Grill"),a("categoryItems.Spicy"),a("categoryItems.Closed")],c=[{name:a("sortItemsName.popular"),type:"rating"},{name:a("sortItemsName.price"),type:"price"},{name:a("sortItemsName.alphabet"),type:"name"}];return A.a.createElement(H,Object.assign({},t,{categoryItems:n,sortItems:c}))})),H=function(e){var t=e.pizzas,a=e.isLoaded,n=e.setSortBy,c=e.sortBy,r=e.sortItems,o=e.categoryItems,i=e.addPizzaToCart,l=e.cartItems,s=Object(C.a)().t,u=function(e){i(e)};return A.a.createElement("div",{className:"container"},A.a.createElement("div",{className:"content__top"},A.a.createElement(I,{items:o}),A.a.createElement(w,{activeSortType:c,items:r,setSortBy:n})),A.a.createElement("h2",{className:"content__title"},s("ContentTitle.title")),A.a.createElement("div",{className:"content__items"},a?t.map((function(e){return A.a.createElement(L,Object.assign({key:e.id},e,{isLoaded:!0,onClickAddPizza:u,addedCountToCart:l[e.id]&&l[e.id].items.length}))})):Array(10).fill(t).map((function(e,t){return A.a.createElement(q,{key:t})}))))},R=Object(g.d)(Object(s.b)((function(e){return{pizzas:x(e),isLoaded:M(e),category:Object(b.a)(e),sortBy:Object(b.b)(e),cartItems:Object(u.a)(e)}}),(function(e){return Object(d.a)(Object(d.a)(Object(d.a)({},Object(g.b)(p,e)),Object(g.b)(f,e)),Object(g.b)(z,e))})))(J);a.d(t,"c",(function(){return E})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return I})),a.d(t,"h",(function(){return w})),a.d(t,"a",(function(){return y})),a.d(t,"g",(function(){return O})),a.d(t,"f",(function(){return S})),a.d(t,"e",(function(){return R}))},39:function(e,t,a){e.exports={preLoaderWrapper:"Preloader_preLoaderWrapper__3xMiQ"}},51:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),c=a(5),r=a(11),o=a(14),i=a(13),l=a(23),s=a(60),u=a.n(s),m=a(100);t.default=function(){A.a.useEffect((function(){localStorage.setItem("cartItems",JSON.stringify(n))}));var e=Object(m.a)().t,t=Object(c.c)(),a=Object(c.d)((function(e){return{items:Object(o.a)(e),totalPrice:Object(o.c)(e),totalCount:Object(o.b)(e)}})),n=a.items,s=a.totalPrice,C=a.totalCount,E=Object.keys(n).map((function(e){return n[e].items[0]})),d=function(a){window.confirm(e("cart.confirmMessage.2"))&&t(Object(i.removeCartItem)(a))},g=function(e){t(Object(i.plusCartItem)(e))},p=function(e){t(Object(i.minusCartItem)(e))};return A.a.createElement("div",{className:"content"},A.a.createElement("div",{className:"container container--cart"},C?A.a.createElement("div",{className:"cart"},A.a.createElement("div",{className:"cart__top"},A.a.createElement("h2",{className:"content__title"},A.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),e("cart.title")),A.a.createElement("div",{className:"cart__clear"},A.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),A.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),A.a.createElement("span",{onClick:function(){window.confirm(e("cart.confirmMessage.1"))&&t(Object(i.clearCart)())}},e("cart.clearMessage")))),A.a.createElement("div",{className:"content__items"},E.map((function(e,t){return A.a.createElement(l.a,{id:e.id,key:"".concat(e,"_").concat(t),name:e.name,type:e.type,size:e.size,totalPrice:n[e.id].totalPrice,totalCount:n[e.id].items.length,onRemovePizza:d,onPlusItem:g,onMinusItem:p})}))),A.a.createElement("div",{className:"cart__bottom"},A.a.createElement("div",{className:"cart__bottom-details"},A.a.createElement("span",null," ",e("cart.pizzasTotalText"),": ",A.a.createElement("b",null,C," ",e("cart.pizzasTotalAmountText"),".")," "),A.a.createElement("span",null," ",e("cart.orderSumText"),": ",A.a.createElement("b",null,s," \u20b4")," ")),A.a.createElement("div",{className:"cart__bottom-buttons"},A.a.createElement("a",{href:"/",className:"button button--outline button--add go-back-btn"},A.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),A.a.createElement(r.b,{to:"/"},A.a.createElement("span",null,e("cart.backToMainText")))),A.a.createElement(l.f,{onClickOrder:function(){console.log(e("cart.yourOrderMessage"),n)}})))):A.a.createElement("div",{className:"cart cart--empty"},A.a.createElement("h2",null,e("cart.emptyCartTitile"),A.a.createElement("span",null,"\ud83d\ude15")),A.a.createElement("p",null,e("cart.emptyCartMessage")),A.a.createElement("img",{src:u.a,alt:"Empty cart"}),A.a.createElement(r.b,{to:"/",className:"button button--black"},A.a.createElement("span",null,e("cart.backToMainText"))))))}},56:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},60:function(e,t,a){e.exports=a.p+"static/media/empty-cart.ceb2faf0.png"},62:function(e,t){e.exports="data:image/gif;base64,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"},66:function(e,t,a){e.exports=a(99)},90:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(4),A=a(52),c=a(53),r=a.n(c),o=a(16),i=a(22),l=a(13),s=Object(n.c)({pizzas:o.default,filters:i.default,cart:l.default}),u=[A.a,r.a],m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d,C=Object(n.e)(s,m(n.a.apply(void 0,u)));window.__store__=C;var E=C,d=a(0),g=a.n(d),p=a(29),b=a.n(p),h=a(1),B=(a(90),a(3)),f=a(5),k=a(23),I=a(15),Q=a(62),w=a.n(Q),y=a(39),O=a.n(y),S=function(e){return g.a.createElement("div",{className:O.a.preLoaderWrapper,style:{backgroundColor:"white"}},g.a.createElement("img",{className:O.a.preLoaderWrapperImg,alt:"preloader",src:w.a}))},v=g.a.lazy((function(){return Promise.resolve().then(a.bind(null,51))})),j=Object(n.d)(Object(f.b)((function(e){return{category:Object(I.a)(e),sortBy:Object(I.b)(e)}}),(function(e){return Object(h.a)({},Object(n.b)(o,e))})),B.f)((function(e){var t,a=e.category,n=e.sortBy,A=e.setPizzasSuccess;return Object(d.useEffect)((function(){A(a,n)}),[a,n]),g.a.createElement("div",{className:"wrapper"},g.a.createElement(k.c,null),g.a.createElement("div",{className:"content"},g.a.createElement(B.c,null,g.a.createElement(B.a,{exact:!0,path:"/",render:function(){return g.a.createElement(k.e,null)}}),g.a.createElement(B.a,{path:"/cart",render:(t=v,function(e){return g.a.createElement(d.Suspense,{fallback:g.a.createElement(S,null)},g.a.createElement(t,e))})}))))})),L=a(11),z=(a(98),a(40)),x=a(27),M=a(63),N=a(65);z.a.use(M.a).use(N.a).use(x.e).init({fallbackLng:"en",debug:!0,whiteList:["en","uk","ru"],interpolation:{escapeValue:!1}});z.a;b.a.render(g.a.createElement(L.a,null,g.a.createElement(f.a,{store:E},g.a.createElement(d.Suspense,{fallback:g.a.createElement(S,null)},g.a.createElement(j,null)))),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.66afdd21.chunk.js.map