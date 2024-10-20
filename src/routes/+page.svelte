<script lang="ts">
    import { cards, reviews, gyikElements, productInfo } from "./dataService"; // add chilis for map later
    import "animate.css";
    import CardComponent from "./CardComponent.svelte";
    //import ChiliCard from "./ChiliCard.svelte";
    import ReviewComponent from "./ReviewComponent.svelte";
    import AccordionComponent from "./AccordionComponent.svelte";
    // @ts-ignore
    import Carousel from "svelte-carousel";
    import { onMount } from "svelte";
    import { Steps } from "svelte-steps";
    import CallToAction from "./CallToAction.svelte";

    let currentOrderInfo = 0;

    function loopOrderInfo() {
        if (currentOrderInfo == 2) {
            currentOrderInfo = 0;
        } else {
            currentOrderInfo += 1;
        }
    }

    let mounted = false;
    let interval: NodeJS.Timeout;

    onMount(() => {
        mounted = true;
        interval = setInterval(() => loopOrderInfo(), 5000);

        return () => clearInterval(interval);
    });

    function stepOrderInfo(e: CustomEvent) {
        clearInterval(interval);
        interval = setInterval(() => loopOrderInfo(), 5000);
        currentOrderInfo = e.detail.current;
    }

    $: landingProducts = productInfo.filter((el) => el.showOnLanding);

    let carousel: typeof Carousel;
    let currentPageIndex = 0;

    let steps = [
        { text: "Rendelés feladása" },
        { text: "Utalás" },
        { text: "Kézbesítés" },
    ];

    function circleClick(index: number) {
        currentPageIndex = index;
        carousel.goTo(index);
    }

    function pageChangeEvent(event: any) {
        currentPageIndex = event.detail;
    }
</script>

<main
    class="mx-8 lg:mx-12 h-[80vh] banner bg bg-gradient-to-b from-[#fdc830] to-[#f37335] rounded-[3rem] flex justify-evenly mb-4"
>
    <div class="flex flex-col justify-center">
        <h1 class="text-xl font-semibold block leading-tight">
            Kézműves termékek <br /> széles választéka
        </h1>
        <h2 class="max-w-[40rem] text-lg font-light leading-tight">
            Kóstold meg a világ elsőszámú tiszalöki chilijét!
        </h2>
        <div class="ml-32 mt-8">
            <CallToAction destination="/products" text="Körülnézek →"
            ></CallToAction>
        </div>
    </div>
    <div class="w-1/4 bg-red-300 h-full flex items-center relative">
        <div
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full z-10"
        >
            {#if mounted}
                <Carousel bind:this={carousel} on:pageChange={pageChangeEvent}>
                    <button
                        class="w-20 h-20 rounded-3xl bg-[#E49482] border-[4px] border-white text-white text-lg my-auto"
                        slot="prev"
                        on:click={() => carousel.goToPrev()}
                    >
                        ❮
                    </button>
                    <button
                        class="w-20 h-20 rounded-3xl bg-[#E49482] border-[4px] border-white text-white text-lg my-auto"
                        slot="next"
                        on:click={() => carousel.goToNext()}
                    >
                        ❯
                    </button>
                    {#each landingProducts as product}
                        <div
                            class="flex justify-center h-[75vh] overflow-visible"
                        >
                            <img
                                class="w-full object-contain rotate-12 scale-[164%] translate-x-[10%] -translate-y-[10%]"
                                src={product.imgPath}
                                alt={product.imgPath}
                            />
                        </div>
                    {/each}
                    <div
                        slot="dots"
                        class="custom-dots flex items-center -translate-y-10"
                    >
                        {#each Array(landingProducts.length) as _, pageIndex (pageIndex)}
                            <button on:click={() => circleClick(pageIndex)}>
                                <div
                                    class="circle relative w-8 h-8 border-4 border-white rounded-full bg-transparent"
                                >
                                    {#if pageIndex == currentPageIndex}
                                        <div
                                            class="w-4 h-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                        ></div>
                                    {/if}
                                </div>
                            </button>
                            {#if pageIndex != landingProducts.length - 1}
                                <div class="mx-2 flex gap-2">
                                    {#each Array.from({ length: 5 }) as _}
                                        <div
                                            class="w-2 h-1 rounded-full bg-white"
                                        ></div>
                                    {/each}
                                </div>
                            {/if}
                        {/each}
                    </div>
                </Carousel>
            {/if}
        </div>
        <div
            class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full scale-125"
        >
            <img src="/splash.png" alt="splash background" />
        </div>
    </div>
</main>
<section
    class="
    flex flex-col justify-evenly gap-y-8 px-2 items-center mb-8
    md:grid md:grid-cols-2 md:justify-items-center
    xl:flex xl:flex-row"
>
    {#each cards as card}
        <CardComponent {card} />
    {/each}
</section>
<!-- <section class="flex-row-reverse flex justify-end">
    <div>
        <h2>Chilik a világ körül</h2>
    </div>
    {#each chilies as chili}
        <ChiliCard {chili} />
    {/each}
</section>
-->
<section class="relative">
    <div class="absolute z-10 top-0 w-full">
        <h2 class="section-title mt-24 text-center">Kategóriáink</h2>
    </div>
    <div>
        <img class="translate-y-2" src="/wave.svg" alt="Wave bg" />
        <div class="bg-[#273036] w-full h-[46rem]"></div>
        <img class="rotate-180 -translate-y-2" src="/wave.svg" alt="Wave bg" />
    </div>
</section>
<section>
    <h2 class="section-title ml-12">Visszajelzések</h2>
    <div
        class="flex flex-col gap-6 items-center justify-center xl:flex-row xl:gap-12 mb-16"
    >
        {#each reviews as review}
            <ReviewComponent {review} />
        {/each}
    </div>
</section>
<section class="relative">
    <svg
        width="100%"
        viewBox="0 0 1920 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1920 566.244C1520 566.244 1160.5 619.5 960.5 619.5C760.5 619.5 400 566.244 0 566.244V0L1920 0V566.244Z"
            fill="#273036"
        />
    </svg>
    <div
        class="absolute top-0 w-full overflow-x-hidden flex flex-col items-center"
    >
        <h2 class="section-title">Vásárlás menete</h2>
        <div class="w-[52rem] h-24 flex items-center mt-12 mb-16">
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 0}
                class:animate__bounceOutRight={currentOrderInfo != 0}
            >
                <img class="w-16 h-16" src="/send.svg" alt="Send icon" />
                <span class="font-semibold text-lg"
                    >Adjon fel egy rendelést weboldalunkon</span
                >
            </div>
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 1}
                class:animate__bounceOutRight={currentOrderInfo != 1}
            >
                <img class="w-16 h-16" src="/bank.svg" alt="Bank icon" />
                <span class="font-semibold text-lg"
                    >Utalja el a rendlés összegét</span
                >
            </div>
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 2}
                class:animate__bounceOutRight={currentOrderInfo != 2}
            >
                <img class="w-16 h-16" src="/deliver.svg" alt="Delivery icon" />
                <span class="font-semibold text-lg"
                    >...és már szállítjuk is Önhöz!</span
                >
            </div>
        </div>
        <div class="text-white mt-8 w-[50vw]">
            <Steps
                {steps}
                on:click={stepOrderInfo}
                current={currentOrderInfo}
                secondary="white"
                light="black"
                dark="white"
            />
        </div>
        <div class="mt-8">
            <CallToAction destination="/products" text="Vásárolok →"
            ></CallToAction>
        </div>
    </div>
</section>
<section class="flex pb-12 bg-[url(/chili_bg.png)]">
    <section>
        <h2 class="section-title ml-12">GYIK</h2>
        <div class="w-[48rem] ml-12">
            <AccordionComponent {gyikElements} />
        </div>
    </section>
    <section>
        <h2 class="section-title">Kapcsolat</h2>
    </section>
</section>
<footer class="bg-white h-64 w-full"></footer>

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
