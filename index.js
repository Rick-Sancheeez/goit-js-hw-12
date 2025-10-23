import{a as S,i as a,S as q}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const P="52733365-810bb5faaf6ec9d90304400a7";let h=15;async function g(r,o){const e=new URLSearchParams({key:P,q:r,page:o,per_page:h,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await S.get(`https://pixabay.com/api/?${e}`)).data}catch(l){return a.info({position:"topRight",message:l.message}),{hits:[],totalHits:0}}}let d,c=document.querySelector(".loader");const b=document.querySelector(".gallery");function L(r){let o=r.map(e=>`<li>

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

        </li>`).join("");b.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){b.innerHTML=""}function v(){c&&(c.style.display="block")}function w(){c&&(c.style.display="none")}let f=document.querySelector(".form"),O=document.querySelector(".load-button"),n=document.querySelector(".div-for-button"),u,i,y,m,R;f.addEventListener("submit",async r=>{r.preventDefault(),$(),n.style.display="none",i=1;let o=r.target.elements["search-text"].value.trim();if(o===""){a.error({position:"topRight",message:"The field must not be empty"}),f.reset();return}v(),u=o.split(" ").join("+");try{let e=await g(u,i);if(e.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e.hits),y=Math.ceil(e.totalHits/h),m=document.querySelector(".gallery").lastElementChild,R=m.getBoundingClientRect().height,i>=y?(a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none"):(n.style.display="block",i++)}catch(e){a.info({position:"topRight",message:e.message})}finally{w()}});O.addEventListener("click",async()=>{n.style.display="none",v();try{let r=await g(u,i);L(r.hits),window.scrollBy({top:R*2,behavior:"smooth"}),(i=y)?(a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none"):(i++,n.style.display="block")}catch(r){a.info({position:"topRight",message:r.message})}finally{w()}});
//# sourceMappingURL=index.js.map
