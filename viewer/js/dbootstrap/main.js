require({cache:{"dbootstrap/icon_support":function(){define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-class"],function(b,h,k,m,n){function c(a){var p=["IMG","INPUT"],e="dijitIcon dijitTabStripIcon dijitMenuExpand dijitCalendarIncrementControl dijitArrowButtonInner dijitTreeExpando dijitArrowNode".split(" "),q=["class","data-dojo-attach-point"],f=a;h.isArray(f)||(f=a.all||a.getElementsByTagName("*"));for(var d=h.isArray(a)?0:-1;0>d||f[d];d++){var g=-1==
d?a:f[d];if(-1!==k.indexOf(p,g.tagName))for(var b=0,c=e.length;b<c;b++)if(n.contains(g,e[b])){var l={};k.forEach(q,function(a){var b=g.getAttribute(a);b&&(l[a]=b)});m.create("span",l,g,"replace");break}}}function r(a){var b=a.prototype._attachTemplateNodes;a.prototype._attachTemplateNodes=function(a){c(a);return b.apply(this,arguments)}}return{load:function(a,c,e){a=["dijit/_TemplatedMixin"];9<=b.version.minor&&a.push("dijit/_AttachMixin");c(a,function(a,b){r(b||a);e(a)})}}})}}});
define("dbootstrap/main",["./icon_support!"],function(b){return{TemplatedMixin:b}});