var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired76b=o),o.register("6fIKZ",(function(t,n){var o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();t.exports=n=o.fetch,o.fetch&&(n.default=o.fetch.bind(o)),n.Headers=o.Headers,n.Request=o.Request,n.Response=o.Response}));var r=o("6fIKZ");window.addEventListener("keyup",(e=>{if("Escape"===e.key){if(x.classList.contains("is-hidden"))return;x.classList.add("is-hidden")}}));const s=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},i=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},l=e=>{try{const t=localStorage.removeItem(e);return null===t?void 0:JSON.stringify(t)}catch(e){console.error("Get state error: ",e.message)}};function c(e){"dark"==e&&(l("current-theme"),s("current-theme","dark"),document.documentElement.style.setProperty("--white","#8c8c8c"),document.documentElement.style.setProperty("--gray","#fff"),document.documentElement.style.setProperty("--light-gray","#fff"),document.documentElement.style.setProperty("--red","#fff"),document.documentElement.style.setProperty("--footer-bg","#545454"),document.documentElement.style.setProperty("--blue","#b92f2c"),document.documentElement.style.setProperty("--black","#fff")),"light"==e&&(l("current-theme"),s("current-theme","light"),document.documentElement.style.setProperty("--white","#fff"),document.documentElement.style.setProperty("--gray","#545454"),document.documentElement.style.setProperty("--light-gray","#8c8c8c"),document.documentElement.style.setProperty("--red","#ff6b08"),document.documentElement.style.setProperty("--footer-bg","#f7f7f7"),document.documentElement.style.setProperty("--blue","rgb(16, 16, 211)"),document.documentElement.style.setProperty("--black","#000"))}let a=document.querySelector("label#toggle");a.getAttribute("class");const d=document.querySelector(".checkbox");var u=d.checked;const g=i("current-theme");if(void 0===g||0==u||g.includes("light")){a.getAttribute("class");a.classList.remove("switched"),a.classList.add("toggle"),console.log(u),l("current-theme"),s("current-theme","light"),c("light"),u=!1}(g.includes("dark")||1==u)&&(a.classList.remove("toggle"),a.classList.add("switched"),console.log(u),l("current-theme"),s("current-theme","dark"),c("dark"),u=!0),console.log(u);document.body;const m=document.querySelector(".header-library-button"),p=document.querySelector(".header-bottom-buttons-container"),h=document.querySelector(".header-watched-button"),b=document.querySelector(".header-clear-watched-button"),y=document.querySelector(".header-queue-button"),v=document.querySelector(".header-clear-queue-button"),f=document.querySelector(".search-form-input");let A=null;const E=document.querySelector(".search-form-button"),L=document.querySelector(".header__error"),k=document.querySelector(".gallery"),q=`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${currentPage}`,C=`https://api.themoviedb.org/3/genre/movie/list?language=en&page=${currentPage}`,w={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDA4MGZmMTg0Y2FiZWJkZjFiNDJlYWE4OGZiNTczOCIsInN1YiI6IjY2NjAyNTUwN2MwMjgyZWYzMDRmNjAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-GiosJEhvb8JZPRVsDWYKnyMuBuXM_jJXaHMa3NkslY"}},x=document.querySelector(".modal-window");console.log(x);const _=document.querySelector(".modal-img"),S=document.querySelector(".modal-title"),$=document.querySelector(".modal-vote"),P=document.querySelector(".modal-votes"),T=document.querySelector(".modal-popularity-result"),j=document.querySelector(".modal-original-title-result"),M=document.querySelector(".modal-genre-result"),O=document.querySelector(".modal-movie-description");function I(e){e.classList.add("is-hidden")}function J(e){e.classList.remove("is-hidden")}function H(e,t,n,o){let r=i(`${e}`);void 0===r?(I(o),J(n)):r.includes(t)?(I(n),J(o)):(I(o),J(n))}document.querySelector(".modal-close-button").addEventListener("click",(()=>{x.classList.toggle("is-hidden")}));const N=document.querySelector(".modal-add-to-watched-btn"),Y=document.querySelector(".remove-from-watched");I(Y),N.addEventListener("click",(e=>{let t=_.getAttribute("id"),n=i("watched");if(void 0===n||0===n.length)s("watched",[t]);else{n.includes(t)?console.log("it has"):(n.push(t),s("watched",n))}I(N),J(Y)})),Y.addEventListener("click",(e=>{let t=_.getAttribute("id"),n=i("watched").filter((e=>e!==t));s("watched",n),I(Y),J(N)}));const D=document.querySelector(".modal-add-to-queue-btn"),U=document.querySelector(".remove-from-queue-btn");function Z(){document.querySelectorAll(".hero-cards-link").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget,n=t.href;_.setAttribute("src",n);const o=t.getAttribute("id");_.setAttribute("id",o),H("queued",o,D,U),H("watched",o,N,Y);const r=t.getAttribute("title");S.textContent=r;const s=t.getAttribute("vote");$.textContent=s;const i=t.getAttribute("votes");P.textContent=i;const l=t.getAttribute("popularity");T.textContent=l;const c=t.getAttribute("original_title");j.textContent=c;const a=t.getAttribute("description");O.textContent=a;const d=t.getAttribute("genres");M.textContent=d,x.classList.toggle("is-hidden")}))}))}function W(e){const t=document.createElement("div");t.setAttribute("class","movie-card item"),t.setAttribute("data-movie-id",`${e.id}`),k.append(t);const n=document.createElement("a");null===e.backdrop_path?n.setAttribute("href","https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg"):n.setAttribute("href",`https://image.tmdb.org/t/p/original/${e.poster_path}`);const o=e.genre_ids;let s=[];o.forEach((e=>{r(C,w).then((e=>e.json())).then((t=>{t.genres.map((t=>{if(t.id===e)if(s.push(t.name),s.length<=3)n.setAttribute("genres",s);else{let e=s.slice(0,2);n.setAttribute("genres",`${e},Other`)}}))})).catch((e=>console.error("error:"+e)))})),n.setAttribute("class","hero-cards-link"),n.setAttribute("title",`${e.title}`),n.setAttribute("vote",`${e.vote_average}`),n.setAttribute("votes",`${e.vote_count}`),n.setAttribute("popularity",`${e.popularity}`),n.setAttribute("original_title",`${e.original_title}`),n.setAttribute("description",`${e.overview}`),n.setAttribute("id",e.id),t.append(n);const i=document.createElement("img");null===e.backdrop_path?i.setAttribute("src","https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg"):i.setAttribute("src",`https://image.tmdb.org/t/p/original/${e.backdrop_path}`),i.setAttribute("class","hero-cards-image"),i.setAttribute("alt",`${e.media_type}`),i.setAttribute("loading","lazy"),i.setAttribute("id",e.id),n.append(i);const l=document.createElement("div");l.setAttribute("class","hero-movie-details-container"),l.setAttribute("data-movie-id",`${e.id}`),t.append(l);const c=document.createElement("h3");c.setAttribute("class","hero-movie-title"),c.textContent=`${e.title}`,l.append(c);const a=document.createElement("ul");a.setAttribute("class","hero-movie-genres-list");let d=e.genre_ids;if(d.length>3){d=d.slice(0,2),d.forEach((e=>{const t=document.createElement("li");t.setAttribute("class","hero-movie-genres-list-item"),r(C,w).then((e=>e.json())).then((n=>{n.genres.map((n=>{n.id===e&&(t.textContent=`${n.name},`)}))})).catch((e=>console.error("error:"+e))),a.append(t)}));const e=document.createElement("li");e.setAttribute("class","hero-movie-genres-list-item"),e.textContent="Otherr",a.append(e)}else if(0===d.length){const e=document.createElement("li");e.setAttribute("class","hero-movie-genres-list-item"),e.textContent="Otherr",a.append(e)}else d.forEach((e=>{const t=document.createElement("li");t.setAttribute("class","hero-movie-genres-list-item"),r(C,w).then((e=>e.json())).then((n=>{n.genres.map((n=>{n.id===e&&(t.textContent=`${n.name},`)}))})).catch((e=>console.error("error:"+e))),a.append(t)}));setTimeout((function(){let e=a.lastChild,t=e.textContent;e.textContent=t.slice(0,-1)}),2e3);const u=e.release_date.slice(0,4),g=document.createElement("span");g.setAttribute("class","hero-year-span"),g.textContent="| "+u;const m=document.createElement("span");m.setAttribute("class","hero-votes-span"),m.textContent=e.vote_average;const p=document.createElement("div");p.setAttribute("class","hero-details-container"),l.append(p),p.append(a,g,m)}function G(e){const t=document.createElement("div");t.setAttribute("class","movie-card item"),t.setAttribute("data-movie-id",`${e.id}`),k.append(t);const n=document.createElement("a");null===e.backdrop_path?n.setAttribute("href","https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg"):n.setAttribute("href",`https://image.tmdb.org/t/p/original/${e.poster_path}`);const o=e.genres,r=o.length;let s=[];r<=2?o.map((e=>{s.push(e.name),n.setAttribute("genres",s)})):(s.push(o[0].name,o[1].name,"Other"),n.setAttribute("genres",s)),n.setAttribute("class","hero-cards-link"),n.setAttribute("title",`${e.title}`),n.setAttribute("vote",`${e.vote_average}`),n.setAttribute("votes",`${e.vote_count}`),n.setAttribute("popularity",`${e.popularity}`),n.setAttribute("original_title",`${e.original_title}`),n.setAttribute("description",`${e.overview}`),n.setAttribute("id",e.id),t.append(n);const i=document.createElement("img");null===e.backdrop_path?i.setAttribute("src","https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg"):i.setAttribute("src",`https://image.tmdb.org/t/p/original/${e.backdrop_path}`),i.setAttribute("class","hero-cards-image"),i.setAttribute("alt",`${e.media_type}`),i.setAttribute("loading","lazy"),i.setAttribute("id",e.id),n.append(i);const l=document.createElement("div");l.setAttribute("class","hero-movie-details-container"),l.setAttribute("data-movie-id",`${e.id}`),t.append(l);const c=document.createElement("h3");c.setAttribute("class","hero-movie-title"),c.textContent=`${e.title}`,l.append(c);const a=document.createElement("ul");a.setAttribute("class","hero-movie-genres-list");let d=n.getAttribute("genres");const u=document.createElement("li");u.setAttribute("class","hero-movie-genres-list-item"),u.textContent=d,a.append(u);const g=e.release_date.slice(0,4),m=document.createElement("span");m.setAttribute("class","hero-year-span"),m.textContent="| "+g;const p=document.createElement("span");p.setAttribute("class","hero-votes-span"),p.textContent=e.vote_average;const h=document.createElement("div");h.setAttribute("class","hero-details-container"),l.append(h),h.append(a,m,p),n.addEventListener("click",(e=>{e.preventDefault(),console.log(e.target);const t=e.currentTarget;console.log(t);const n=t.href;_.setAttribute("src",n);const o=t.getAttribute("id");_.setAttribute("id",o),H("queued",o,D,U),H("watched",o,N,Y);const r=t.getAttribute("title");S.textContent=r;const s=t.getAttribute("vote");$.textContent=s;const i=t.getAttribute("votes");P.textContent=i;const l=t.getAttribute("popularity");T.textContent=l;const c=t.getAttribute("original_title");j.textContent=c;const a=t.getAttribute("description");O.textContent=a;const d=t.getAttribute("genres");M.textContent=d,x.classList.toggle("is-hidden")}))}I(U),D.addEventListener("click",(e=>{let t=_.getAttribute("id");console.log(t);let n=i("queued");if(console.log(n),void 0===n||0===n.length)s("queued",[t]);else{n.includes(t)?console.log("it has"):(n.push(t),console.log(n),s("queued",n),console.log("it dont has"))}I(D),J(U)})),U.addEventListener("click",(e=>{let t=_.getAttribute("id");console.log(t);let n=i("queued");console.log(n);let o=n.filter((e=>e!==t));console.log(o),s("queued",o),I(U),J(D)})),f.addEventListener("input",(e=>{p.classList.contains("is-hidden")||p.classList.add("is-hidden"),0===f.value.length&&(L.style.display="none",console.log("empty"))})),f.addEventListener("change",(e=>{p.classList.contains("is-hidden")||p.classList.add("is-hidden"),L.style.display="none",E.disabled=!1,console.log("change")})),E.addEventListener("click",(e=>{e.preventDefault(),p.classList.contains("is-hidden")||p.classList.add("is-hidden"),paginationContainer.style.display="block",E.disabled=!0,A=f.value.replace(/ /g,"%20");let t=`https://api.themoviedb.org/3/search/movie?query=${A}&include_adult=true&language=en-US&page=${currentPage}`;k.innerHTML=null,r(t,w).then((e=>e.json())).then((e=>{console.log(e);const n=e.results;0===n.length&&(L.style.display="block",console.log("not found")),console.log(e.total_pages),console.log(2<=e.total_pages<20),console.log(e.total_pages<=1),n.map((e=>{W(e),console.log("search")})),Z(),e.total_pages<=1&&(paginationContainer.style.display="none"),2<=e.total_pages<20&&(totalPages=e.total_pages,element.innerHTML=createPagination(totalPages,page)),e.total_pages>20&&(page=1,totalPages=20,element.innerHTML=createPagination(totalPages,page)),paginationContainer.addEventListener("click",(e=>{currentPage=e.currentTarget.querySelector(".active>span").textContent,console.log(currentPage),t=`https://api.themoviedb.org/3/search/movie?query=${A}&include_adult=true&language=en-US&page=${currentPage}`,k.innerHTML=null,console.log(t),r(t,w).then((e=>e.json())).then((e=>{console.log(e.total_pages),console.log(e.results);e.results.map((e=>{W(e)})),Z()})).catch((e=>console.error("error:"+e)))}))})).catch((e=>console.error("error:"+e)))})),m.addEventListener("click",(e=>{p.classList.toggle("is-hidden")})),d.addEventListener("click",(e=>{var t=d.checked;if(t){void 0===i("current-theme")&&(l("current-theme"),a.classList.remove("toggle"),a.classList.add("switched"),s("current-theme","dark"),c("dark")),a.classList.remove("toggle"),a.classList.add("switched"),l("current-theme"),s("current-theme","dark"),c("dark")}if(!t){void 0===i("current-theme")&&(a.classList.add("toggle"),a.classList.remove("switch"),s("current-theme","light"),c("light")),a.classList.add("toggle"),a.classList.remove("switch"),l("current-theme"),s("current-theme","light"),c("light")}})),h.addEventListener("click",(e=>{k.innerHTML="";const t=i("watched");if(paginationContainer.style.display="none",void 0===t||0===t.length){let e=document.createElement("p");e.setAttribute("class","empty-list"),e.textContent='Oops ! Your "Watched" library is empty !',k.append(e)}else{console.log(t);const e={headers:{Accept:"application/json"}};t.forEach((t=>{r(`https://api.themoviedb.org/3/movie/${t}?&api_key=90080ff184cabebdf1b42eaa88fb5738&language=en-US&page=1`,e).then((e=>e.json())).then((e=>{console.log(e);G(e)})).catch((e=>console.error("error:"+e)))}))}b.classList.toggle("is-hidden"),b.addEventListener("click",(e=>{k.innerHTML,l("watched");let t=document.createElement("p");t.setAttribute("class","empty-list"),t.textContent='Oops ! Your "Watched" library is empty !',k.append(t)})),v.classList.contains("is-hidden")||v.classList.toggle("is-hidden")})),y.addEventListener("click",(e=>{k.innerHTML=null;const t=i("queued");if(paginationContainer.style.display="none",void 0===t||0===t.length){let e=document.createElement("p");e.setAttribute("class","empty-list"),e.textContent='Oops ! Your "Queued" library is empty !',k.append(e)}else{const e={headers:{Accept:"application/json"}};t.forEach((t=>{r(`https://api.themoviedb.org/3/movie/${t}?&api_key=90080ff184cabebdf1b42eaa88fb5738&language=en-US&page=1`,e).then((e=>e.json())).then((e=>{console.log(e);G(e)})).catch((e=>console.error("error:"+e)))}))}v.classList.toggle("is-hidden"),v.addEventListener("click",(e=>{k.innerHTML=null,l("queued");let t=document.createElement("p");t.setAttribute("class","empty-list"),t.textContent='Oops ! Your "Queued" library is empty !',k.append(t)})),b.classList.contains("is-hidden")||b.classList.toggle("is-hidden")})),r(q,w).then((e=>e.json())).then((e=>{k.innerHTML=null,console.log(e);const t=e.results;console.log(e.total_pages),console.log(totalPages),paginationContainer.style.display="block",e.total_pages<=1&&(paginationContainer.style.display="none"),2<=e.total_pages<20&&(page=1,totalPages=e.total_pages,element.innerHTML=createPagination(totalPages,page)),page=1,totalPages=20,element.innerHTML=createPagination(totalPages,page),paginationContainer.addEventListener("click",(e=>{currentPage=e.currentTarget.querySelector(".active>span").textContent;let t=`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${currentPage}`;k.innerHTML=null,r(t,w).then((e=>e.json())).then((e=>{e.results.map((e=>{W(e)})),document.querySelectorAll(".hero-cards-link").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget,n=t.href;_.setAttribute("src",n);const o=t.getAttribute("id");_.setAttribute("id",o),H("queued",o,D,U),H("watched",o,N,Y);const r=t.getAttribute("title");S.textContent=r;const s=t.getAttribute("vote");$.textContent=s;const i=t.getAttribute("votes");P.textContent=i;const l=t.getAttribute("popularity");T.textContent=l;const c=t.getAttribute("original_title");j.textContent=c;const a=t.getAttribute("description");O.textContent=a;const d=t.getAttribute("genres");M.textContent=d,x.classList.toggle("is-hidden")}))}))})).catch((e=>console.error("error:"+e)))})),t.map((e=>{W(e)})),Z()})).catch((e=>console.error("error:"+e)));const R=document.querySelector(".page-up");window.onscroll=function(){document.documentElement.scrollTop>700?R.style.display="flex":R.style.display="none"},R.addEventListener("click",(()=>{document.documentElement.scrollTop=0}));const z=document.querySelector(".footer-modal-button"),Q=document.querySelector(".footer-modal-close-button"),B=document.querySelector(".footer-modal");B.style.display="none",z.addEventListener("click",(()=>{B.style.display="flex"})),Q.addEventListener("click",(()=>{B.style.display="none"})),window.addEventListener("click",(e=>{e.target==B&&(B.style.display="none")})),window.addEventListener("keyup",(e=>{"Escape"===e.key&&(B.style.display="none")}));
//# sourceMappingURL=index.2dbb9214.js.map
