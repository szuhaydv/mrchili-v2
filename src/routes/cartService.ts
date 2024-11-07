import { Product } from "./dataService"
import { writable } from "svelte/store"

export class BuyProduct {
	constructor(
		public readonly productType: Product = new Product(),
		public productCount = 0
	) { }
}

export const userCart = writable<BuyProduct[]>([])

export function addToCart(event: MouseEvent, product: Product) {
	const input = (event.currentTarget as HTMLElement)?.previousElementSibling as HTMLInputElement;
	const quantity = input.value;
	userCart.update((cart) => {
		const index = cart.findIndex(
			(el) => el.productType.id == product.id,
		);
		if (index == -1) {
			const newProduct = new BuyProduct(product, Number(quantity));
			return [...cart, newProduct];
		} else {
			const currentCount = Number(cart[index].productCount);
			cart[index].productCount = currentCount + Number(quantity);
			return cart;
		}
	});
}
