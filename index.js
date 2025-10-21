import{a as d,i as n,S as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h="52733365-810bb5faaf6ec9d90304400a7";function y(i){const s=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return d.get(`https://pixabay.com/api/?${s}`).then(e=>(e.data.hits.length===0&&n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),e.data)).catch(e=>(n.info({position:"topRight",message:e.message}),{hits:[]}))}let c,a=document.querySelector(".loader");const f=document.querySelector(".gallery");function g(i){let s=i.map(e=>`<li>

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

        </li>`).join("");f.innerHTML=s,c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){f.innerHTML=""}function b(){a&&(a.style.display="block")}function u(){a&&(a.style.display="none")}let p=document.querySelector(".form");p.addEventListener("submit",i=>{i.preventDefault(),L();let s=i.target.elements["search-text"].value.trim();if(s===""){n.error({position:"topRight",message:"The field must not be empty"}),p.reset();return}b();let e=s.split(" ").join("+");y(e).then(o=>{u(),o.hits.length!==0&&g(o.hits)}).catch(()=>{u(),n.error({position:"topRight",message:"Something went wrong. Please try again later."})}).finally(()=>{p.reset()})});
//# sourceMappingURL=index.js.map
