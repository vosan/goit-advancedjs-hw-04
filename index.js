import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CZveusGh.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`https://pixabay.com/api/`,a=`56352942-a4df77b9d744e7d73d31e642f`;async function o(e,t){return(await n.get(i,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:t,per_page:15}})).data}var s=e(t(),1),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader`),u=document.querySelector(`.load-more`),d=new s.default.default(`.gallery a`,{captionsData:`alt`,captionDelay:250});function f(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${e}" alt="${n}" />
          </a>
          <div class="image-info">
            <div class="image-info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${r||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${i||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${a||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${o||0}</span>
            </div>
          </div>
        </li>
      `).join(``);c.insertAdjacentHTML(`beforeend`,t),d.refresh()}function p(){c.innerHTML=``}function m(){l.classList.remove(`is-hidden`)}function h(){l.classList.add(`is-hidden`)}function g(){u.classList.remove(`is-hidden`)}function _(){u.classList.add(`is-hidden`)}var v=e(r(),1);function y(e){v.default.error({title:`Error`,message:e,position:`topRight`,icon:`ico-error`})}function b(e){v.default.info({title:`Info`,message:e,position:`topRight`})}var x=document.querySelector(`.form`),S=document.querySelector(`.load-more`),C=``,w=1,T=0,E=0;x.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();if(!t){p(),_(),y(`Please enter a search query!`);return}C=t,w=1,T=0,E=0,p(),_();try{let e=await o(C,w);if(e.hits.length===0){y(`Sorry, there are no images matching your search query. Please try again!`);return}T=e.totalHits,f(e.hits),E+=e.hits.length,E<T&&g()}catch{y(`Something went wrong. Please try again later.`)}}),S.addEventListener(`click`,async()=>{w+=1,_(),m();try{let e=await o(C,w);f(e.hits),E+=e.hits.length,D(),E>=T?(_(),b(`We're sorry, but you've reached the end of search results.`)):g()}catch{y(`Something went wrong. Please try again later.`)}finally{h()}});function D(){let e=document.querySelector(`.gallery-item`);if(!e)return;let t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:`smooth`})}
//# sourceMappingURL=index.js.map