export default function renderFunction(obj) {
  return `
    <div class="gallery__item">
        <div class="gallery__item__image">
        <a href="${obj.largeImageURL}"><img src="${obj.webformatURL}" alt="${obj.tags}" title="${obj.tags}"></a>
        </div>
      <div class="gallery__item__info">
        <div class="gallery__item__info__item">
          <p>Likes</p>
          <span class="gallery__item__info__item__count">${obj.likes}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Views</p>
          <span class="gallery__item__info__item__count">${obj.views}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Comments</p>
          <span class="gallery__item__info__item__count">${obj.comments}</span>
        </div>
        <div class="gallery__item__info__item">
          <p>Downloads</p>
          <span class="gallery__item__info__item__count">${obj.downloads}</span>
        </div>
      </div>
    </div>
`
}