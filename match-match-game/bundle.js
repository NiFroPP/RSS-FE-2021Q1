(()=>{"use strict";var e={2309:(e,t,s)=>{s.r(t)},2503:(e,t,s)=>{s.r(t)},76:(e,t,s)=>{s.r(t)},5080:(e,t,s)=>{s.r(t)},3850:(e,t,s)=>{s.r(t)},8591:(e,t,s)=>{s.r(t)},5528:(e,t,s)=>{s.r(t)},8250:(e,t,s)=>{s.r(t)},4337:(e,t,s)=>{s.r(t)},7714:(e,t,s)=>{s.r(t)},2580:(e,t,s)=>{s.r(t)},5373:(e,t,s)=>{s.r(t)},6752:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=s(7366),a=s(7139),i=s(7437),r=s(8229),l=s(4359),c=s(8003),o=s(8515);t.App=class{constructor(e){this.rootElement=e;const t=document.createElement("main");t.className="main",this.rootElement.appendChild(t),this.aboutGame=new n.AboutGame,this.bestPlayers=new i.BestPlayers,this.settings=new a.SettingsField,this.game=new r.Game,this.registrationt=new l.Registrationt,t.appendChild(this.aboutGame.element),t.appendChild(this.bestPlayers.element),t.appendChild(this.settings.element),t.appendChild(this.game.element),t.appendChild(this.registrationt.element),o.addClassActiveField("about-game--active"),c.pagesStore.setActive("about")}}},7366:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutGame=void 0,s(2309);const n=s(3786),a=s(8003);class i extends n.CreateBaseElement{constructor(){super("div",["main__about-game"]),a.pagesStore.events.subscribe((()=>{"about"===a.pagesStore.active?this.createAboutGame():this.cleanAboutGame()}))}createAboutGame(){this.cleanAboutGame(),this.element.innerHTML='\n      <h2 class="about-game__title">How to play?</h2>\n      <div class="about-game__content">\n        <div class="about-game__rigistration">\n          1. Register new player in game\n        </div>\n        <div class="about-game__sittings">\n          2. Configure your game settings\n        </div>\n        <div class="about-game__start-game">\n          3. Start you new game! Remember card positions and match it before\n          times up\n        </div>\n        <div class="about-game__total-scores">\n          4. The points earned are counted as the difference between\n          successful pairs, incorrect pairs and time spent.\n        </div>\n      </div>\n    '}cleanAboutGame(){this.element.innerHTML=""}}t.AboutGame=i},7437:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,i){function r(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,l)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BestPlayers=void 0;const a=s(8003),i=s(3754);s(2503);const r=s(3786);class l extends r.CreateBaseElement{constructor(){super("div",["main__best-score"]),a.pagesStore.events.subscribe((()=>{"best-score"===a.pagesStore.active?this.getPlayers():this.cleanElement()}))}getPlayers(){return n(this,void 0,void 0,(function*(){this.cleanElement(),this.addBestPlayersTitle();const e=yield i.scoresStore.readAll();e.sort(((e,t)=>t.totalScore-e.totalScore));const t=e.slice(0,10);for(const e of t)this.addBestPlayersField(e)}))}addBestPlayersTitle(){const e=document.createElement("h2");e.classList.add("best-score__title"),e.innerHTML="Best Players:",this.element.appendChild(e)}addBestPlayersField(e){const t=document.createElement("div");t.classList.add("best-score__player"),t.innerHTML=`Player: ${e.player.firstName} ${e.player.lastName} ${e.player.emailName} --- Total points: ${e.getTotalScore()}`,this.element.appendChild(t)}cleanElement(){this.element.innerHTML=""}}t.BestPlayers=l},4977:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardElement=void 0;const n=s(3786);s(76);class a extends n.CreateBaseElement{constructor(e){super("div",["card-container"]),this.card=e,this.card.events.subscribe((()=>{this.flip(this.card.isTurnover)})),this.element.innerHTML=`\n      <div class="card">\n        <div class="card__front" style="background-image: url('./images/${this.card.url}')"></div>\n        <div class="card__back"></div>\n      </div>\n    `}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("turnover",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.CardElement=a},7610:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,s(5080);const n=s(3786);class a extends n.CreateBaseElement{constructor(){super("div",["cards-field"]),this.cards=[]}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element)))}}t.CardsField=a},2e3:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0,s(3850);const n=s(3786);class a extends n.CreateBaseElement{constructor(e){super("footer",["footer"]),this.body=e,this.element.innerHTML='\n      <div class="footer-container">\n        <a\n          class="footer__github"\n          href="https://github.com/NiFroPP"\n          target="_blank"\n          >Github</a\n        >\n        <a class="footer__rss" href="https://rs.school/js/" target="_blank">\n          <span class="footer__rss-year">\'21</span>\n        </a>\n      </div>\n    ',this.body.appendChild(this.element)}}t.Footer=a},6319:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FullScreenBtn=void 0,s(8591);const n=s(3786);class a extends n.CreateBaseElement{constructor(e){super("button",["fullscreen"]),this.fullScreenBtn=e,this.fullScreenBtn.appendChild(this.element)}ifFullScreen(){this.element.addEventListener("click",(()=>{document.fullscreenElement&&document.exitFullscreen(),document.documentElement.requestFullscreen()}))}}t.FullScreenBtn=a},8229:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,i){function r(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,l)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const a=s(6436),i=s(3786),r=s(629),l=s(3754),c=s(4292),o=s(4977),d=s(7610),m=s(4887),u=s(6938),h=s(5938);class p extends i.CreateBaseElement{constructor(){super("div",["main__game"]),this.timer=new u.TimerElement,this.cardsField=new d.CardsField,this.modalWinnerGame=new h.ModalWinnerGame,c.game.events.subscribe((()=>{c.game.isFinished||this.newGame(c.game.cards)}))}newGame(e){const t=new r.Score({firstName:a.user.firstName,lastName:a.user.lastName,emailName:a.user.emailName});this.element.appendChild(this.timer.element),this.element.appendChild(this.cardsField.element),this.activeTimer&&clearInterval(this.activeTimer),this.activeTimer=setInterval((()=>{t.time++,this.timer.showTimer(t.time)}),100),this.cardsField.clear();const s=[];e.forEach((e=>{const n=new o.CardElement(e);n.element.addEventListener("click",(()=>{this.cardHandler(e,t)})),s.push(n)})),this.cardsField.addCards(s),this.element.removeChild(this.modalWinnerGame.element)}cardHandler(e,t){return n(this,void 0,void 0,(function*(){!e.isTurnover||this.activeCard&&this.activeSecondCard||(e.turnoverToFront(),this.activeCard?(this.activeSecondCard=e,this.activeCard.compare(e)||(t.unmatchedPairs++,yield m.delay(1e3),this.activeCard.turnoverToBack(),e.turnoverToBack()),this.activeCard.compare(e)&&(t.matchPairs++,t.matchPairs===c.game.cards.length/2&&(t.totalScore=100*(t.matchPairs-t.unmatchedPairs),t.totalScore-=t.time,l.scoresStore.add(t),this.activeTimer&&clearInterval(this.activeTimer),c.game.isFinished=!0,c.game.events.publish(),this.cardsField.clear(),this.timer.clearTimer(),this.element.removeChild(this.timer.element),this.element.removeChild(this.cardsField.element),this.element.appendChild(this.modalWinnerGame.element),this.modalWinnerGame.addCongratText(t))),this.activeCard=void 0,this.activeSecondCard=void 0):this.activeCard=e)}))}}t.Game=p},2966:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=void 0;const n=s(626),a=s(2722),i=s(6199),r=s(3786);class l extends r.CreateBaseElement{constructor(){super("header",["header"]),this.headerGame=new a.HeaderGame,this.headerMenu=new n.HeaderMenu,this.headerPlayer=new i.HeaderPlayer;const e=document.createElement("h1");e.classList.add("header__heading"),e.innerHTML="Match-Match-Game";const t=document.createElement("div");t.classList.add("header-container");const s=document.createElement("div");s.classList.add("header__logo"),s.innerHTML="Match-Match-Game",document.createElement("div").classList.add("header__player"),this.element.appendChild(e),this.element.appendChild(t),t.appendChild(s),t.appendChild(this.headerMenu.element),t.appendChild(this.headerGame.element),t.appendChild(this.headerPlayer.element)}}t.HeaderContainer=l},2722:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderGame=void 0;const n=s(3786),a=s(8333),i=s(8515),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("div",["header__game"]),this.element.innerHTML="Start",this.element.addEventListener("click",(()=>{a.clearNoActiveFields(),i.addClassActiveField("game--active");const e=document.querySelector("main");null==e||e.classList.add("game--active"),r.pagesStore.setActive("start-game")}))}}t.HeaderGame=l},1366:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const n=s(2966);s(5528),t.Header=class{constructor(e){this.body=e,this.headerContainer=new n.HeaderContainer,this.body.appendChild(this.headerContainer.element)}}},3238:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderAboutGame=void 0;const n=s(3786),a=s(8333),i=s(8515),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("li",["header__about-game"]),this.element.innerHTML="About Game",this.element.addEventListener("click",(()=>{a.clearNoActiveFields(),i.addClassActiveField("about-game--active"),r.pagesStore.setActive("about")}))}}t.HeaderAboutGame=l},9602:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderBestScore=void 0;const n=s(3786),a=s(8333),i=s(8515),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("li",["header__best-score"]),this.element.innerHTML="Best Score",this.element.addEventListener("click",(()=>{a.clearNoActiveFields(),i.addClassActiveField("best-score--active"),r.pagesStore.setActive("best-score")}))}}t.HeaderBestScore=l},626:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderMenu=void 0;const n=s(3786),a=s(3238),i=s(9602),r=s(5693);class l extends n.CreateBaseElement{constructor(){super("ul",["header__menu"]),this.headerAboutGame=new a.HeaderAboutGame,this.headerBestScore=new i.HeaderBestScore,this.headerSettings=new r.HeaderSettings,this.element.appendChild(this.headerAboutGame.element),this.element.appendChild(this.headerBestScore.element),this.element.appendChild(this.headerSettings.element)}}t.HeaderMenu=l},5693:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderSettings=void 0;const n=s(3786),a=s(8333),i=s(8515),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("li",["header__settings"]),this.element.innerHTML="Settings",this.element.addEventListener("click",(()=>{a.clearNoActiveFields(),i.addClassActiveField("settings--active"),r.pagesStore.setActive("settings")}))}}t.HeaderSettings=l},6199:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderPlayer=void 0;const n=s(3786),a=s(8333),i=s(8515),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("div",["header__registration"]),this.element.innerHTML="Registration",this.element.setAttribute("id","avatar"),this.element.addEventListener("click",(()=>{a.clearNoActiveFields(),i.addClassActiveField("registration--active"),r.pagesStore.setActive("registration")}))}}t.HeaderPlayer=l},5938:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalWinnerGame=void 0,s(8250);const n=s(3786),a=s(8333),i=s(8515),r=s(7437),l=s(8003);class c extends n.CreateBaseElement{constructor(){super("div",["modal-winner-game"]),this.bestPlayers=new r.BestPlayers}addCongratText(e){["CONGRATULATIONS!",`You successfully found all matches on "${e.getScoreTime()}" minutes.`,`You guessed "${e.getScoreMatchedPairs()}" pairs.`,`You made "${e.getScoreUnmatchedPairs()}" wrong pairs comparisons.`,`You earned a total of "${e.getTotalScore()}" points.`].forEach((e=>{const t=document.createElement("p");t.classList.add("modal-winner-game__text"),t.textContent=e,this.element.appendChild(t)}));const t=document.createElement("div");t.classList.add("modal-winner-game__finish"),t.innerHTML="OK!",this.element.appendChild(t),t.addEventListener("click",(()=>{this.element.innerHTML="",a.clearNoActiveFields(),i.addClassActiveField("best-score--active"),l.pagesStore.setActive("best-score")}))}}t.ModalWinnerGame=c},8943:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationAddUser=void 0;const n=s(8003),a=s(4292),i=s(6436),r=s(8333),l=s(8515),c=s(3786);class o extends c.CreateBaseElement{constructor(){super("div",["registration__add-user"]),this.element.innerHTML="Add User",this.element.addEventListener("click",(()=>{i.user.firstNameValid&&i.user.lastNameValid&&i.user.emailNameValid&&(a.game.validateUser=!0,r.clearNoActiveFields(),l.addClassActiveField("game--active"),n.pagesStore.setActive("start-game"))}))}}t.RegistrationAddUser=o},3263:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationButtons=void 0;const n=s(3786),a=s(8943),i=s(4203);class r extends n.CreateBaseElement{constructor(){super("div",["registration__buttons"]);const e=new a.RegistrationAddUser,t=new i.RegistrationCancel;this.element.appendChild(e.element),this.element.appendChild(t.element)}}t.RegistrationButtons=r},4203:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationCancel=void 0;const n=s(3786),a=s(6436);class i extends n.CreateBaseElement{constructor(){super("div",["registration__cancel"]),this.element.innerHTML="Cancel",this.element.addEventListener("click",(()=>{a.user.cleanValidate()}))}}t.RegistrationCancel=i},8554:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationAvatar=void 0;const n=s(3786);class a extends n.CreateBaseElement{constructor(){super("div",["registration__player-avatar"]),this.element.innerHTML="Avatar"}}t.RegistrationAvatar=a},488:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationEmailName=void 0;const n=s(6436),a=s(9213);t.RegistrationEmailName=class{constructor(){this.element=document.createElement("input"),this.element.classList.add("registration__email-name"),this.element.addEventListener("change",(()=>{a.validateEmail(this.element.value)?(this.element.classList.add("valid"),n.user.setEmailName(this.element.value),n.user.emailNameValid=!0):(this.element.classList.remove("valid"),n.user.emailNameValid=!1)}))}}},5632:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationFirstName=void 0;const n=s(6436),a=s(5014);t.RegistrationFirstName=class{constructor(){this.element=document.createElement("input"),this.element.classList.add("registration__first-name"),this.element.addEventListener("change",(()=>{a.validateFirstName(this.element.value)?(this.element.classList.add("valid"),n.user.setFirstName(this.element.value),n.user.firstNameValid=!0):(this.element.classList.remove("valid"),n.user.firstNameValid=!1)}))}}},2616:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationLastName=void 0;const n=s(6436),a=s(7193);t.RegistrationLastName=class{constructor(){this.element=document.createElement("input"),this.element.classList.add("registration__last-name"),this.element.addEventListener("change",(()=>{a.validateLastName(this.element.value)?(this.element.classList.add("valid"),n.user.setLastName(this.element.value),n.user.lastNameValid=!0):(this.element.classList.remove("valid"),n.user.lastNameValid=!1)}))}}},6863:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegistrationMenu=void 0;const n=s(3786),a=s(5632),i=s(2616),r=s(488),l=s(8554),c=s(5393);class o extends n.CreateBaseElement{constructor(){super("div",["registration__player"]);const e=new a.RegistrationFirstName,t=new i.RegistrationLastName,s=new r.RegistrationEmailName,n=new l.RegistrationAvatar,o=document.createElement("div");o.classList.add("registration__player-name"),this.element.appendChild(o),this.element.appendChild(n.element),c.createRegistrationMenuItem("First Name:",o),o.appendChild(e.element),c.createRegistrationMenuItem("Last Name:",o),o.appendChild(t.element),c.createRegistrationMenuItem("Email:",o),o.appendChild(s.element)}}t.RegistrationMenu=o},4359:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Registrationt=void 0,s(4337);const n=s(3786),a=s(6863),i=s(3263),r=s(8003);class l extends n.CreateBaseElement{constructor(){super("div",["main__registration"]),r.pagesStore.events.subscribe((()=>{"registration"===r.pagesStore.active?this.createRegistration():this.cleanRegistration()}))}createRegistration(){this.cleanRegistration(),this.registrationMenu=new a.RegistrationMenu,this.registrationButtons=new i.RegistrationButtons;const e=document.createElement("h2");e.classList.add("registration__title"),e.innerHTML="Registration new Player:",this.element.appendChild(e),this.element.appendChild(this.registrationMenu.element),this.element.appendChild(this.registrationButtons.element)}cleanRegistration(){this.element.innerHTML=""}}t.Registrationt=l},9916:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsDelayStart=void 0;const n=s(4292);t.SettingsDelayStart=class{constructor(){this.element=document.createElement("select"),this.element.classList.add("settings__delay-start"),[{title:"1 sec",value:"1 sec"},{title:"3 sec",value:"3 sec"},{title:"5 sec",value:"5 sec"},{title:"10 sec",value:"10 sec"},{title:"20 sec",value:"20 sec"},{title:"30 sec",value:"30 sec"}].forEach((e=>{const t=document.createElement("option");t.textContent=e.title,t.value=e.value,this.element.appendChild(t)})),n.game.delayStart="1 sec",this.element.addEventListener("change",(()=>{n.game.delayStart=this.element.value}))}}},7138:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsDifficulty=void 0;const n=s(4292);t.SettingsDifficulty=class{constructor(){this.element=document.createElement("select"),this.element.classList.add("settings__difficulty"),[{title:"10 cards",value:"10 cards"},{title:"20 cards",value:"20 cards"},{title:"30 cards",value:"30 cards"},{title:"40 cards",value:"40 cards"},{title:"50 cards",value:"50 cards"},{title:"60 cards",value:"60 cards"}].forEach((e=>{const t=document.createElement("option");t.textContent=e.title,t.value=e.value,this.element.appendChild(t)})),n.game.difficulty="10 cards",this.element.addEventListener("change",(()=>{n.game.difficulty=this.element.value}))}}},4722:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsGameCards=void 0;const n=s(4292);t.SettingsGameCards=class{constructor(){this.element=document.createElement("select"),this.element.classList.add("settings__difficulty"),[{title:"Cosmetic Ingredients",value:"cosmetic-ingredients"},{title:"Flags",value:"flags"},{title:"Pets",value:"pets"},{title:"Soccer",value:"soccer"},{title:"Tropic",value:"tropic"}].forEach((e=>{const t=document.createElement("option");t.textContent=e.title,t.value=e.value,this.element.appendChild(t)})),n.game.cartCategory="cosmetic-ingredients",this.element.addEventListener("change",(()=>{n.game.cartCategory=this.element.value}))}}},7139:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsField=void 0,s(7714);const n=s(3786),a=s(4722),i=s(7138),r=s(9916),l=s(8003);class c extends n.CreateBaseElement{constructor(){super("div",["main__settings"]),l.pagesStore.events.subscribe((()=>{"settings"===l.pagesStore.active?this.createSettingsMenu():this.cleanSittings()}))}createSettingsMenu(){this.cleanSittings(),this.createSettingsMenuItem("Game Cards");const e=new a.SettingsGameCards;this.element.appendChild(e.element),this.createSettingsMenuItem("Difficulty");const t=new i.SettingsDifficulty;this.element.appendChild(t.element),this.createSettingsMenuItem("Delay Start");const s=new r.SettingsDelayStart;this.element.appendChild(s.element)}createSettingsMenuItem(e){const t=document.createElement("h2"),s=document.createElement("hr");t.classList.add("settings__logo"),t.innerHTML=`${e}`,this.element.appendChild(s),this.element.appendChild(t)}cleanSittings(){this.element.innerHTML=""}}t.SettingsField=c},8515:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addClassActiveField=void 0,t.addClassActiveField=function(e){const t=document.querySelector("main");null==t||t.classList.add(e);const s=document.querySelector("header");null==s||s.classList.add(e)}},8333:(e,t)=>{function s(e){e.classList.remove("about-game--active"),e.classList.remove("best-score--active"),e.classList.remove("settings--active"),e.classList.remove("game--active"),e.classList.remove("registration--active")}Object.defineProperty(t,"__esModule",{value:!0}),t.clearNoActiveFields=void 0,t.clearNoActiveFields=function(){const e=document.querySelector("main");e&&s(e);const t=document.querySelector("header");t&&s(t)}},3786:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CreateBaseElement=void 0,t.CreateBaseElement=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},5393:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRegistrationMenuItem=void 0,t.createRegistrationMenuItem=function(e,t){const s=document.createElement("h3"),n=document.createElement("hr");s.classList.add("registration__name"),s.innerHTML=`${e}`,t.appendChild(n),t.appendChild(s)}},4887:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},9213:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateEmail=void 0,t.validateEmail=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},5014:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateFirstName=void 0,t.validateFirstName=function(e){return/^([a-zA-Z])+/.test(e)}},7193:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateLastName=void 0,t.validateLastName=function(e){return/^([a-zA-Z])+/.test(e)}},6938:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TimerElement=void 0,s(2580);const n=s(3786);class a extends n.CreateBaseElement{constructor(){super("div",["timer"])}clearTimer(){this.element.innerHTML=""}showTimer(e){const t=Math.floor(e/10/60),s=Math.floor(e/10%60);let n="",a="";n=t<10?`0${t}`:`${t}`,a=s<10?`0${s}`:`${s}`,this.element.innerHTML=`Time: ${n}:${a}`}}t.TimerElement=a},5669:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const n=s(5810);t.Card=class{constructor(e){this.url=e,this.isTurnover=!1,this.events=new n.PubSub}compare(e){return this.url===e.url}flip(){this.isTurnover=!this.isTurnover,this.events.publish()}turnoverToBack(){this.isTurnover=!0,this.events.publish()}turnoverToFront(){this.isTurnover=!1,this.events.publish()}}},4292:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.game=void 0;const a=n(s(865)),i=s(5810),r=s(8003),l=s(5669);t.game=new class{constructor(){this.categoriesAndImages=a.default,this.events=new i.PubSub,this.cards=[],this.difficulty="10 cards",this.cartCategory="cosmetic-ingredients",this.delayStart="1 sec",this.isFinished=!0,this.validateUser=!1,r.pagesStore.events.subscribe((()=>{"start-game"===r.pagesStore.active&&this.validateUser&&this.startNewGame()}))}choiceCategory(){switch(this.cartCategory){case"cosmetic-ingredients":return 0;case"flags":return 1;case"pets":return 2;case"soccer":return 3;case"tropic":return 4;default:return 0}}choiceDelayStart(){switch(this.delayStart){case"1 sec":return 1e3;case"3 sec":return 3e3;case"5 sec":return 5e3;case"10 sec":return 1e4;case"20 sec":return 2e4;case"30 sec":return 3e4;default:return 0}}sliceImages(e){switch(e.sort((()=>Math.random()-.5)),this.difficulty){case"10 cards":return e.slice(0,5);case"20 cards":return e.slice(0,10);case"30 cards":return e.slice(0,15);case"40 cards":return e.slice(0,20);case"50 cards":return e.slice(0,25);case"60 cards":return e.slice(0,30);default:return e}}startNewGame(){const e=this.choiceCategory(),t=this.categoriesAndImages[e],s=this.sliceImages(t.images).map((e=>`${t.category}/${e}`)),n=s.concat(s).map((e=>new l.Card(e))).sort((()=>Math.random()-.5));setTimeout((()=>{n.forEach((e=>{e.turnoverToBack()}))}),this.choiceDelayStart()),this.isFinished=!1,this.cards=n,this.events.publish()}}},8003:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pagesStore=void 0;const n=s(5810);t.pagesStore=new class{constructor(){this.active="about",this.events=new n.PubSub}setActive(e){this.active=e,this.events.publish()}}},5810:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PubSub=void 0,t.PubSub=class{constructor(){this.handlers=[]}subscribe(e){this.handlers.push(e)}publish(){this.handlers.forEach((e=>{e()}))}}},6436:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.user=t.User=void 0;class s{constructor(){this.firstNameValid=!1,this.lastNameValid=!1,this.emailNameValid=!1,this.firstName="",this.lastName="",this.emailName=""}getFirstName(){return this.firstName}setFirstName(e){this.firstName=e}getLastName(){return this.lastName}setLastName(e){this.lastName=e}getEmailName(){return this.emailName}setEmailName(e){this.emailName=e}cleanValidate(){this.firstNameValid=!1,this.lastNameValid=!1,this.emailNameValid=!1,this.firstName="",this.lastName="",this.emailName=""}}t.User=s,t.user=new s},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;class s{constructor(e){this.time=0,this.unmatchedPairs=0,this.matchPairs=0,this.totalScore=0,this.player=e}getScoreTime(){const e=Math.round(this.time/10),t=e%60;return[Math.floor(e/60).toString().padStart(2,"0"),t.toString().padStart(2,"0")].join(":")}getScoreMatchedPairs(){return this.matchPairs}getScoreUnmatchedPairs(){return this.unmatchedPairs}getTotalScore(){return this.totalScore<=0?0:this.totalScore}serialize(){return{time:this.time,unmatchedPairs:this.unmatchedPairs,matchPairs:this.matchPairs,totalScore:this.totalScore,player:this.player}}static deserialize(e){const t=new s(e.player);return t.time=e.time,t.unmatchedPairs=e.unmatchedPairs,t.matchPairs=e.matchPairs,t.totalScore=e.totalScore,t}}t.Score=s},3754:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,i){function r(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,l)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.scoresStore=t.ScoresStore=void 0;const a=s(629),i="scores";class r{constructor(){this.storage=localStorage}add(e){return n(this,void 0,void 0,(function*(){const t=yield this.readAll();t.push(e);const s=t.map((e=>e.serialize()));this.storage.setItem(i,JSON.stringify(s))}))}readAll(){return n(this,void 0,void 0,(function*(){const e=this.storage.getItem(i);return(e?JSON.parse(e):[]).map((e=>a.Score.deserialize(e)))}))}}t.ScoresStore=r,t.scoresStore=new r},865:e=>{e.exports=JSON.parse('[{"category":"cosmetic-ingredients","images":["001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","009.png","010.png","011.png","012.png","013.png","014.png","015.png","016.png","016.png","017.png","018.png","019.png","020.png","021.png","022.png","023.png","024.png","025.png","026.png","027.png","028.png","029.png","030.png"]},{"category":"flags","images":["001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","009.png","010.png","011.png","012.png","013.png","014.png","015.png","016.png","016.png","017.png","018.png","019.png","020.png","021.png","022.png","023.png","024.png","025.png","026.png","027.png","028.png","029.png","030.png"]},{"category":"pets","images":["001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","009.png","010.png","011.png","012.png","013.png","014.png","015.png","016.png","016.png","017.png","018.png","019.png","020.png","021.png","022.png","023.png","024.png","025.png","026.png","027.png","028.png","029.png","030.png"]},{"category":"soccer","images":["001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","009.png","010.png","011.png","012.png","013.png","014.png","015.png","016.png","016.png","017.png","018.png","019.png","020.png","021.png","022.png","023.png","024.png","025.png","026.png","027.png","028.png","029.png","030.png"]},{"category":"tropic","images":["001.png","002.png","003.png","004.png","005.png","006.png","007.png","008.png","009.png","010.png","011.png","012.png","013.png","014.png","015.png","016.png","016.png","017.png","018.png","019.png","020.png","021.png","022.png","023.png","024.png","025.png","026.png","027.png","028.png","029.png","030.png"]}]')}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,s),i.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s(5373);const e=s(6752),t=s(2e3),n=s(6319),a=s(1366);window.onload=()=>{const s=document.querySelector("body");if(!s)throw Error("Root element not found");new a.Header(s),new e.App(s),new t.Footer(s),new n.FullScreenBtn(s).ifFullScreen()}})()})();