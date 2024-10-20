<script>
    import { goto } from "$app/navigation";

    export let product;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<article
    class="w-80 rounded-lg shadow h-[46.25rem]"
    on:click={() => goto("./products/" + product.id)}
    tabindex="0"
    on:keydown={(event) =>
        event.key === "Enter" ? goto("./" + product.id) : ""}
    role="button"
>
    <div class="bg-[#E6EBF0] rounded-lg h-[25rem] relative">
        <img
            class="scale-150 rotate-12 absolute left-[15%] top-[-10%]"
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
    <footer class="flex flex-col gap-4 pt-4">
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
        <div class="flex h-[4.5rem] shadow mx-5 mt-auto">
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
    footer {
        height: 36%;
    }
</style>
