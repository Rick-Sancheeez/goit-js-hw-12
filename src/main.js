import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImagesByQuery, per_page} from "./js/pixabay-api.js";
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions.js";


let form = document.querySelector(".form");
let loadButton = document.querySelector(".load-button");

let query;

let page;
let totalPages;

let galleryItem;
let rect;

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    clearGallery();
    hideLoadMoreButton();

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

    page = 1;
    try {
        let data = await getImagesByQuery(query, page);

        if(data.hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }

        createGallery(data.hits);
        galleryItem = document.querySelector(".gallery").lastElementChild;
        rect = galleryItem.getBoundingClientRect().height;

        totalPages = Math.ceil(data.totalHits / per_page);

        if(page >= totalPages){
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });

            hideLoadMoreButton();
        } else {
            showLoadMoreButton();
            //page++;
        }

    } catch(error) {
        iziToast.info({
            position: 'topRight',
            message: error.message,
        });
    } finally {
        hideLoader();
    }
  
});

loadButton.addEventListener("click", async () => {
    hideLoadMoreButton();
    showLoader();

    page++;
    try {
        let data = await getImagesByQuery(query, page);

        createGallery(data.hits);

        galleryItem = document.querySelector(".gallery").lastElementChild;
        rect = galleryItem.getBoundingClientRect().height;
        
        window.scrollBy({
            top: rect * 2,
            behavior: "smooth",
        });

        if(page >= totalPages){
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            //page++;
            showLoadMoreButton();
        }
    
    } catch(error) {
        iziToast.info({
            position: 'topRight',
            message: error.message,
        });
    } finally {
        hideLoader();
    }
});