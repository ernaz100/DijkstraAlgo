(this.webpackJsonpcomputervision=this.webpackJsonpcomputervision||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(7),o=n.n(s),c=n(5),r=n(2),u=n(4);n(14);var d=function(t){var e=t.isStart?"node start":t.isFinish?"node end":t.isAnimated?"node visited":t.isPath?"node path":t.isWall?"node wall":"node";return a.a.createElement("div",{id:t.id,className:e,onMouseDown:function(){return t.onMouseDown(t.row,t.col)},onMouseUp:function(){return t.onMouseUp()},onMouseEnter:function(){return t.onMouseEnter(t.row,t.col)}})};n(15);var l=function(){var t=a.a.useState([]),e=Object(u.a)(t,2),n=e[0],i=e[1],s=[],o=a.a.useState(!1),l=Object(u.a)(o,2),f=l[0],m=l[1];function h(t,e){var n=g(t,e);i(n),m(!0)}function p(){m(!1)}function v(t,e){if(f){var n=g(t,e);i(n)}}function E(t){var e={distance:1/0,row:10,col:5};return t.forEach((function(t,n){t.forEach((function(t,i){t.distance<e.distance&&!t.isVisited&&!t.isWall&&(e.distance=t.distance,e.row=n,e.col=i)}))})),t[e.row][e.col]}function b(t){t.isVisited=!0,s.push(t)}function w(t){!function(t){if(0===t.row)return;var e=n[t.row-1][t.col];if(t.distance+1>e.distance)return;e.distance=t.distance+1,e.path=Object(r.a)(t.path),e.path.push(t)}(t),function(t){if(19===t.col)return;var e=n[t.row][t.col+1];if(t.distance+1>e.distance)return;e.distance=t.distance+1,e.path=Object(r.a)(t.path),e.path.push(t)}(t),function(t){if(19===t.row)return;var e=n[t.row+1][t.col];if(t.distance+1>e.distance)return;e.distance=t.distance+1,e.path=Object(r.a)(t.path),e.path.push(t)}(t),function(t){if(0===t.col)return;var e=n[t.row][t.col-1];if(t.distance+1>e.distance)return;e.distance=t.distance+1,e.path=Object(r.a)(t.path),e.path.push(t)}(t)}return a.a.useEffect((function(){for(var t=[],e=0;e<20;e++){for(var n=[],a=0;a<20;a++){var s={col:a,row:e,id:a+20*e,isStart:10===e&&5===a,isFinish:7===e&&12===a,isAnimated:!1,isVisited:!1,isPath:!1,isWall:!1,distance:10===e&&5===a?0:1/0,path:[]};n.push(s)}t.push(n)}i(t)}),[]),a.a.createElement("div",{className:"grid"},a.a.createElement("button",{type:"button",className:"btn btn-success start-button",onClick:function(){for(var t={isFinish:!1};!t.isFinish;){if((t=E(n)).isVisited){console.log("Can't find closest Note");break}b(t),w(t)}!function(t){for(var e=function(e){if(e===s.length)return setTimeout((function(){!function(t){for(var e=function(e){setTimeout((function(){var n=t.path[e];"node start"!==document.getElementById(n.id).className&&"node end"!==document.getElementById(n.id).className&&(document.getElementById(n.id).className="node path")}),75*e)},n=0;n<t.path.length;n++)e(n)}(t)}),100*e),{v:void 0};setTimeout((function(){var t=s[e];"node start"!==document.getElementById(t.id).className&&"node end"!==document.getElementById(t.id).className&&(document.getElementById(t.id).className="node visited")}),100*e)},n=0;n<=s.length;n++){var i=e(n);if("object"===typeof i)return i.v}}(t)}},"Start Dijkstra"),a.a.createElement("button",{type:"button",className:"btn btn-warning start-button",onClick:function(){for(var t=[],e=0;e<20;e++){for(var n=[],a=0;a<20;a++){var s={col:a,row:e,id:a+20*e,isStart:10===e&&5===a,isFinish:7===e&&12===a,isAnimated:!1,isVisited:!1,isPath:!1,distance:10===e&&5===a?0:1/0,path:[]};n.push(s),"node visited"!==document.getElementById(a+20*e).className&&"node path"!==document.getElementById(a+20*e).className||(document.getElementById(a+20*e).className="node")}t.push(n)}return void i(t)}},"Reset Grid"),n.map((function(t,e){return a.a.createElement("div",{key:e},t.map((function(t,e){return a.a.createElement(d,{key:t.id,id:t.id,row:t.row,col:t.col,isStart:t.isStart,isFinish:t.isFinish,isVisited:t.isVisited,isAnimated:t.isAnimated,isPath:t.isPath,distance:t.distance,isWall:t.isWall,onMouseDown:h,onMouseUp:p,onMouseEnter:v})})))})));function g(t,e){var i=n.slice(),a=n[t][e],s=Object(c.a)(Object(c.a)({},a),{},{isWall:!a.isWall});return i[t][e]=s,i}};n(16);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l,null))};o.a.render(a.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b42acf37.chunk.js.map