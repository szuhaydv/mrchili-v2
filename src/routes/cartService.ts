import { Product } from "./dataService"
import { writable } from "svelte/store"

export class BuyProduct {
	constructor(
		public readonly productType: Product = new Product(),
		public readonly productCount = 0
	) { }
}

export const userCart = writable<BuyProduct[]>([])
