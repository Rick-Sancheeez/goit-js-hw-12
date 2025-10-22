import{a as S,i as a,S as q}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const R="52733365-810bb5faaf6ec9d90304400a7";let g=15;async function h(r,s){const e=new URLSearchParams({key:R,q:r,page:s,per_page:g,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await S.get(`https://pixabay.com/api/?${e}`)).data}catch(n){return a.info({position:"topRight",message:n.message}),{hits:[],totalHits:0}}}let u,l=document.querySelector(".loader");const b=document.querySelector(".gallery");function L(r){let s=r.map(e=>`<li>

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

        </li>`).join("");b.insertAdjacentHTML("beforeend",s),u?u.refresh():u=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function P(){b.innerHTML=""}function $(){l&&(l.style.display="block")}function c(){l&&(l.style.display="none")}let f=document.querySelector(".form"),O=document.querySelector(".load-button"),y=document.querySelector(".div-for-button"),d,i,v,m,w;f.addEventListener("submit",async r=>{r.preventDefault(),P(),y.style.display="none",i=1;let s=r.target.elements["search-text"].value.trim();if(s===""){a.error({position:"topRight",message:"The field must not be empty"}),f.reset();return}$(),d=s.split(" ").join("+");try{let e=await h(d,i);if(c(),e.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e.hits),v=Math.ceil(e.totalHits/g),i++,y.style.display="block",m=document.querySelector(".gallery").lastElementChild,w=m.getBoundingClientRect().height}catch(e){c(),a.info({position:"topRight",message:e.message})}});O.addEventListener("click",async()=>{try{let r=await h(d,i);if(c(),i>v){a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}L(r.hits),window.scrollBy({top:w*2,behavior:"smooth"}),i++}catch(r){c(),a.info({position:"topRight",message:r.message})}});
//# sourceMappingURL=index.js.map
