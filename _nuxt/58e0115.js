(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(e,t,n){e.exports=n.p+"img/place.caa78d7.svg"},361:function(e,t,n){e.exports=n.p+"img/time.9a9b253.svg"},380:function(e,t,n){"use strict";n.r(t);var l=n(8),r=(n(38),n(49),n(39),n(10),n(30),n(84),n(362)),o=n.n(r),c=n(147),f=n(363),d=n.n(f),m=n(359),x=m.DateTime,w=m.Duration;m.Settings.defaultLocale="en-US",x.defaultZone="en-US";var v={name:"SchedulePage",components:{RichTextRenderer:o.a},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.env,n=Object(c.createClient)(),t.next=4,n.getEntries({content_type:"event",order:"fields.when"});case 4:return l=t.sent,r=d.a.sortBy(d.a.toPairs(d.a.groupBy(d.a.filter(l.items,"fields.when").map((function(e){var t=x.fromISO(e.fields.when);return e.fields.day=t.startOf("day").toFormat("D"),e.fields.dayName=t.startOf("day").toFormat("cccc"),e.fields.fromTime=t.toFormat("t").replace(":00",""),e.fields.toTime=e.fields.length?t.plus(w.fromObject({minutes:e.fields.length})).toFormat("t").replace(":00",""):"",e})),"fields.day")),"0"),t.abrupt("return",{events:l.items,items:l.items,days:r});case 7:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Schedule"}}},y=n(12),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("article",e._l(e.days,(function(data,i){return l("section",[l("div",{staticClass:"flex flex-row items-center",class:{"flex-row-reverse":i%2}},[l("h2",{staticClass:"\n          uppercase font-bold text-3xl\n          py-4 inline-block\n        "},[e._v(e._s(data[1][0].fields.dayName))]),e._v(" "),l("span",{staticClass:"flex-grow bg-secondary mx-4 h-1 rounded-full"})]),e._v(" "),l("ul",{staticClass:"\n        list-disc list-outside my-4 md:my-8 mx-auto w-full max-w-lg\n        divide-y sm:divide-y-0\n        flex flex-col gap-y-1\n      "},e._l(data[1],(function(t){return l("li",{staticClass:"flex flex-col sm:flex-row group cursor-pointer",on:{click:function(n){return e.$router.push({name:"event-id",params:{id:t.sys.id}})}}},[l("span",{staticClass:"lg:text-lg flex-grow sm:flex-grow-0 text-primary font-bold dark:text-white"},[e._v("\n            "+e._s(t.fields.title)+"\n          ")]),e._v(" "),l("span",{staticClass:"\n            flex-grow group-odd:bg-gray-100 h-0.5 rounded-full self-center\n            mx-4 hidden sm:block\n          "}),e._v(" "),t.fields.place&&t.fields.place.fields.title?l("span",{staticClass:"self-end flex flex-row gap-1 items-center mr-0 sm:mr-2"},[l("img",{staticClass:"w-4 w-4 dark:black-to-white",attrs:{src:n(360),alt:"Place"}}),e._v("\n            "+e._s(t.fields.place.fields.title)+"\n          ")]):e._e(),e._v(" "),l("time",{staticClass:"self-end flex flex-row gap-1 items-center min-w-auto sm:min-w-[10rem]"},[l("img",{staticClass:"w-3 w-3 dark:black-to-white",attrs:{src:n(361),alt:"Time"}}),e._v("\n            "+e._s(t.fields.fromTime)+"\n            "),t.fields.toTime?l("span",{staticClass:"text-sm text-gray-500"},[e._v("– "+e._s(t.fields.toTime))]):e._e()])])})),0)])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);