(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{363:function(e,t,n){e.exports=n.p+"img/woman-icon.7cf1f02.png"},364:function(e,t,n){"use strict";n.r(t);var r={name:"ContentfulImage",props:["asset","default"],computed:{url:function(){return this.asset?"".concat(this.asset.fields.file.url,"?fm=jpg&fl=progressive&f=faces&fit=thumb&w=360&h=360"):this.default||""}}},l=n(12),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"bg-contain",style:{backgroundImage:"url("+e.url+")"}})}),[],!1,null,"29ac5de7",null);t.default=component.exports},375:function(e,t,n){"use strict";n.r(t);var r=n(8),l=(n(38),n(147)),o={name:"TeamPage",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.env,n=Object(l.createClient)(),t.next=4,n.getEntries({content_type:"teamMember","fields.isHead":!0,order:"fields.order"});case 4:return r=t.sent,t.next=7,n.getEntries({content_type:"teamMember","fields.isHead":!1,order:"fields.order"});case 7:return o=t.sent,t.abrupt("return",{heads:r.items,members:o.items});case 9:case"end":return t.stop()}}),t)})))()}},c=n(12),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"flex flex-row flex-wrap justify-center"},e._l(e.heads,(function(head){return r("li",{staticClass:"\n          py-4 px-4 sm:px-8 flex flex-col items-center justify-between\n          font-bold w-1/2 sm:w-1/3 md:w-1/4\n    "},[r("ContentfulImage",{staticClass:"\n          w-full pb-[100%] rounded-full\n          transition-transform duration-300 ease-in-out hover:scale-110\n        ",attrs:{asset:head.fields.photo,default:n(363)}}),e._v(" "),r("h2",{staticClass:"sm:text-lg text-primary dark:text-white text-center my-1"},[e._v(e._s(head.fields.name))]),e._v(" "),r("h3",{staticClass:"text-xs text-gray-600 dark:text-gray-400 text-center"},[e._v(e._s(head.fields.position))])],1)})),0),e._v(" "),r("div",{staticClass:"border-secondary border-b-4 my-8"}),e._v(" "),r("ul",{staticClass:"flex flex-row flex-wrap justify-center"},e._l(e.members,(function(t){return r("li",{staticClass:"\n        p-4 font-bold flex flex-col items-center\n        w-1/3 sm:w-1/5 md:w-1/6\n    "},[r("ContentfulImage",{staticClass:"\n          w-full pb-[100%] rounded-full mx-4\n          transition-transform duration-300 ease-in-out hover:scale-110\n        ",attrs:{asset:t.fields.photo,default:n(363)}}),e._v(" "),r("h2",{staticClass:"text-primary dark:text-white text-center my-1"},[e._v(e._s(t.fields.name))]),e._v(" "),r("h3",{staticClass:"text-xs text-gray-600 dark:text-gray-400 text-center"},[e._v(e._s(t.fields.position))])],1)})),0)])}),[],!1,null,"dd2b8374",null);t.default=component.exports;installComponents(component,{ContentfulImage:n(364).default})}}]);