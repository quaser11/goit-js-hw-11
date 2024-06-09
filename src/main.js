import './css/main.css'
import 'modern-normalize'
import pixabayGetData from "./js/pixabay-api.js";
import renderFunction from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()

  if (form.firstElementChild.value === '') {
    return
  }

  if (gallery.innerHTML !== '') {
    gallery.innerHTML = '';
  }

  form.firstElementChild.style.borderColor = '#4E75FF';
  loader.classList.remove('is-hidden');

  setTimeout(() => {
    form.firstElementChild.style.borderColor = '#808080'
  }, 3000)


  pixabayGetData(form.firstElementChild.value).then(response => {
    if (response.length === 0) {
      iziToast.show({
        color: 'red',
        title: "Sorry, there are no images matching your search query. Please try again!"
      })
      loader.classList.add('is-hidden');
      return
    }

    let toAppend = response.map((item) => {
      return renderFunction(item)
    }).join('')

    gallery.insertAdjacentHTML('beforeend', toAppend);
    loader.classList.add('is-hidden');
    const swiper = new SimpleLightbox('.gallery a', {})
    swiper.refresh()
  })
}