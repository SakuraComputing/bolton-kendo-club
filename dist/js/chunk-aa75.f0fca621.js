(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa75"],{4431:function(e,t,n){},ccf3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kendo-video"},[n("h1",[e._v("Kendo Video")]),e._l(e.videos,function(e){return n("youtube",{key:e.etag,attrs:{"video-id":e.videoId}})})],2)},o=[],c=n("bc3a"),a=n.n(c),d={data:function(){return{videos:[]}},created:function(){this.fetchVideos()},methods:{fetchVideos:function(){var e=this;a.a.get("/api/club").then(function(t){e.videos=t.data[0].videos})}}},s=d,u=(n("e245"),n("2877")),r=Object(u["a"])(s,i,o,!1,null,null,null);r.options.__file="KendoVideo.vue";t["default"]=r.exports},e245:function(e,t,n){"use strict";var i=n("4431"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-aa75.f0fca621.js.map