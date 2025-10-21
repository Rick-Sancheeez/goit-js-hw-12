import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const keyAPI =  "52733365-810bb5faaf6ec9d90304400a7";

export function getImagesByQuery(query) {

    const searchParams = new URLSearchParams({
        key: keyAPI,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    
    return axios.get(`https://pixabay.com/api/?${searchParams}`)
        .then(response => { 
            if(response.data.hits.length === 0){
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        return response.data;
    })
    .catch((error) => {

        iziToast.info({
            position: 'topRight',
            message: error.message,
        });

        return {hits: []};
    });
    
    
}