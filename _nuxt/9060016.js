(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{277:function(e,t,n){(function(t){var r=n(282),l={space:t.env.CTF_SPACE_ID,accessToken:t.env.CTF_CDA_ACCESS_TOKEN};e.exports={createClient:function(){return r.createClient(l)}}}).call(this,n(131))},292:function(e,t){},296:function(e,t,n){e.exports=n.p+"img/woman-icon.7cf1f02.png"},297:function(e,t,n){"use strict";n.r(t);var r={name:"ContentfulImage",props:["asset","default"],computed:{url:function(){return this.asset?"".concat(this.asset.fields.file.url,"?fm=jpg&fl=progressive&f=faces&fit=thumb&w=360&h=360"):this.default||""}}},l=n(17),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"bg-contain",style:{backgroundImage:"url("+e.url+")"}})}),[],!1,null,"29ac5de7",null);t.default=component.exports},347:function(e,t,n){"use strict";n.r(t);var r=n(9),l=(n(60),n(277)),c={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.env,n=Object(l.createClient)(),t.next=4,n.getEntries({content_type:"teamMember","fields.isHead":!0,order:"fields.order"});case 4:return r=t.sent,t.next=7,n.getEntries({content_type:"teamMember","fields.isHead":!1,order:"fields.order"});case 7:return c=t.sent,t.abrupt("return",{heads:r.items,members:c.items});case 9:case"end":return t.stop()}}),t)})))()}},o=n(17),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mx-auto max-w-4xl"},[r("ul",{staticClass:"flex flex-row flex-wrap"},e._l(e.heads,(function(head){return r("li",{staticClass:"py-4 px-8 font-bold flex flex-col items-center w-1/2 md:w-1/4"},[r("ContentfulImage",{staticClass:"w-full pb-[100%] rounded-full",attrs:{asset:head.fields.photo,default:n(296)}}),e._v(" "),r("h2",{staticClass:"text-xl text-primary text-center my-1"},[e._v(e._s(head.fields.name))]),e._v(" "),r("h3",{staticClass:"text-xs text-gray-600 text-center"},[e._v(e._s(head.fields.position))])],1)})),0),e._v(" "),r("div",{staticClass:"border-secondary border-b-4"}),e._v(" "),r("ul",{staticClass:"flex flex-row flex-wrap"},e._l(e.members,(function(t){return r("li",{staticClass:"p-4 font-bold flex flex-col items-center w-1/6"},[r("ContentfulImage",{staticClass:"w-full pb-[100%] rounded-full mx-4",attrs:{asset:t.fields.photo,default:n(296)}}),e._v(" "),r("h2",{staticClass:"text-primary text-center my-1"},[e._v(e._s(t.fields.name))]),e._v(" "),r("h3",{staticClass:"text-xs text-gray-600 text-center"},[e._v(e._s(t.fields.position))])],1)})),0)])}),[],!1,null,"344d88b0",null);t.default=component.exports;installComponents(component,{ContentfulImage:n(297).default})}}]);