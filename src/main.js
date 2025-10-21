import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions.js";


let form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();

    clearGallery();
    
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
    let query = userQuery.split(" ").join("+");

    getImagesByQuery(query)
    .then(data => {
        hideLoader();

        if(data.hits.length === 0) {
            return;
        }

        createGallery(data.hits);
    })
    .catch(() =>{
        hideLoader();

        iziToast.error({
            position: 'topRight',
            message: 'Something went wrong. Please try again later.',
        });

    })
    .finally(() => {
        form.reset();
    });
    
});