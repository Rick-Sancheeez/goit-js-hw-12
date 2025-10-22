import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImagesByQuery, per_page} from "./js/pixabay-api.js";
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions.js";


let form = document.querySelector(".form");
let loadButton = document.querySelector(".load-button");
let divButton = document.querySelector(".div-for-button");

let query;

let page;
let totalPages;

let galleryItem;
let rect;

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    clearGallery();
    divButton.style.display = "none";
    page = 1;

    let userQuery = event.target.elements["search-text"].value.trim();
    if(userQuery === "") {
        iziToast.error({
            position: 'topRight',
            message: 'The field must not be empty',
        });
        form.reset();
        return;
    }

    showLoader();
    query = userQuery.split(" ").join("+");

    try {
        let data = await getImagesByQuery(query, page);
        hideLoader();

        if(data.hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }

        createGallery(data.hits);
        
        totalPages = Math.ceil(data.totalHits / per_page);
        page++;

        divButton.style.display = "block";

        galleryItem = document.querySelector(".gallery").lastElementChild;
        rect = galleryItem.getBoundingClientRect().height;

    } catch(error) {
        hideLoader();
        iziToast.info({
            position: 'topRight',
            message: error.message,
        });
    }
  
});

loadButton.addEventListener("click", async () => {
    try {
        let data = await getImagesByQuery(query, page);
        hideLoader();

        if(page > totalPages){
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
            return;
        }

        createGallery(data.hits);
        
        window.scrollBy({
            top: rect * 2,
            behavior: "smooth",
        });
        
        page++;
    
    } catch(error) {
        hideLoader();
        iziToast.info({
            position: 'topRight',
            message: error.message,
        });
    }
});