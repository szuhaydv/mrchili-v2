<script>
    export let product;
</script>

<article class="w-80 rounded-lg shadow overflow-hidden">
    <div class="bg-[#E6EBF0] h-[25rem]">
        <img src="" alt="" />
    </div>
    <header>
        <h2
            class="text-lg font-semibold leading-normal text-center border-b-2 border-b-[#E6EBF0] mx-3"
        >
            {product.title}
        </h2>
    </header>
    <footer>
        <h3
            class="text-lg font-extralight text-center text-[#ff0000] leading-normal"
        >
            {product.price} Ft
        </h3>
        <ul>
            {#each product.spiceLevel as spiceLevel}
                <li>Something</li>
            {/each}
        </ul>
        <p class="mx-8">{product.description}</p>
        <div class="flex h-[4.5rem] shadow mx-5 mb-8 mt-4">
            <input
                class="flex stroke-none w-[4.5rem] text-center bg-[#E6EBF0]"
                type="number"
                value="1"
                style="-webkit-appearance: none;"
            />
            <button class="bg-[#d00000] text-white font-bold text-md w-full"
                >Kosárhoz adom</button
            >
        </div>
    </footer>
</article>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
