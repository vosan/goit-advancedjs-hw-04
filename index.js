import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CZveusGh.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`https://pixabay.com/api/`,a=`56352942-a4df77b9d744e7d73d31e642f`;async function o(e,t){return(await n.get(i,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:t,per_page:15}})).data}var s=e(t(),1),c={form:document.querySelector(`.form`),gallery:document.querySelector(`.gallery`),loader:document.querySelector(`.loader`),loadMoreBtn:document.querySelector(`.load-more`)},l=new s.default.default(`.gallery a`,{captionsData:`alt`,captionDelay:250});function u(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
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
      `).join(``);c.gallery.insertAdjacentHTML(`beforeend`,t),l.refresh()}function d(){c.gallery.innerHTML=``}function f(e){c.loader.classList.toggle(`is-hidden`,!e)}function p(e){c.loadMoreBtn.classList.toggle(`is-hidden`,!e)}var m=e(r(),1);function h(e){m.default.error({title:`Error`,message:e,position:`topRight`,icon:`ico-error`})}function g(e){m.default.info({title:`Info`,message:e,position:`topRight`})}var _={query:``,page:1,totalHits:0,loadedImages:0};c.form.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();if(!t){d(),p(!1),h(`Please enter a search query!`);return}_.query=t,_.page=1,_.loadedImages=0,d(),p(!1),await v()}),c.loadMoreBtn.addEventListener(`click`,async()=>{_.page+=1,p(!1),await v(!0)});async function v(e=!1){f(!0);try{let t=await o(_.query,_.page);if(t.hits.length===0){h(`Sorry, there are no images matching your search query. Please try again!`);return}_.page===1&&(_.totalHits=t.totalHits),u(t.hits),_.loadedImages+=t.hits.length,e&&y(),_.loadedImages>=_.totalHits?(p(!1),e&&g(`We're sorry, but you've reached the end of search results.`)):p(!0)}catch{h(`Something went wrong. Please try again later.`)}finally{f(!1)}}function y(){let e=document.querySelector(`.gallery-item`);if(!e)return;let t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:`smooth`})}
//# sourceMappingURL=index.js.map