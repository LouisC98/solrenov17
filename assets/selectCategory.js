import { createApp } from "vue";
import axios from "axios";

createApp({
    compilerOptions: {
        delimiters: ["${", "}$"]
    },
    data() {
        return {
            categories: null,
            photos: null
        }
    },
    mounted() {
        axios.get('/galerie/all')
        .then((res) => {
            this.photos = JSON.parse(res.data)
        });
        axios.get('/categories')
        .then((res) => {
            this.categories = JSON.parse(res.data)
        }); 
    },
    methods: {
        searchByCategory(categoryId) {
            axios.get(`/galerie/${categoryId}`)
            .then((res) => {
                this.photos = JSON.parse(res.data)
            })
        },
        findAll() {
            axios.get('/galerie/all')
            .then((res) => {
            this.photos = JSON.parse(res.data)
            });
        }
    }
}).mount('#selectCategory')