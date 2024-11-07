<script context="module">
    import { page } from "$app/stores";
    import { productInfo } from "../../dataService";
    import { addToCart } from "../../cartService";
</script>

<script>
    let id = $page.params.slug;
    let product = productInfo.find((product) => product.id == id);
</script>

<main
    class="mx-2 xxs:mx-8 lg:mx-12 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] banner bg-white rounded-[3rem] flex flex-col md:flex-row justify-evenly mb-8 pt-16 md:pt-32"
>
    {#if product}
        <div
            class="aspect-square w-[80vw] self-center md:self-start h-[calc(100%-32rem)] bl:h-[calc(100%-24rem)] xl:h-[calc(100%-10rem)] md:ml-8 mb-8 bg-[#E6EBF0] max-w-[40rem]"
        >
            <img
                class="w-full h-full object-contain"
                src={product.imgPath}
                alt={product.imgPath}
            />
        </div>
        <div
            class="w-full overflow-hidden px-8 flex flex-col items-center md:items-start gap-6 mb-8"
        >
            <h1 class="text-sxl xxs:text-xl leading-tight">{product.title}</h1>
            <ul class="flex gap-4">
                {#each Array.from({ length: 5 }, (_, id) => id) as fire}
                    <img
                        class="w-8 h-8"
                        src="/fire_colored.png"
                        alt="Fire icon"
                        class:opacity-20={fire >= product.spiceLevel}
                        class:grayscale={fire >= product.spiceLevel}
                    />
                {/each}
            </ul>
            <p class="text-md lg:text-lg"><i>{product.shortDescription}</i></p>
            <p class="text-sm lg:text-md">
                <b>Összetevők:</b>
                {product.ingredients}
            </p>
            <p class="text-sm lg:text-md font-light">
                {product.longDescription}
            </p>
            <div class="flex xxsm:flex-row flex-col items-center gap-4">
                <span class="text-[#ff0000] text-lg">{product.price} Ft</span>
                <span class="text-gray-600">
                    Egységár: {product.price * 10} Ft/l
                </span>
            </div>
            <div
                class="flex h-[4.5rem] w-[16rem] xxs:w-[20rem] xl:w-[32rem] self-center shadow mx-5"
            >
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
                    class="bg-[#d00000] text-white font-bold text-md w-full"
                    on:click={(e) => addToCart(e, product)}
                    >Kosárhoz adom</button
                >
            </div>
        </div>
    {/if}
</main>
