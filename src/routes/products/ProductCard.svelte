<script>
    import { goto } from "$app/navigation";
    import { userCart, BuyProduct } from "../cartService";

    export let product;

    function addToCart(event, product) {
        const input = event.currentTarget.previousElementSibling;
        const quantity = input.value;
        userCart.update((cart) => {
            const index = cart.findIndex(
                (el) => el.productType.id == product.id,
            );
            if (index == -1) {
                const newProduct = new BuyProduct(product, quantity);
                return [...cart, newProduct];
            } else {
                const currentCount = Number(cart[index].productCount);
                cart[index].productCount = currentCount + Number(quantity);
                return cart;
            }
        });
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<article
    class="w-72 md:w-80 rounded-lg shadow-lg h-[46.25rem] flex flex-col"
    on:click={() => goto("./products/" + product.id)}
    tabindex="0"
    on:keydown={(event) =>
        event.key === "Enter" ? goto("./" + product.id) : ""}
    role="button"
>
    <div class="bg-[#E6EBF0] rounded-lg h-[25rem] relative">
        <img
            class="h-full rotate-12 absolute left-1/2 -translate-x-1/2 top-[-10%]"
            src={product.imgPath}
            alt={product.imgPath}
        />
    </div>
    <header>
        <h2
            class="text-lg font-semibold leading-normal text-center border-b-2 border-b-[#E6EBF0] mx-3"
        >
            {product.title}
        </h2>
    </header>
    <footer class="flex flex-col flex-1 gap-4 pt-4">
        <ul class="flex justify-center">
            {#each Array.from({ length: 5 }, (_, i) => i) as current}
                <li>
                    <img
                        src="/fire_colored.png"
                        alt="Fire icon"
                        class="w-8 h-8"
                        class:opacity-20={current >= product.spiceLevel}
                        class:grayscale={current >= product.spiceLevel}
                    />
                </li>
            {/each}
        </ul>
        <p class="mx-8 text-md text-center">{product.shortDescription}</p>
        <h3
            class="text-lg font-extralight text-center text-[#ff0000] leading-tight"
        >
            {product.price} Ft
        </h3>
        <div class="flex h-[4.5rem] shadow mx-5 mt-auto mb-8">
            <input
                class="flex stroke-none w-[4.5rem] text-center bg-[#E6EBF0]"
                type="number"
                value="1"
                max="10"
                min="1"
                on:click|stopPropagation
                style="-webkit-appearance: none;"
            />
            <button
                on:click|stopPropagation={(e) => addToCart(e, product)}
                class="bg-[#d00000] text-white font-bold text-md w-full"
                >Kosárhoz adom</button
            >
        </div>
    </footer>
</article>
