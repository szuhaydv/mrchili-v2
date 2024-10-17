<script>
    import { productInfo } from "../dataService";
    import ProductCard from "./ProductCard.svelte";

    let showCategoryFilter = false;
    let showSpicynessFilter = false;

    function toggle(filterNo) {
        if (filterNo == 0) {
            showCategoryFilter = !showCategoryFilter;
        } else if (filterNo == 1) {
            showSpicynessFilter = !showSpicynessFilter;
        }
    }
</script>

<main class="relative mx-8 lg:mx-12 h-[80vh]">
    <img
        src="/logo.png"
        class="w-40 h-40 absolute left-[140px] top-[-3.5rem]"
        alt="Mr. Chili Logo"
    />
    <div class="banner w-full h-[200vh] bg-white rounded-[3rem]"></div>
    <div class="absolute top-0 left-0 w-full">
        <h1 class="opacity-0 absolute">Products Page</h1>
        <div class="flex justify-center gap-8 mt-12 w-full">
            <div class="relative h-fit">
                <button
                    class="pl-4 pr-8 py-2 flex items-center border-2 border-[#E6EBF0] rounded-2xl"
                    on:click={() => toggle(0)}
                >
                    <img
                        class="mr-3"
                        src="./category_filter.svg"
                        alt="Category filter"
                    />
                    <span class="text-lg">Kategória</span>
                    <span class="ml-8 opacity-[36%]">▼</span>
                </button>
                <ul
                    class="absolute rounded-2xl border-2 border-[#E6EBF0] w-full mt-2 text-md p-4 flex flex-col gap-2 bg-white"
                    class:hidden={!showCategoryFilter}
                >
                    {#each productInfo as category}
                        <li class="flex">
                            <input
                                type="checkbox"
                                class="mr-2 w-5 h-5 cursor-pointer"
                            />
                            {category.title}
                        </li>
                    {/each}
                </ul>
            </div>
            <div>
                <button
                    class="pl-4 pr-8 py-2 flex items-center border-2 border-[#E6EBF0] rounded-2xl"
                    on:click={() => toggle(1)}
                >
                    <img
                        class="mr-3"
                        src="./spice_filter.svg"
                        alt="Spyciness filter"
                    />
                    <span class="text-lg">Csípősség</span>
                    <span class="ml-8 opacity-[36%]">▼</span>
                </button>
                <ul></ul>
            </div>
        </div>
        {#each productInfo as category}
            <h2
                class="font-knewave ml-8 text-lg border-b-[#E6EBF0] border-b-2 pb-4 pl-6 pr-16 w-max"
            >
                {category.title}
            </h2>
            <ul class="grid grid-cols-4 mt-4 place-items-center">
                {#each category.products as product}
                    <li>
                        <ProductCard {product} />
                    </li>
                {/each}
            </ul>
        {/each}
    </div>
</main>

<style>
    .banner {
        -webkit-mask-image: radial-gradient(
            circle at 220px 20px,
            transparent 84px,
            black 85px
        );
        mask-image: radial-gradient(
            circle at 220px 20px,
            transparent 84px,
            black 85px
        );
    }
</style>
