import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



let lightbox;
let loader = document.querySelector(".loader");


let divButton = document.querySelector(".div-for-button");

const gallery = document.querySelector('.gallery');

export function createGallery(images) {

    let markUp = images.map(image => { 
        return `<li>

            <div class="container-image">
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </a>
            </div>

            <div class="container-description">
                <ul class="image-description">
                    <li> <span>Likes</span> <span>${image.likes}</span> </li>
                    <li> <span>Views</span> <span>${image.views}</span> </li>
                    <li> <span>Comments</span> <span>${image.comments}</span> </li>
                    <li><span>Downloads</span> <span>${image.downloads}</span> </li>
                </ul>
            </div>

        </li>`;
    }).join("");

    gallery.insertAdjacentHTML('beforeend', markUp);

    if(lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    }
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    if (loader) loader.style.display = "block";
}

export function hideLoader() {
    if (loader) loader.style.display = "none";
}

export function showLoadMoreButton() {
    divButton.style.display = "block";
}

export function hideLoadMoreButton() {
    divButton.style.display = "none"
}