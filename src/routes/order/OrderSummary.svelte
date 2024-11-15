<script>
    import { userCart } from "../cartService";

    export let productPrice;

    export let deliveryPrice = -1;

    function handleRemove(product) {
        userCart.update((cart) => {
            const index = cart.findIndex(
                (product) => product.productType.id == product.productType.id,
            );
            cart.splice(index, 1);
            return cart;
        });
    }
</script>

<section
    class="w-[18rem] xxs:w-[19.5rem] mx-auto lg:mx-0 lg:w-[30%] mb-16 font-inter"
>
    <!--<h2
        class="bg-[#43aecfd9] w-full py-4 text-white font-semibold text-md text-center mb-8"
    >
        Kosár tartalma
    </h2>-->
    <ul>
        {#each $userCart as product, index}
            <li class="w-full">
                <div class="flex gap-4 w-full">
                    <img
                        class="w-20 h-20 border-2 border-gray-200 object-contain"
                        src={product.productType.imgPath}
                        alt={product.productType.imgPath}
                    />
                    <div class="flex flex-col gap-4 w-full">
                        <div class="w-full flex justify-between">
                            <h3 class="text-md">{product.productType.title}</h3>
                            <button
                                class="mr-4"
                                on:click={() => handleRemove(product)}>✕</button
                            >
                        </div>
                        <div class="flex gap-4 items-center">
                            <input
                                type="number"
                                bind:value={product.productCount}
                                class="border-gray-200 w-20 rounded-lg"
                                on:change={(e) => {
                                    if (e.target.value < 1) {
                                        product.productCount = 1;
                                    }
                                }}
                            />
                            x {product.productType.price} Ft
                        </div>
                    </div>
                </div>
                {#if index != $userCart.length - 1}
                    <hr class="h-px my-4 bg-gray-200" />
                {/if}
            </li>
        {/each}
        {#if $userCart.length}
            <li>
                <hr class="h-px my-4 bg-gray-200" />
                <p class="w-full text-end font-semibold">
                    Termékek ára: <span class="font-normal"
                        >{productPrice} Ft</span
                    >
                    <br />
                    Szállítási díj:
                    <span class="font-normal">
                        {#if deliveryPrice == -1}
                            ---
                        {:else}
                            {deliveryPrice} Ft
                        {/if}
                    </span>
                </p>

                <hr class="h-px my-4 bg-gray-200" />
                <p class="w-full text-end font-semibold text-md">
                    Végösszeg: <span class="font-normal"
                        >{deliveryPrice != -1
                            ? productPrice + deliveryPrice
                            : productPrice} Ft</span
                    >
                </p>
            </li>
        {:else}
            <p class="text-[#9D9D9D] mb-4 text-center">Az Ön kosara üres</p>
        {/if}
    </ul>
</section>
