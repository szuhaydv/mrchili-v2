<script context="module">
    import { page } from "$app/stores";
    import { productInfo } from "../../dataService";
</script>

<script>
    let id = $page.params.slug;
    let product = productInfo.find((product) => product.id == id);
</script>

<main
    class="mx-8 lg:mx-12 h-[90vh] banner bg-white rounded-[3rem] flex justify-evenly mb-4 pt-32"
>
    {#if product}
        <div class="w-[40rem] h-[40rem] bg-[#E6EBF0]">
            <img
                class="w-full h-full object-contain"
                src={product.imgPath}
                alt={product.imgPath}
            />
        </div>
        <div class="w-[40rem] flex flex-col gap-6">
            <h1 class="text-xl leading-tight">{product.title}</h1>
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
            <p class="text-lg"><i>{product.shortDescription}</i></p>
            <p class="text-md"><b>Összetevők:</b> {product.ingredients}</p>
            <p class="text-md font-light">{product.longDescription}</p>
            <span class="text-[#ff0000] text-lg">{product.price} Ft</span>
            <div class="flex h-[4.5rem] w-[32rem] shadow mx-5">
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
        </div>
    {/if}
</main>

<style>
    .banner {
        -webkit-mask-image: radial-gradient(
            circle at 13.75rem 1.25rem,
            transparent 5.25rem,
            black 5.3125rem
        );
        mask-image: radial-gradient(
            circle at 13.75rem 1.25rem,
            transparent 5.25rem,
            black 5.3125rem
        );
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
