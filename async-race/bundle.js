(()=>{"use strict";var e,t,n,a,s,i={345:(e,t,n)=>{n.d(t,{h:()=>i});const a="http://localhost:3000",s={garage:`${a}/garage`,engine:`${a}/engine`,winners:`${a}/winners`},i=new class{constructor(){this.getCar=async e=>(await fetch(`${s.garage}/${e}`)).json(),this.getCars=async(e,t="7")=>{const n=await fetch(`${s.garage}?_page=${e}&_limit=${t}`);return{items:await n.json(),count:n.headers.get("X-Total-Count")||"0"}},this.createCar=async e=>(await fetch(s.garage,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),this.deleteCar=async e=>(await fetch(`${s.garage}/${e}`,{method:"DELETE"})).json(),this.updateCar=async(e,t)=>(await fetch(`${s.garage}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json(),this.getSortOrder=(e,t)=>e&&t?`&_sort=${e}&_order=${t}`:"",this.getWinner=async e=>(await fetch(`${s.winners}/${e}`)).json(),this.getWinners=async({page:e,limit:t="10",sort:n="",order:a=""})=>{const i=await fetch(`${s.winners}?_page=${e}&_limit=${t}${this.getSortOrder(n,a)}`),r=await i.json();return{items:await Promise.all(r.map((async e=>({...e,car:await this.getCar(e.id)})))),count:i.headers.get("X-Total-Count")||"0"}},this.getWinnerStatus=async e=>(await fetch(`${s.winners}/${e}`)).status,this.deleteWinner=async e=>(await fetch(`${s.winners}/${e}`,{method:"DELETE"})).json(),this.startEngine=async e=>(await fetch(`${s.engine}?id=${e}&status=started`)).json(),this.stopEngine=async e=>(await fetch(`${s.engine}?id=${e}&status=stopped`)).json(),this.drive=async e=>{const t=await fetch(`${s.engine}?id=${e}&status=drive`).catch();return 200!==t.status?{success:!1}:{...await t.json()}},this.createWinner=async e=>(await fetch(s.winners,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),this.updateWinner=async(e,t)=>(await fetch(`${s.winners}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json(),this.saveWinner=async({id:e,time:t})=>{if(404===await this.getWinnerStatus(e))await this.createWinner({id:e,wins:1,time:t});else{const n=await this.getWinner(e);await this.updateWinner(e,{id:e,wins:n.wins+1,time:t<n.time?t:n.time})}}}}},752:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{s:()=>d});var a=n(295),s=n(0),i=n(287),r=n(978),c=n(785),o=e([a,i,c]);[a,i,c]=o.then?await o:o;const d=()=>{const e=`\n  <div class="container">\n    <div class="garage-page" id="garage-view">\n      <div class="garage__create-update-cars">\n        <form class="garage__create-cars" id="create">\n          <input class="garage__create-name" id="create-name" name="name" type="text">\n          <input class="garage__create-color" id="create-color" name="color" type="color" value="#ffffff">\n          <button class="button garage__create" type="submit">Create Car</button>\n        </form>\n        <form class="garage__update-cars" id="update">\n          <input class="garage__update-name" id="update-name" name="name" type="text" disabled>\n          <input class="garage__update-color" id="update-color" name="color" type="color" value="#ffffff" disabled>\n          <button class="button garage__update" id="update-submit" type="submit" disabled>Update Car</button>\n        </form>\n      </div>\n      <div class="race-controls">\n        <button class="button race" id="race">Race</button>\n        <button class="button race-reset" id="reset">Reset</button>\n        <button class="button race-generator" id="generator">Generator cars</button>\n      </div>\n      <div class="garage" id="garage">\n        ${(0,c.O)()}\n      </div>\n      <div class="garage__message">\n        <p class="message" id="message"></p>\n      </div>\n    </div>\n    <div class="winners-page" id="winners-view" style="display: none">\n      ${(0,i.V)()}\n    </div>\n    <div class="pagination">\n    </div>\n  </div>\n  `,t=document.createElement("main");t.classList.add("main"),t.innerHTML=e,document.body.append(r.F.element),document.body.append(t),document.querySelector(".pagination")?.append(a.o.element),document.body.append(s.M.element)}}))},0:(e,t,n)=>{n.d(t,{M:()=>i});var a=n(786);class s extends a.Z{constructor(){super("footer",["footer"]),this.element.innerHTML='\n    <div class="container footer-container">\n      <a\n        class="footer__github"\n        href="https://github.com/NiFroPP"\n        target="_blank"\n        >Github</a\n      >\n      <a class="footer__rss" href="https://rs.school/js/" target="_blank">\n        <span class="footer__rss-year">\'21</span>\n      </a>\n    </div>\n  '}}const i=new s},652:(e,t,n)=>{n.d(t,{L:()=>a});const a=e=>`\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 88 512 256" width="64" height="32" xml:space="preserve">\n    <g>\n      <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"/>\n      <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"/>\n      <path fill="${e}" d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"/>\n    </g>\n  </svg>\n`},445:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(652);const s=new class{constructor(){this.renderCar=({id:e,name:t,color:n,isEngineStarted:s})=>{const i=e=>e?"disabled":"";return`\n    <div class="general-buttons">\n      <button class="button select-button" id="select-car-${e}">Select</button>\n      <button class="button remove-button" id="remove-car-${e}">Remove</button>\n        <span class="car-name">${t}</span>\n    </div>\n    <div class="road">\n      <div class="launch-pad">\n        <div class="control-panel">\n          <button class="button icon start-engine-button" id="start-engine-car-${e}" ${i(s)}>Start</button>\n          <button class="button icon stop-engine-button" id="stop-engine-car-${e}" ${i(!s)}>Stop</button>\n        </div>\n        <div class="car" id="car-${e}">\n          ${(0,a.L)(n)}\n        </div>\n      </div>\n      <div class="flag" id="flag-${e}">Finish</div>\n    </div>\n  `}}}},785:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{O:()=>r});var a=n(445),s=n(54),i=e([s]);s=(i.then?await i:i)[0];const r=()=>`\n  <h3 class="garage__title">Garage (You have ${s.Z.carsCount} cars)</h3>\n  <h3 class="garage__pages">Page #${s.Z.carsPage}</h3>\n  <ul class="garage">\n    ${s.Z.cars.map((e=>`\n    <li>${a.Z.renderCar(e)}</li>\n    `)).join("")}\n  </ul>\n`}))},683:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{P:()=>l,p:()=>g});var a=n(785),s=n(684),i=n(345),r=n(205),c=e([a,s]);[a,s]=c.then?await c:c;const o="#ffffff";let d={};const l=()=>{const e=document.getElementById("garage"),t=document.getElementById("update"),n=document.getElementById("update-name"),r=document.getElementById("update-color"),c=document.getElementById("update-submit");document.body.addEventListener("click",(async t=>{const o=t.target;if(o.classList.contains("select-button")){const e=+o.id.split("select-car-")[1];d=await i.h.getCar(e),n.value=d.name,n.disabled=!1,r.value=d.color,r.disabled=!1,c.disabled=!1}if(o.classList.contains("remove-button")){const t=+o.id.split("remove-car-")[1];await i.h.deleteCar(t),await i.h.deleteWinner(t),await s.x.updateStateGarage(),e.innerHTML=(0,a.O)()}})),t.addEventListener("submit",(async t=>{const l=t.target;t.preventDefault();const g=new FormData(l),u={name:g.get("name")?.toString()||"",color:g.get("color")?.toString()||o};d.id&&await i.h.updateCar(d.id,u),await s.x.updateStateGarage(),e.innerHTML=(0,a.O)(),n.value="",n.disabled=!0,r.value=o,r.disabled=!0,c.disabled=!0,d={}}))},g=()=>{const e=document.getElementById("garage"),t=document.getElementById("generator"),n=document.getElementById("create"),c=document.getElementById("create-name");n.addEventListener("submit",(async t=>{const n=t.target;t.preventDefault();const r=new FormData(n),d={name:r.get("name")?.toString()||"",color:r.get("color")?.toString()||o};await i.h.createCar(d),await s.x.updateStateGarage(),e.innerHTML=(0,a.O)(),c.value="",n.disabled=!0})),t.addEventListener("click",(async t=>{const n=t.target;n.disabled=!0;const c=(0,r.c)();await Promise.all(c.map((async e=>i.h.createCar(e)))),await s.x.updateStateGarage(),e.innerHTML=(0,a.O)(),n.disabled=!1}))}}))},978:(e,t,n)=>{n.d(t,{F:()=>l});var a=n(786),s=n(11);class i extends a.Z{constructor(){super("div",["menu__garage"]),this.element.innerHTML="Garage",this.element.setAttribute("id","menu-garage"),this.element.addEventListener("click",(()=>{s.C.setActive("garage")}))}}const r=new i;class c extends a.Z{constructor(){super("div",["menu__winners"]),this.element.innerHTML="Winners",this.element.setAttribute("id","menu-winners"),this.element.addEventListener("click",(()=>{s.C.setActive("winners")}))}}const o=new c;class d extends a.Z{constructor(){super("header",["header"]),this.element.innerHTML='\n      <div class="container header-container">\n        <h1 class="header__title">Async-race</h1>\n        <nav class="menu">\n        </nav>\n      </div>\n    ',this.element.querySelector(".menu")?.append(r.element),this.element.querySelector(".menu")?.append(o.element)}}const l=new d},295:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{o:()=>l});var a=n(786),s=n(54),i=n(684),r=n(785),c=n(287),o=e([c,i,s,r]);[c,i,s,r]=o.then?await o:o;class d extends a.Z{constructor(){super("div",["pagination-container","container"]),this.element.innerHTML='\n      <button class="button pagination__prev" id="prev" disabled>Prev</button>\n      <button class="button pagination__next" id="next" disabled>Next</button>\n    ',this.element.querySelector(".pagination__prev")?.addEventListener("click",(async()=>{switch(s.Z.view){case"garage":s.Z.carsPage--,await i.x.updateStateGarage(),document.getElementById("garage").innerHTML=(0,r.O)();break;case"winners":s.Z.winnersPage--,await i.x.updateStateWinners(),document.getElementById("winners-view").innerHTML=(0,c.V)();break;default:throw new TypeError("Unexpected")}})),this.element.querySelector(".pagination__next")?.addEventListener("click",(async()=>{switch(s.Z.view){case"garage":s.Z.carsPage++,await i.x.updateStateGarage(),document.getElementById("garage").innerHTML=(0,r.O)();break;case"winners":s.Z.winnersPage++,await i.x.updateStateWinners(),document.getElementById("winners-view").innerHTML=(0,c.V)();break;default:throw new TypeError("Unexpected")}}))}}const l=new d}))},786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},205:(e,t,n)=>{n.d(t,{c:()=>r});const a=["Mersedes","BMW","Audi","Volkswagen","Jaguar","Opel","Renault","Porshe","Jeep","Ford","Citroën","Peugeot"],s=["AMG-GT-R","Seven","A8","Passat","S-Type","Astra","Sandero","911-Carrera","Grand-Cherokee","Mondeo","C4","408"],i=()=>{const e="0123456789ABCDEF";let t="#";for(let n=0;n<6;n++)t+=e[Math.floor(Math.random()*e.length)];return t},r=(e=100)=>new Array(e).fill(1).map((()=>({name:`${a[Math.floor(Math.random()*a.length)]} ${s[Math.floor(Math.random()*s.length)]}`,color:i()})))},58:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{o:()=>o});var a=n(287),s=n(684),i=n(11),r=n(54),c=e([a,s,r]);[a,s,r]=c.then?await c:c;const o=()=>{i.C.events.subscribe((async()=>{const e=document.getElementById("garage-view"),t=document.getElementById("winners-view");"garage"===i.C.active?(e.style.display="block",t.style.display="none",r.Z.view="garage",await s.x.updateStateGarage()):(t.style.display="block",e.style.display="none",r.Z.view="winners",await s.x.updateStateWinners(),t.innerHTML=(0,a.V)())}))}}))},287:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{V:()=>c,k:()=>o});var a=n(684),s=n(652),i=n(54),r=e([a,i]);[a,i]=r.then?await r:r;const c=()=>`\n  <h3 class="winners__title">Winners (${i.Z.winnersCount})</h3>\n  <h4 class="winners__pages">Page #${i.Z.winnersPage}</h4>\n  <table class="winners-table">\n    <thead class="winners-table__head">\n      <tr>\n        <th class="winners-table__number">Number</th>\n        <th class="winners-table__cars">Car</th>\n        <th class="winners-table__names">Name</th>\n        <th class="winners-table__wins table-wins ${"wins"===i.Z.sortBy?i.Z.sortOrder:""}" id="sort-by-wins">Wins</th>\n        <th class="winners-table__times table-time ${"time"===i.Z.sortBy?i.Z.sortOrder:""}" id="sort-by-time">Best time (seconds)</th>\n      </tr>\n    </thead>\n    <tbody class="winners-table__winner">\n      ${i.Z.winners.map(((e,t)=>`\n        <tr>\n          <td class="winner__number">${t+1}</td>\n          <td class="winner__car-color">${(0,s.L)(e.car.color)}</td>\n          <td class="winner__car-name">${e.car.name}</td>\n          <td class="winner__count-wins">${e.wins}</td>\n          <td class="winner__time-wins">${e.time}</td>\n        </tr>\n      `)).join("")}\n    </tbody>\n  </table>\n`,o=()=>{const e=async e=>{i.Z.sortOrder="asc"===i.Z.sortOrder?"desc":"asc",i.Z.sortBy=e,await a.x.updateStateWinners(),document.getElementById("winners-view").innerHTML=c()};document.body.addEventListener("click",(t=>{const n=t.target;n.classList.contains("table-wins")&&e("wins"),n.classList.contains("table-time")&&e("time")}))}}))},607:(e,t,n)=>{n.a(e,(async e=>{var t=n(287),a=n(878),s=n(683),i=n(58),r=n(684),c=n(752),o=e([t,a,s,i,r,c]);[t,a,s,i,r,c]=o.then?await o:o,(0,c.s)(),await r.x.updateStateGarage(),(0,i.o)(),(0,s.P)(),(0,s.p)(),a.Y.listenerCarStart(),(0,t.k)(),e()}),1)},507:(e,t,n)=>{n.d(t,{g:()=>a});class a{static getPositionAtCenter(e){const{top:t,left:n,width:a,height:s}=e.getBoundingClientRect();return{x:n+a/2,y:t+s/2}}static getDistanceBetweenElements(e,t){const n=a.getPositionAtCenter(e),s=a.getPositionAtCenter(t);return Math.hypot(n.x-s.x,n.y-s.y)}static animation(e,t,n){let a=null;const s={};return s.id=window.requestAnimationFrame((function i(r){a||(a=r);const c=r-a,o=Math.round(c*(t/n));e.style.transform=`translateX(${Math.min(o,t)}px)`,o<t&&(s.id=window.requestAnimationFrame(i))})),s}}},878:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{Y:()=>o});var a=n(345),s=n(507),i=n(54),r=e([i]);i=(r.then?await r:r)[0];let c={};const o=new class{constructor(){this.startDriving=async e=>{const t=document.getElementById(`start-engine-car-${e}`);t.disabled=!0,t?.classList.toggle("enabling",!0);const{velocity:n,distance:i}=await a.h.startEngine(e),r=Math.round(i/n);t?.classList.toggle("enabling",!1),document.getElementById(`stop-engine-car-${e}`).disabled=!1;const o=document.getElementById(`car-${e}`),d=document.getElementById(`flag-${e}`),l=Math.floor(s.g.getDistanceBetweenElements(o,d));c[e]=s.g.animation(o,l,r);const{success:g}=await a.h.drive(e),u=c[e];return!g&&u&&u.id&&window.cancelAnimationFrame(u.id),{success:g,id:e,time:r}},this.stopDriving=async e=>{const t=document.getElementById(`stop-engine-car-${e}`);t.disabled=!0,t?.classList.toggle("enabling",!0),await a.h.stopEngine(e),t?.classList.toggle("enabling",!1),document.getElementById(`start-engine-car-${e}`).disabled=!1,document.getElementById(`car-${e}`).style.transform="translateX(0)";const n=c[e];c[e]&&n.id&&window.cancelAnimationFrame(n.id),c={}},this.race=async e=>{const t=async(e,n)=>{const{success:a,id:s,time:i}=await Promise.race(e);if(!a){const a=n.findIndex((e=>e===s)),i=[...e.slice(0,a),...e.slice(a+1,e.length)],r=[...n.slice(0,a),...n.slice(a+1,n.length)];return t(i,r)}return{id:s,time:+(i/1e3).toFixed(2)}},n=i.Z.cars.map((({id:t})=>e(t)));return t(n,i.Z.cars.map((e=>e.id)))},this.listenerCarStart=()=>{document.body.addEventListener("click",(async e=>{const t=e.target;if(t.classList.contains("start-engine-button")){const e=+t.id.split("start-engine-car-")[1];this.startDriving(e)}if(t.classList.contains("stop-engine-button")){const e=+t.id.split("stop-engine-car-")[1];this.stopDriving(e)}if(t.classList.contains("race")){t.disabled=!0;const e=await this.race(this.startDriving),n=i.Z.cars.find((t=>t.id===e.id));if(n){await a.h.saveWinner(e);const t=document.getElementById("message");t.innerHTML=`${n.name} -- First Place (${e.time}s)!`,t.classList.toggle("visible",!0),document.getElementById("reset").disabled=!1}}t.classList.contains("race-reset")&&(t.disabled=!0,i.Z.cars.map((({id:e})=>this.stopDriving(e))),document.getElementById("message").classList.toggle("visible",!1),document.getElementById("race").disabled=!1)}))}}}}))},11:(e,t,n)=>{n.d(t,{C:()=>s});class a{constructor(){this.handlers=[]}subscribe(e){this.handlers.push(e)}publish(){this.handlers.forEach((e=>{e()}))}}const s=new class{constructor(){this.active="garage",this.events=new a}setActive(e){this.active=e,this.events.publish()}}},54:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{Z:()=>o});var a=n(345);const{items:s,count:i}=await a.h.getCars(1),{items:r,count:c}=await a.h.getWinners({page:1}),o={carsPage:1,cars:s,carsCount:i,winnersPage:1,winners:r,winnersCount:c,view:"garage",sortBy:"",sortOrder:""};e()}),1)},684:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{x:()=>r});var a=n(345),s=n(54),i=e([s]);s=(i.then?await i:i)[0];const r=new class{constructor(){this.updateStateGarage=async()=>{const{items:e,count:t}=await a.h.getCars(s.Z.carsPage);s.Z.cars=e,s.Z.carsCount=t,7*s.Z.carsPage<+s.Z.carsCount?document.getElementById("next").disabled=!1:document.getElementById("next").disabled=!0,s.Z.carsPage>1?document.getElementById("prev").disabled=!1:document.getElementById("prev").disabled=!0},this.updateStateWinners=async()=>{const{items:e,count:t}=await a.h.getWinners({page:s.Z.winnersPage,sort:s.Z.sortBy,order:s.Z.sortOrder});s.Z.winners=e,s.Z.winnersCount=t,10*s.Z.winnersPage<+s.Z.winnersCount?document.getElementById("next").disabled=!1:document.getElementById("next").disabled=!0,s.Z.winnersPage>1?document.getElementById("prev").disabled=!1:document.getElementById("prev").disabled=!0}}}}))}},r={};function c(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return i[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a=e=>!--e.r&&e(),s=(e,t)=>e?e.push(t):a(t),c.a=(i,r,c)=>{var o,d,l,g=c&&[],u=i.exports,m=!0,h=!1,p=(t,n,a)=>{h||(h=!0,n.r+=t.length,t.map(((t,s)=>t[e](n,a))),h=!1)},w=new Promise(((e,t)=>{l=t,d=()=>(e(u),n(g),g=0)}));w[t]=u,w[e]=(e,t)=>{if(m)return a(e);o&&p(o,e,t),s(g,e),w.catch(t)},i.exports=w,r((i=>{if(!i)return d();var r,c;o=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var r=[];i.then((e=>{c[t]=e,n(r),r=0}));var c={[e]:(e,t)=>(s(r,e),i.catch(t))};return c}}return{[e]:e=>a(e),[t]:i}})))(i);var l=new Promise(((e,n)=>{(r=()=>e(c=o.map((e=>e[t])))).r=0,p(o,r,n)}));return r.r?l:c})).then(d,l),m=!1},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(607)})();