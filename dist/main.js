!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=(r=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var r,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";e.a=t.p+"e4a8a36a97559a3219e54eec43b038f6.jpg"},function(n,e,t){var i=t(4),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);n.exports=o.locals||{}},function(n,e,t){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function c(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],o=0;o<n.length;o++){var a=n[o],s=e.base?a[0]+e.base:a[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(r[d].references++,r[d].updater(f)):r.push({identifier:u,updater:b(f,e),references:1}),i.push(u)}return i}function l(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function p(n,e,t){var i=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,g=0;function b(n,e){var t,i,o;if(e.singleton){var a=g++;t=m||(m=l(e)),i=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=l(e),i=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=c(t[i]);r[o].references--}for(var a=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}t=a}}}},function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),a=t(1),r=t.n(a),c=t(2),s=o()(!1),l=r()(c.a);s.push([n.i,"body {\n  background-image: url("+l+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  padding: 0;\n  margin: 0;\n}\n\n.nav-bar {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.nav-bar ul {\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  font-family: 'Dancing Script', cursive;\n}\n\n.nav-bar ul li {\n  width: 120px;\n  margin: 5px auto;\n  text-align: center;\n  list-style: none;\n  font-size: 30px;\n  padding: 5px;\n  font-weight: bold;\n}\n\n.nav-bar ul li a {\n  color: #d10426;\n  text-decoration: none;\n}\n\n.welcome-text {\n  width: 70%;\n  margin: 30px auto;\n}\n\nh2 {\n  position: relative;\n  padding: 0 0 10px;\n  margin-bottom: 10px;\n  font-family: 'Dancing Script', cursive;\n}\n\n.welcome-text h2 {\n  text-align: center;\n  margin-top: 30px;\n  font-size: 45px;\n}\n\n.welcome-text p {\n  width: 80%;\n  margin: 60px auto;\n  line-height: 20px;\n  font-size: 25px;\n  font-family: 'Raleway', sans-serif;\n}\n\n.food-menu {\n  margin: 0 auto 80px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 50px;\n  box-sizing: border-box;\n  padding-bottom: 40px;\n}\n\n.food-item {\n  box-sizing: border-box;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.food-item figure {\n  width: 300px;\n  height: 250px;\n}\n\n.food-item figure img {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 4px 6px rgba(255, 255, 255, 0.5);\n}\n\n.food-item figcaption {\n  font-size: 19px;\n}\n\n.food-item figcaption span {\n  font-size: 22px;\n  color: #d10426;\n}\n\n.contact-box {\n  max-width: 750px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: transparent;\n  box-shadow: 0 0 19px 5px rgba(0, 0, 0, 0.19);\n  margin: 0 auto;\n}\n\n.form {\n  padding: 25px 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  height: 4px;\n  width: 50px;\n  border-radius: 2px;\n  background-color: #d10426;\n}\n\n.field {\n  width: 100%;\n  border: 2px solid rgba(0, 0, 0, 0);\n  outline: none;\n  background-color: rgba(230, 230, 230, 0.6);\n  padding: 0.5rem 1rem;\n  font-size: 1.1rem;\n  margin-bottom: 22px;\n  transition: 0.3s;\n}\n\ntextarea {\n  min-height: 150px;\n}\n\n.btn {\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background-color: #d10426;\n  color: #fff;\n  font-size: 1.1rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.btn:hover {\n  background-color: #a70b25;\n}\n\n.field:focus {\n  border: 2px solid rgba(30, 85, 250, 0.47);\n  background-color: #fff;\n}\n",""]),e.default=s},function(n,e,t){"use strict";t.r(e);t(3);var i=function(){const n=document.createElement("div");return n.innerHTML='\n  <div id="welcome" class="welcome-text">\n    <h2>Your Satisfaction Our Priority</h2>\n    <p class="wlc-par">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis labore animi dolores similique suscipit quae ullam quidem autem quo, deserunt alias doloremque. Aperiam optio temporibus minus odio assumenda, aut, sit ad provident consequatur nulla esse amet repellat, velit pariatur enim repellendus mollitia deleniti aliquam ex totam? Deleniti quisquam voluptates quo, odio nam omnis? Consequatur possimus illo fugit eius at ipsum vero atque debitis? Reprehenderit dolorum consequuntur atque. Sit, dolor, doloribus, rem maiores qui labore delectus perspiciatis minima vero aut ea libero aliquam repudiandae quis nostrum ipsa. Soluta non aliquam voluptates.\n    </p>\n  </div>\n  ',n};const o=`\n  <div class="food-menu">\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"c3ffe8ac8fb28268e947273ac63b8af2.jpg"} alt="food">\n        <figcaption>Delicious Toast breakfast at only <span>$3</span></figcaption>\n      </figure>\n    </div>\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"70998939056e1ad95eca25c75045e648.jpg"} alt="food">\n        <figcaption>Delicious Pancake breakfast at only <span>$5</span></figcaption>\n      </figure>\n    </div>\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"5e9276f2898693208227f5fd79eac5df.jpg"} alt="food">\n        <figcaption>Delicious Double Burger at only <span>$6</span></figcaption>\n      </figure>\n    </div>\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"abcb277304d139534f01b87c3af947d1.jpg"} alt="">\n        <figcaption>Salad Delight at only <span>$7</span></figcaption>\n      </figure>\n    </div>\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"afbc93fa52d5c055e4a2a608c406d47d.jpg"} alt="">\n        <figcaption>Tasty Steaks at only <span>$8.99</span></figcaption>\n      </figure>\n    </div>\n    <div class="food-item">\n      <figure>\n        <img src=${t.p+"d74bc81764e7121f96c53fe28dc38646.jpg"} alt="">\n        <figcaption>Steak Surprise at only <span>$10</span></figcaption>\n      </figure>\n    </div>\n  </div>\n  `;var a=function(){const n=document.createElement("div");return n.innerHTML=o,n};var r=function(){const n=document.createElement("div");return n.innerHTML='\n  <div class="contact-box">\n    <div class="form">\n      <h2>Contact Us</h2>\n      <input type="text" class="field" placeholder="Your Name">\n      <input type="text" class="field" placeholder="Your Email">\n      <input type="text" class="field" placeholder="Phone">\n      <textarea placeholder="Message" class="field"></textarea>\n      <button class="btn">Send</button>\n    </div>\n  </div>\n  ',n};var c=()=>'\n  <nav class="nav-bar">\n    <ul>\n      <li id="tab1" class="tab"><a href="#">Home</a></li>\n      <li id="tab2" class="tab"><a href="#">Menu</a></li>\n      <li id="tab3" class="tab"><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  ';const s=document.getElementById("content");window.onload=()=>{s.innerHTML=c(),s.appendChild(i());[...document.getElementsByClassName("tab")].forEach(n=>n.addEventListener("click",()=>function(n){const e=s.children[1];"tab2"===n.id&&(s.removeChild(e),s.appendChild(a())),"tab3"===n.id&&(s.removeChild(e),s.appendChild(r())),"tab1"===n.id&&(s.removeChild(e),s.appendChild(i()))}(n)))}}]);