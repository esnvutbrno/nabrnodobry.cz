(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{428:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var r=n(429),l=r.DateTime,o=r.Duration;r.Settings;l.defaultZone="Europe/Prague"},431:function(e,t,n){e.exports=n.p+"img/place.caa78d7.svg"},434:function(e,t,n){e.exports=n.p+"img/time.9a9b253.svg"},469:function(e,t,n){"use strict";n.r(t);var r=n(6),l=(n(33),n(41),n(12),n(54),n(30),n(85),n(432)),o=n.n(l),c=n(153),f=n(430),d=n.n(f),m=n(428),w={name:"ScheduleDayPage",components:{RichTextRenderer:o.a},data:function(){return{dayName:null}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.env,n=e.params,r=Object(c.createClient)(),t.next=4,r.getEntries({content_type:"event",order:"fields.when"});case 4:return l=t.sent,o=d.a.startCase(d.a.toLower(n.day)),f=d.a.filter(d.a.filter(l.items,"fields.when").map((function(e){var t=m.a.fromISO(e.fields.when);return e.fields.day=t.startOf("day").toFormat("D"),e.fields.dayName=t.startOf("day").toFormat("cccc"),e.fields.fromTime=t.toFormat("t").replace(":00",""),e.fields.toTime=e.fields.length?t.plus(m.b.fromObject({minutes:e.fields.length})).toFormat("t").replace(":00",""):"",e})),(function(e){return e.fields.dayName===o})),t.abrupt("return",{events:f,dayName:o});case 8:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.dayName}}},x=n(11),component=Object(x.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("div",{staticClass:"flex flex-row items-center"},[r("h2",{staticClass:"\n        uppercase font-bold text-3xl\n        py-4 inline-block\n      "},[e._v(e._s(e.events[0].fields.dayName))]),e._v(" "),r("span",{staticClass:"flex-grow bg-secondary mx-4 h-1 rounded-full"})]),e._v(" "),r("ul",{staticClass:"\n      list-disc list-outside my-4 md:my-8 mx-auto w-full max-w-lg\n      divide-y sm:divide-y-0\n      flex flex-col gap-y-1 sm:gap-y-0\n    "},e._l(e.events,(function(t){return r("li",{staticClass:"flex flex-col sm:flex-row group cursor-pointer",on:{click:function(n){return e.$router.push({name:"event-id",params:{id:t.sys.id}})}}},[r("span",{staticClass:"lg:text-lg flex-grow sm:flex-grow-0"},[e._v(e._s(t.fields.title))]),e._v(" "),r("span",{staticClass:"\n          flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center\n          mx-4 hidden sm:block\n        "}),e._v(" "),t.fields.place&&t.fields.place.fields.title?r("span",{staticClass:"self-end flex flex-row gap-1 items-center mr-0 sm:mr-2"},[r("img",{staticClass:"w-4 w-4 stroke-primary",attrs:{src:n(431),alt:"Place"}}),e._v("\n          "+e._s(t.fields.place.fields.title)+"\n        ")]):e._e(),e._v(" "),r("time",{staticClass:"self-end flex flex-row gap-1 items-center min-w-auto sm:min-w-[8rem]"},[r("img",{staticClass:"w-3 w-3 stroke-primary",attrs:{src:n(434),alt:"Time"}}),e._v("\n        "+e._s(t.fields.fromTime)+"\n        "),t.fields.toTime?[e._v("– "+e._s(t.fields.toTime))]:e._e()],2)])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);