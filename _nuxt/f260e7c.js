(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{439:function(t,e,r){var content=r(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("07cbb7d8",content,!0,{sourceMap:!1})},451:function(t,e,r){t.exports=r.p+"img/question-mark.de99217.svg"},457:function(t,e,r){"use strict";r(439)},458:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".nuxt-link-active[data-v-57515ca8]{--tw-text-opacity:1;color:rgb(46 49 146 / var(--tw-text-opacity))}.dark .nuxt-link-active[data-v-57515ca8]{--tw-text-opacity:1;color:rgb(249 0 147 / var(--tw-text-opacity))}p[data-v-57515ca8]:empty{display:none}",""]),n.locals={},t.exports=n},466:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(31),r(44),r(51),r(45),r(70),r(71),r(152)),o=r(433),l=r.n(o),d=r(452),f=r.n(d),m=r(432),y={name:"FAQPage",components:{RichTextRenderer:r.n(m).a},head:function(){return{title:"FAQ"}},data:function(){var t;return{nodeRenderers:{"embedded-asset-block":function(e,r,n,c){return e.data&&e.data.target&&e.data.target.fields&&(t=e.data.target.fields.file)?n("img",{attrs:{src:t.url,width:t.details.image.width,height:t.details.image.height,class:""}}):""}}}},computed:{active:{get:function(){return this.$route.hash.slice(1)},set:function(t){this.$router.push({hash:t===this.active?"":t})}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,d,m,y,x,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.redirect,n=t.route,o=t.error,d=n.params.category){e.next=4;break}return e.abrupt("return",r({name:"faq-category",params:{category:"general"}}));case 4:return m=Object(c.createClient)(),e.next=7,m.getEntries({content_type:"faq"});case 7:if(y=e.sent,x=l.a.sortBy(Object.keys(l.a.groupBy(y.items,l.a.property("fields.category"))).map((function(t){return{title:t,slug:f()(t)}})),l.a.property("title")),v={},x.map((function(t){return v[t.slug]=t.title,t.slug})).includes(d)){e.next=13;break}return e.abrupt("return",o({statusCode:404,message:"Unknown FAQ category."}));case 13:return e.t0=x,e.next=16,m.getEntries({content_type:"faq","fields.category":v[d]});case 16:return e.t1=e.sent.items,e.abrupt("return",{categories:e.t0,questions:e.t1});case 18:case"end":return e.stop()}}),e)})))()}},x=(r(457),r(13)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("ul",{staticClass:"\n      font-medium text-gray-800 dark:text-gray-100 text-lg\n      flex flex-wrap flex-row justify-around md:justify-center items-center\n  "},t._l(t.categories,(function(g){return n("li",{staticClass:"inline-block w-1/2 md:w-auto text-center"},[n("nuxt-link",{staticClass:"\n          inline-block p-1 md:p-4 hover:text-primary dark:hover:text-secondary\n         ",attrs:{to:{name:"faq-category",params:{category:g.slug}}}},[t._v(t._s(g.title)+"\n      ")])],1)})),0),t._v(" "),n("div",{staticClass:"max-w-2xl mx-auto py-4 md:py-4"},t._l(t.questions,(function(q){return n("div",{staticClass:"group"},[n("a",{staticClass:"\n          text-lg p-4 block\n          hover:bg-gray-100 dark:hover:bg-gray-800\n          flex flex-row items-center justify-between\n        ",class:{"text-primary dark:text-secondary":t.active===q.sys.id},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.active=q.sys.id}}},[n("div",{staticClass:"w-5/6 text-sm sm:text-base"},[q.fields.question?n("RichTextRenderer",{attrs:{document:q.fields.question}}):t._e()],1),t._v(" "),n("img",{staticClass:"h-6 w-6 black-to-primary dark:black-to-white",attrs:{src:r(451),"aria-hidden":"true",alt:"Question"}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.active===q.sys.id,expression:"active === q.sys.id"}],staticClass:"p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert mx-auto prose-img:my-2"},[q.fields.answer?n("RichTextRenderer",{attrs:{document:q.fields.answer,"node-renderers":t.nodeRenderers}}):t._e()],1)])})),0)])}),[],!1,null,"57515ca8",null);e.default=component.exports}}]);