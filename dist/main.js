!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);var n=document.getElementById("canvas"),i=n.getContext("2d");(new Image).src="../dist/images/statue-of-liberty.png";var o=Math.floor(Math.random()*n.width)+20,h=n.height-200,l=!1,a=Math.floor(Math.random()*n.width)+15,f=n.height-200,u=!1,c=Math.floor(Math.random()*n.width)+25,d=n.height-200,g=!1,s=(n.width-75)/2,y=s-37.5,b=s+37.5,m=!1,p=!1;document.addEventListener("keydown",(function(t){"Right"==t.key||"ArrowRight"==t.key?m=!0:"Left"!=t.key&&"ArrowLeft"!=t.key||(p=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"==t.key||"ArrowRight"==t.key?m=!1:"Left"!=t.key&&"ArrowLeft"!=t.key||(p=!1)}),!1);var w=10;setInterval((function(){i.clearRect(0,0,n.width,n.height),i.beginPath(),i.rect(o,h,40,20),i.fillStyle="blue",i.fill(),i.closePath(),i.beginPath(),i.rect(a,f,30,10),i.fillStyle="red",i.fill(),i.closePath(),i.beginPath(),i.rect(c,d,50,15),i.fillStyle="green",i.fill(),i.closePath(),i.beginPath(),i.rect(y,n.height-10,75,10),i.fillStyle="black",i.fill(),i.closePath(),h>n.height&&(o=Math.floor(Math.random()*n.width)+20,h=n.height-200),h+20>=n.height-w&&o+20>=y&&o+20<=b?(o=s-20,l||(h=n.height-w-20,w+=20,l=!0)):h+=4,f>n.height&&(a=Math.floor(Math.random()*n.width)+15,f=n.height-200),f+10>=n.height-w&&a+15>=y&&a+15<=b?(a=s-15,u||(f=n.height-w-10,w+=10,u=!0)):f+=4,d>n.height&&(c=Math.floor(Math.random()*n.width)+25,d=n.height-200),d+15>=n.height-w&&c+25>=y&&c+25<=b?(c=s-25,g||(d=n.height-w-15,w+=15,g=!0)):d+=4,m?(s+=7,b>=n.width&&(s=n.width-37.5)):p&&(s-=7,y<=0&&(s=37.5)),y=s-37.5,b=s+37.5}),30),console.log("canvas is running")},function(t,e,r){}]);
//# sourceMappingURL=main.js.map