import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		// const proxy = 'https://crossorigin.me/';
		
		
		try {		
			// const res = await axios(`${proxy}https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${this.query}&number=20`);		
			const res = await axios(`${proxy}https://api.spoonacular.com/recipes/random?apiKey=${key}&number=30&tags=${this.query}`);		

			// const res = await axios(`${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}&number=20`);

			// this.result = res;
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch(error) {
			alert(error);
		}
		
	}
}
