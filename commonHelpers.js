import{a as d,i as _,S as m}from"./assets/vendor-d32d4406.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const f="44168245-b85e0b025332670cfa54a187d",u="https://pixabay.com/api/";function p(t){const r={key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(`${u}`,{params:r}).then(s=>s.data.hits)}function y(t){return`
    <div class="gallery__item">
        <div class="gallery__item__image">
        <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"></a>
        </div>
      <div class="gallery__item__info">
        <div class="gallery__item__info__item">
          <p>Likes</p>
          <span class="gallery__item__info__item__count">${t.likes}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Views</p>
          <span class="gallery__item__info__item__count">${t.views}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Comments</p>
          <span class="gallery__item__info__item__count">${t.comments}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Downloads</p>
          <span class="gallery__item__info__item__count">${t.downloads}</span>
        </div>
      </div>
    </div>
`}const n=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");n.addEventListener("submit",g);function g(t){t.preventDefault(),n.firstElementChild.value!==""&&(l.innerHTML!==""&&(l.innerHTML=""),n.firstElementChild.style.borderColor="#4E75FF",c.classList.remove("is-hidden"),setTimeout(()=>{n.firstElementChild.style.borderColor="#808080"},3e3),p(n.firstElementChild.value).then(r=>{if(r.length===0){_.show({color:"red",title:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.add("is-hidden");return}let s=r.map(e=>y(e)).join("");l.insertAdjacentHTML("beforeend",s),c.classList.add("is-hidden"),new m(".gallery a",{}).refresh()}))}
//# sourceMappingURL=commonHelpers.js.map
