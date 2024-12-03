import {api} from "~/API/index.js";
import {defineStore} from "pinia";

export const useCountryStore = defineStore('country',() =>{
    const countries = ref ([]);


    const fetchCountries = async  () => {
        const res = await api.get('/countries');
        countries.value = res.data.countries;
    }
    fetchCountries();
    return{
        countries,
    }
});