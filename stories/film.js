import {defineStore} from "pinia";
import {api} from "~/API/index.js";


export const useFilmStore = defineStore('film', () => {
    const films = ref([]);
    const isLoading = ref(false);
const params = ref({
    page:1,
    size:10,
    sortBy:'name',
    sortDir:'asc',
    category:null,
    country:null,
});

const addCategoryToParams = (category) =>{
    params.value.category = category;

}


    const addCountryToParams = ( country) =>{
        params.value.country =  country;

    }

    const addSortToParams = (  sort) =>{
        params.value.sortBy=   sort;

    }

    const fetchFilms = async () => {
        isLoading.value = true;
        const res = await api.get('/films', {
            params:params.value,
        });
        films.value = res.data.films;
        isLoading.value = false;
    }
    fetchFilms();
    return {
        films,
        isLoading,
        addCountryToParams,
        addCategoryToParams,
        addSortToParams,
        fetchFilms,
    }
});