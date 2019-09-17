// Key Man:    462f1b39e02fa179e223e646e4d174d9
// Key Khai:   6b06a672bc04c5a1a63ec0a2d7600f79
// Search request: https://www.food2fork.com/api/search
// Recipe request: https://www.food2fork.com/api/get

//import axios from 'axios';
const axios = require('axios');

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '6b06a672bc04c5a1a63ec0a2d7600f79';
        const search = 'https://www.food2fork.com/api/search?';
        try {
            const res = await axios.get(`${proxy}${search}key=${key}&q=${this.query}`);
            this.results = res.data.recipes;
            console.log(this.results);
        } catch (err) {
            alert(err);
        }
    }
}