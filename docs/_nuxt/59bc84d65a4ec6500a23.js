(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{362:function(t,n,e){"use strict";var strong=e(387),r=e(363);t.exports=e(388)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=strong.getEntry(r(this,"Map"),t);return n&&n.v},set:function(t,n){return strong.def(r(this,"Map"),0===t?0:t,n)}},strong,!0)},363:function(t,n,e){var r=e(30);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},385:function(t,n,e){var content=e(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("63c9496b",content,!0,{sourceMap:!1})},386:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,".v-snack{align-items:center;color:#fff;display:flex;font-size:14px;left:8px;pointer-events:none;position:fixed;right:8px;text-align:left;transition-duration:.15s;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1000}.v-snack--absolute{position:absolute}.v-snack--top{top:8px}.v-snack--bottom{bottom:8px}.v-snack__wrapper{align-items:center;background-color:#323232;border-radius:4px;display:flex;margin:0 auto;pointer-events:auto;transition:inherit;transition-property:opacity,transform;min-width:100%;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-snack__content{align-items:center;display:flex;min-height:48px;justify-content:space-between;overflow:hidden;padding:8px 16px;width:100%}.v-snack__content .v-btn.v-btn{color:#fff;flex:0 0 auto;height:auto;margin:0 -8px 0 24px;min-width:auto;padding:8px;width:auto}.v-snack__content .v-btn.v-btn__content{margin:-2px}.v-application--is-rtl .v-snack__content .v-btn.v-btn{margin:0 24px 0 -8px}.v-snack__content .v-btn.v-btn:before{display:none}.v-snack--multi-line .v-snack__content{height:auto;min-height:68px}.v-snack--vertical .v-snack__content{align-items:stretch;flex-direction:column;height:auto;padding:16px 16px 8px}.v-snack--vertical .v-snack__content .v-btn.v-btn{align-self:flex-end;justify-self:flex-end;margin-left:0;margin-top:18px}.v-snack--vertical .v-snack__content .v-btn__content{flex:0 0 auto;margin:0}@media only screen and (min-width:600px){.v-snack__wrapper{min-width:344px;max-width:672px}.v-snack--left .v-snack__wrapper{margin-left:0}.v-snack--right .v-snack__wrapper{margin-right:0}.v-snack__content .v-btn:first-of-type{margin-left:42px}.v-application--is-rtl .v-snack__content .v-btn:first-of-type{margin-left:0;margin-right:42px}}.v-snack-transition-enter .v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter .v-snack__wrapper,.v-snack-transition-leave-to .v-snack__wrapper{opacity:0}",""])},387:function(t,n,e){"use strict";var r=e(34).f,o=e(122),c=e(196),l=e(56),v=e(194),f=e(195),d=e(154),h=e(198),_=e(155),k=e(27),m=e(153).fastKey,y=e(363),x=k?"_s":"size",w=function(t,n){var e,r=m(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,d){var h=t((function(t,r){v(t,h,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[x]=0,null!=r&&f(r,e,t[d],t)}));return c(h.prototype,{clear:function(){for(var t=y(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[x]=0},delete:function(t){var e=y(this,n),r=w(e,t);if(r){var o=r.n,c=r.p;delete e._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),e._f==r&&(e._f=o),e._l==r&&(e._l=c),e[x]--}return!!r},forEach:function(t){y(this,n);for(var e,r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!w(y(this,n),t)}}),k&&r(h.prototype,"size",{get:function(){return y(this,n)[x]}}),h},def:function(t,n,e){var r,o,c=w(t,n);return c?c.v=e:(t._l=c={i:o=m(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[x]++,"F"!==o&&(t._i[o]=c)),t},getEntry:w,setStrong:function(t,n,e){d(t,n,(function(t,e){this._t=y(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?h(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,h(1))}),e?"entries":"values",!e,!0),_(n)}}},388:function(t,n,e){"use strict";var r=e(20),o=e(16),c=e(39),l=e(196),meta=e(153),v=e(195),f=e(194),d=e(30),h=e(31),_=e(156),k=e(95),m=e(157);t.exports=function(t,n,e,y,x,w){var O=r[t],j=O,E=x?"set":"add",P=j&&j.prototype,F={},$=function(t){var n=P[t];c(P,t,"delete"==t?function(a){return!(w&&!d(a))&&n.call(this,0===a?0:a)}:"has"==t?function(a){return!(w&&!d(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!d(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof j&&(w||P.forEach&&!h((function(){(new j).entries().next()})))){var T=new j,C=T[E](w?{}:-0,1)!=T,S=h((function(){T.has(1)})),V=_((function(t){new j(t)})),B=!w&&h((function(){for(var t=new j,n=5;n--;)t[E](n,n);return!t.has(-0)}));V||((j=n((function(n,e){f(n,j,t);var r=m(new O,n,j);return null!=e&&v(e,x,r[E],r),r}))).prototype=P,P.constructor=j),(S||B)&&($("delete"),$("has"),x&&$("get")),(B||C)&&$(E),w&&P.clear&&delete P.clear}else j=y.getConstructor(n,t,x,E),l(j.prototype,e),meta.NEED=!0;return k(j,t),F[t]=j,o(o.G+o.W+o.F*(j!=O),F),w||y.setStrong(j,t,x),j}},454:function(t,n,e){"use strict";e(14),e(385);var r=e(17),o=e(28),c=e(69),l=e(5),v=e(8);n.a=Object(l.a)(r.a,o.a,Object(c.b)(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(v.d)("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},457:function(t,n,e){"use strict";e(391);var r=e(392);n.a=Object(r.a)("layout")},621:function(t,n,e){"use strict";e.r(n);e(11),e(9),e(4),e(3),e(7);var r=e(2),o=e(53);e(52);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var l={name:"FileExport",data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.e)({notes:function(t){return t.note.notes},boards:function(t){return t.board.boards}})),methods:{onDownloadFile:function(){var t=function(t,n){var e={version:1,notes:{},boards:{}},r=!0,o=!1,c=void 0;try{for(var l,v=t[Symbol.iterator]();!(r=(l=v.next()).done);r=!0){var f=l.value;e.notes[f.id]=f}}catch(t){o=!0,c=t}finally{try{r||null==v.return||v.return()}finally{if(o)throw c}}var d=!0,h=!1,_=void 0;try{for(var k,m=n[Symbol.iterator]();!(d=(k=m.next()).done);d=!0){var y=k.value;e.boards[y.id]=y}}catch(t){h=!0,_=t}finally{try{d||null==m.return||m.return()}finally{if(h)throw _}}return e}(this.notes,this.boards),n=new Blob([JSON.stringify(t,null,2)],{type:"text/json;charset=UTF-8"}),link=this.$refs.downloadLink;link.href=window.URL.createObjectURL(n),link.download="dev_notes_backup.json",link.click()}}},v=e(44),f=e(64),d=e.n(f),h=e(193),_=e(139),component=Object(v.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:this.onDownloadFile}},[n("v-icon",[this._v("cloud_download")]),this._v("\n    "+this._s(this.$t("backup.export.file"))+"\n  ")],1),this._v(" "),n("a",{ref:"downloadLink",attrs:{hidden:""}})],1)}),[],!1,null,"46c90910",null),k=component.exports;d()(component,{VBtn:h.a,VIcon:_.a});function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var y={name:"FileImport",data:function(){return{uploadError:null,snackbar:{error:!1,success:!1}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.d)({clearNotes:"note/clearNotes",clearBoards:"board/clearBoards",addNote:"note/addNote",addBoard:"board/addBoard"}),{onUploadFile:function(){var t=this;this.uploadError=null;var n=new FileReader;n.readAsText(this.$refs.fileInput.files[0],"UTF-8"),n.addEventListener("load",(function(n){var e=function(t){var n={};try{n=JSON.parse(t)}catch(t){return new Error(t)}if(1!==n.version)return new Error("Invalid version");var e=[],r=[];if(n.notes)for(var o=0,c=Object.keys(n.notes);o<c.length;o++){var l=c[o];e.push(n.notes[l])}if(n.boards)for(var v=0,f=Object.keys(n.boards);v<f.length;v++){var d=f[v];r.push(n.boards[d])}return{notes:e,boards:r}}(n.target.result);if(e instanceof Error)return t.uploadError=e,void(t.snackbar.error=!0);t.clearNotes(),t.clearBoards();var r=!0,o=!1,c=void 0;try{for(var l,v=e.notes[Symbol.iterator]();!(r=(l=v.next()).done);r=!0){var f=l.value;t.addNote(f)}}catch(t){o=!0,c=t}finally{try{r||null==v.return||v.return()}finally{if(o)throw c}}var d=!0,h=!1,_=void 0;try{for(var k,m=e.boards[Symbol.iterator]();!(d=(k=m.next()).done);d=!0){var y=k.value;t.addBoard(y)}}catch(t){h=!0,_=t}finally{try{d||null==m.return||m.return()}finally{if(h)throw _}}t.snackbar.success=!0}))}})},x=e(454),w=Object(v.a)(y,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(n){return t.$refs.fileInput.click()}}},[e("v-icon",[t._v("cloud_upload")]),t._v("\n    "+t._s(t.$t("backup.import.file"))+"\n\n    "),e("input",{ref:"fileInput",attrs:{hidden:"",type:"file"},on:{change:t.onUploadFile}})],1),t._v(" "),e("v-snackbar",{staticClass:"text-center",attrs:{color:"error",timeout:5e3},model:{value:t.snackbar.error,callback:function(n){t.$set(t.snackbar,"error",n)},expression:"snackbar.error"}},[t._v("\n    "+t._s(t.$t("backup.import.failed",{err:t.uploadError}))+"\n    "),e("v-btn",{attrs:{text:""},on:{click:function(n){t.snackbar.error=!1}}},[e("v-icon",[t._v("close")])],1)],1),t._v(" "),e("v-snackbar",{staticClass:"text-center",attrs:{color:"success",timeout:5e3},model:{value:t.snackbar.success,callback:function(n){t.$set(t.snackbar,"success",n)},expression:"snackbar.success"}},[t._v("\n    "+t._s(t.$t("backup.import.success"))+"\n    "),e("v-btn",{attrs:{text:""},on:{click:function(n){t.snackbar.success=!1}}},[e("v-icon",[t._v("close")])],1)],1)],1)}),[],!1,null,"f750cf90",null),O=w.exports;d()(w,{VBtn:h.a,VIcon:_.a,VSnackbar:x.a});var j={components:{FileImport:O,FileExport:k}},E=e(138),P=e(51),F=e(614),$=e(615),T=e(457),C=e(616),S=e(32),V=e(92),B=Object(v.a)(j,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{column:"","justify-center":""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",flat:""}},[n("v-toolbar-title",[this._v(this._s(this.$t("backup.title")))]),this._v(" "),n("div",{staticClass:"flex-grow-1"})],1),this._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{md12:"",lg6:""}},[n("FileExport")],1),this._v(" "),n("v-col",{attrs:{md12:"",lg6:""}},[n("FileImport")],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"970e19aa",null);n.default=B.exports;d()(B,{VCard:E.a,VCardActions:P.a,VCol:F.a,VContainer:$.a,VLayout:T.a,VRow:C.a,VToolbar:S.a,VToolbarTitle:V.b})}}]);