(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{376:function(e,t,n){"use strict";n.r(t);var r=n(8),c=(n(38),n(362)),o=n.n(c),d=n(147),l={name:"EventDetailPage",components:{RichTextRenderer:o.a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=Object(d.createClient)(),t.next=4,r.getEntry(n.id);case 4:return c=t.sent,t.abrupt("return",{event:c});case 6:case"end":return t.stop()}}),t)})))()},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"schedule"})}}},f=n(12),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"bg-primary text-white uppercase\n    p-2 my-2 text-center rounded block w-full font-bold",on:{click:e.goBack}},[e._v("\n    < back to schedule\n  ")]),e._v(" "),n("h1",{staticClass:"text-4xl py-2 mb-2 border-b-4 border-secondary text-primary"},[e._v("\n    "+e._s(e.event.fields.title)+"\n  ")]),e._v(" "),e.event.fields.description?n("p",{staticClass:"prose"},[n("RichTextRenderer",{attrs:{document:e.event.fields.description,nodeRenderers:{"embedded-asset-block":function(e,t,n,r){return e+" "+t}}}})],1):e._e()])}),[],!1,null,"74df8a09",null);t.default=component.exports}}]);