import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const keyAPI =  "52733365-810bb5faaf6ec9d90304400a7";

export let per_page = 15;

export async function getImagesByQuery(query, page) {

    const searchParams = new URLSearchParams({
        key: keyAPI,
        q: query,
        page: page,
        per_page: per_page,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    
    try {
        let response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
        return response.data;
    } catch(error) {
        iziToast.info({
            position: 'topRight',
            message: error.message,
        });
        return {hits: [],
                totalHits: 0,
            };
    }
    
}