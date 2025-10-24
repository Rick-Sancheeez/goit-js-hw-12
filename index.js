import{a as P,i,S as B}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const $="52733365-810bb5faaf6ec9d90304400a7";let g=15;async function b(r,s){const e=new URLSearchParams({key:$,q:r,page:s,per_page:g,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await P.get(`https://pixabay.com/api/?${e}`)).data}catch(n){return i.info({position:"topRight",message:n.message}),{hits:[],totalHits:0}}}let d,l=document.querySelector(".loader"),L=document.querySelector(".div-for-button");const v=document.querySelector(".gallery");function w(r){let s=r.map(e=>`<li>

            <div class="container-image">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" />
                </a>
            </div>

            <div class="container-description">
                <ul class="image-description">
                    <li> <span>Likes</span> <span>${e.likes}</span> </li>
                    <li> <span>Views</span> <span>${e.views}</span> </li>
                    <li> <span>Comments</span> <span>${e.comments}</span> </li>
                    <li><span>Downloads</span> <span>${e.downloads}</span> </li>
                </ul>
            </div>

        </li>`).join("");v.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new B(".gallery a",{captionsData:"alt",captionDelay:250})}function M(){v.innerHTML=""}function R(){l&&(l.style.display="block")}function S(){l&&(l.style.display="none")}function q(){L.style.display="block"}function p(){L.style.display="none"}let m=document.querySelector(".form"),O=document.querySelector(".load-button"),f,a,y,c,h;m.addEventListener("submit",async r=>{r.preventDefault(),M(),p();let s=r.target.elements["search-text"].value.trim();if(s===""){i.error({position:"topRight",message:"The field must not be empty"}),m.reset();return}R(),f=s.split(" ").join("+"),a=1;try{let e=await b(f,a);if(e.hits.length===0){i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(e.hits),c=document.querySelector(".gallery").lastElementChild,h=c.getBoundingClientRect().height,y=Math.ceil(e.totalHits/g),a>=y?(i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p()):q()}catch(e){i.info({position:"topRight",message:e.message})}finally{S()}});O.addEventListener("click",async()=>{p(),R(),a++;try{let r=await b(f,a);w(r.hits),c=document.querySelector(".gallery").lastElementChild,h=c.getBoundingClientRect().height,window.scrollBy({top:h*2,behavior:"smooth"}),a>=y?i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):q()}catch(r){i.info({position:"topRight",message:r.message})}finally{S()}});
//# sourceMappingURL=index.js.map
