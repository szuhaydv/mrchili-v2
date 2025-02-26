<script>
    import { productInfo, categories } from "../dataService";
    import ProductCard from "./ProductCard.svelte";

    let showCategoryFilter = false;
    let showSpicinessFilter = false;

    function toggle(filterNo) {
        if (filterNo == 0) {
            showCategoryFilter = !showCategoryFilter;
        } else if (filterNo == 1) {
            showSpicinessFilter = !showSpicinessFilter;
        }
    }

    function selectCategory(id) {
        if (selectedCategories.includes(id)) {
            selectedCategories = selectedCategories.filter((el) => el != id);
        } else {
            selectedCategories = [...selectedCategories, id];
        }
    }

    function selectSpiciness(id) {
        if (selectedSpiceLevels.includes(id)) {
            selectedSpiceLevels = selectedSpiceLevels.filter((el) => el != id);
        } else {
            selectedSpiceLevels = [...selectedSpiceLevels, id];
        }
    }

    let selectedCategories = [];
    let selectedSpiceLevels = [];

    let filteredProducts = [];

    function filterProducts(selectedCategories, selectedSpiceLevels) {
        filteredProducts = productInfo.filter((product) => {
            const matchesCategory = selectedCategories.length
                ? selectedCategories.includes(product.category)
                : true;
            const matchesSpiceLevel = selectedSpiceLevels.length
                ? selectedSpiceLevels.includes(product.spiceLevel)
                : true;

            return matchesCategory && matchesSpiceLevel;
        });
    }

    $: filterProducts(selectedCategories, selectedSpiceLevels);
</script>

<svelte:head>
    <title>Termékeink</title>
    <meta
        name="description"
        content="Fedezze fel a Mr. Chili márka egyedi chiliszószaiból és chutney-kből álló választékát. A Végítélet erőteljes ízvilágától a Gangsteper édes-csípős harmóniájáig, minden termékünk különleges ízélményt nyújt."
    />
</svelte:head>

<main
    class="relative mx-2 xxs:mx-8 mb-8 lg:mx-12 bg-white rounded-[3rem] banner pt-20 md:pt-32 xxl:pt-12"
>
    <h1 class="opacity-0 absolute">Products Page</h1>
    <div
        class="flex flex-col items-center md:flex-row justify-center gap-8 w-full"
    >
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
                class="absolute rounded-2xl border-2 border-[#E6EBF0] w-full mt-2 text-md p-4 flex flex-col gap-4 bg-white z-10"
                class:hidden={!showCategoryFilter}
            >
                {#each categories as category, index}
                    <li class="flex items-center">
                        <input
                            on:click={() => selectCategory(index)}
                            type="checkbox"
                            class="mr-2 w-5 h-5 cursor-pointer"
                        />
                        {category}
                    </li>
                {/each}
            </ul>
        </div>
        <div class="relative h-fit">
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
            <ul
                class="absolute w-full rounded-2xl border-2 border-[#E6EBF0] mt-2 text-md p-4 flex flex-col gap-4 bg-white z-10"
                class:hidden={!showSpicinessFilter}
            >
                {#each Array.from({ length: 6 }, (_, i) => i) as spiceLevel, index}
                    <li class="flex gap-2 items-center m-auto">
                        <input
                            on:click={() => selectSpiciness(index)}
                            type="checkbox"
                            class="mr-2 w-5 h-5 cursor-pointer"
                        />
                        {#each Array.from({ length: 5 }, (_, i) => i) as fire}
                            <img
                                src="/fire_colored.png"
                                class="h-8 w-8"
                                alt="Fire icon"
                                class:opacity-20={fire >= spiceLevel}
                                class:grayscale={fire >= spiceLevel}
                            />
                        {/each}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    {#each categories as category, categoryID}
        <h2
            id={category.toLowerCase()}
            class="font-knewave my-8 ml-8 text-lg border-b-[#E6EBF0] border-b-2 pb-4 pl-6 pr-16 w-max"
        >
            {category}
        </h2>
        <ul
            class="grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] xxs:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] mt-4 place-items-center gap-16 px-0 xxs:px-2 xxsm:px-12 md:px-24"
        >
            {#each filteredProducts.filter((product) => product.category == categoryID) as product}
                <li>
                    <ProductCard {product} />
                </li>
            {/each}
        </ul>
        {#if category == "BBQ"}
            <img
                class="w-[25rem] max-w-[90%]"
                src="/coming_soon.png"
                alt="coming soon"
            />
        {/if}
    {/each}
</main>
