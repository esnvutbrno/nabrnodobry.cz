(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(t,e,n){t.exports=n.p+"img/line1-vertical.86d9e20.svg"},360:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("39a95dee",content,!0,{sourceMap:!1})},361:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("06a08cf9",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n(360)},367:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"article[data-v-1f8e0564]{height:80vh}",""]),r.locals={},t.exports=r},368:function(t,e,n){"use strict";n(361)},369:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".dark .leaflet-tile-container img{filter:hue-rotate(180deg) brightness(120%) invert(100%)}",""]),r.locals={},t.exports=r},378:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(38),n(147)),o={name:"MapPage",transition:{name:"page",mode:"out-in"},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(l.createClient)(),t.next=3,e.getEntries({content_type:"place"});case 3:return n=t.sent,t.abrupt("return",{places:n.items});case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Map"}}},c=(n(366),n(368),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex flex-row justify-between"},[r("FancyLine",{staticClass:"w-8 border-b-0 bg-repeat-y h-full",staticStyle:{"background-size":"70% auto"},style:{backgroundImage:"url("+n(359)+")"}}),t._v(" "),r("client-only",[r("l-map",{attrs:{zoom:14,center:[49.1996122,16.59]}},[r("l-tile-layer",{attrs:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.places,(function(p){return r("l-marker",{key:p.sys.id,attrs:{"lat-lng":[p.fields.position.lat,p.fields.position.lon]}},[r("l-popup",[t._v(t._s(p.fields.title))])],1)}))],2)],1),t._v(" "),r("FancyLine",{staticClass:"w-8 border-b-0 bg-repeat-y h-full transition-opacity",staticStyle:{"background-size":"70% auto"},style:{backgroundImage:"url("+n(359)+")"}})],1)}),[],!1,null,"1f8e0564",null);e.default=component.exports;installComponents(component,{FancyLine:n(220).default})}}]);