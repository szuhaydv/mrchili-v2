<script>
    import { goto } from "$app/navigation";
    import { userCart, addToCart, BuyProduct } from "../cartService";

    export let product;

    function enforceValidity(e) {
        const input = e.target;
        if (input.value < 1) {
            input.value = 1;
        } else if (input.value > 10) {
            input.value = 10;
        }
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<article
    class="w-72 md:w-80 rounded-lg shadow-lg h-[46.25rem] flex flex-col"
    on:click={() => goto("./products/" + product.id)}
    tabindex="0"
    on:keydown={(event) =>
        event.key === "Enter" ? goto("./products/" + product.id) : ""}
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
            class="text-md mt-2 font-semibold leading-normal text-center border-b-2 border-b-[#E6EBF0] mx-3"
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
        <p class="mx-8 min-h-[3rem] text-sm text-center">
            {product.shortDescription}
        </p>
        <h3 class="text-md font-bold text-center leading-tight">100ml</h3>
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
                on:keydown|stopPropagation={(e) =>
                    e.key == "Enter" ? enforceValidity(e) : ""}
                on:blur={enforceValidity}
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
