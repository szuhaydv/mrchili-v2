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
    class="mx-4 xxs:mx-8 lg:mx-12 xxl:h-[76vh] banner bg bg-gradient-to-b from-[#fdc830] to-[#f37335] rounded-[3rem] flex flex-col xxl:flex-row mb-12"
>
    <div
        class="flex flex-col justify-center mx-auto xxl:ml-[clamp(2rem,-22.657rem+28.881vw,12rem)] mt-32 sm:mt-40 xxl:mt-0 text-center xxl:text-left"
    >
        <h1
            class="text-md xxs:text-lg sm:text-sxl md:text-xl font-semibold block leading-tight"
        >
            Kézműves termékek <br /> széles választéka
        </h1>
        <h2
            class="max-w-[40rem] mt-2 md:mt-0 text-[14px] xxs:text-[18px] sm:text-md md:text-lg font-light leading-tight px-6 xxs:px-4 sm:px-0"
        >
            Kóstold meg a világ elsőszámú tiszalöki chilijét!
        </h2>
        <div class="xxl:ml-32 mb-16 xxs:mb-24 xxl:mb-0 mt-8">
            <CallToAction destination="/products" text="Körülnézek →"
            ></CallToAction>
        </div>
    </div>
    <div class="flex flex-col items-center sm:flex-row mx-auto mb-12 xxl:mb-0">
        <div
            class="w-[18rem] xxs:w-[20rem] md:w-[clamp(24rem,4.274rem+23.105vw,32rem)] h-full flex items-center relative mx-auto"
        >
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full z-10 pb-8 xxl:pb-0"
            >
                {#if mounted}
                    <Carousel
                        bind:this={carousel}
                        on:pageChange={pageChangeEvent}
                        autoplay
                        autoplayDuration={5000}
                    >
                        <button
                            class="w-16 h-16 xxs:w-20 xxs:h-20 rounded-2xl xxs:rounded-3xl bg-[#E49482] border-[4px] border-white text-white text-lg my-auto"
                            slot="prev"
                            on:click={() => carousel.goToPrev()}
                        >
                            ❮
                        </button>
                        <button
                            class="w-16 h-16 xxs:w-20 xxs:h-20 rounded-2xl bg-[#E49482] border-[4px] border-white text-white text-lg my-auto"
                            slot="next"
                            on:click={() => carousel.goToNext()}
                        >
                            ❯
                        </button>
                        {#each landingProducts as product}
                            <div
                                class="flex justify-center h-[64vh] overflow-visible"
                            >
                                <img
                                    class="w-[72%] object-contain rotate-12 translate-x-[15%]"
                                    src={product.imgPath}
                                    alt={product.imgPath}
                                />
                            </div>
                        {/each}
                        <div
                            slot="dots"
                            class="hidden xxl:flex custom-dots items-center"
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
            <img class="w-full" src="/splash.png" alt="splash background" />
        </div>
        <div
            class="mt-[2rem] sm:mt-[20%] h-max ml-0 sm:ml-4 w-40 p-4 rounded-2xl bg-white shadow-lg flex flex-col gap-4 z-20"
        >
            <h3 class="text-md text-center font-semibold">
                {landingProducts[currentPageIndex].title}
            </h3>
            <div>
                <h4 class="font-medium underline mb-2">Csípősség:</h4>
                <ul class="flex justify-center">
                    {#each Array.from({ length: 5 }) as _, index}
                        <img
                            class="w-5 h-5"
                            class:opacity-20={landingProducts[currentPageIndex]
                                .spiceLevel <= index}
                            class:grayscale={landingProducts[currentPageIndex]
                                .spiceLevel <= index}
                            src="/fire_colored.png"
                            alt="Fire icon"
                        />
                    {/each}
                </ul>
            </div>
            <div class="w-full">
                <h4 class="font-medium underline mb-2">Chili:</h4>
                <span class="text-center block"
                    >{landingProducts[currentPageIndex].chiliName}</span
                >
            </div>
        </div>
    </div>
</main>
<section
    id="benefits"
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
<section id="categories" class="relative bg-[#273036] lg:bg-transparent">
    <div class="lg:absolute z-10 top-0 w-full">
        <h2 class="section-title pt-12 text-center">Kategóriáink</h2>
        <ul
            class="flex flex-col items-center lg:flex-row gap-8 lg:justify-evenly w-full h-full pb-12"
        >
            <li class="w-[50%] lg:w-[25%] flex flex-col items-center">
                <img class="w-full" src="/chilisauce_category.png" alt="" />
                <h3 class="text-sxl leading-tight font-freeman text-white mb-4">
                    Chiliszósz
                </h3>
                <CallToAction destination="/products" text="Vásárolok →" />
            </li>
            <li class="w-[50%] lg:w-[25%] flex flex-col items-center">
                <img class="w-full" src="/chutney_category.png" alt="" />
                <h3 class="text-sxl leading-tight font-freeman text-white mb-4">
                    Chutney
                </h3>
                <CallToAction
                    destination="/products#chutney"
                    text="Vásárolok →"
                />
            </li>
            <li class="w-[50%] lg:w-[25%] flex flex-col items-center">
                <img class="w-full" src="/coming_soon.png" alt="coming soon" />
                <h3 class="text-sxl leading-tight font-freeman text-white mb-4">
                    BBQ
                </h3>
                <CallToAction destination="/products#bbq" text="Vásárolok →" />
            </li>
        </ul>
    </div>
    <svg
        class="w-full hidden lg:block lg:h-[clamp(48rem,24.571rem+36.607vw,68.5rem)]"
        preserveAspectRatio="none"
        width="1920"
        height="1096"
        viewBox="0 0 1920 1096"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 73L64 80C128 88 256 102 384 95C512 88 640 58 768 44C896 29 1024 29 1152 44C1280 58 1408 88 1536 95C1664 102 1792 88 1856 80L1920 73V1023L1856 1016C1792 1008 1664 994 1536 1001C1408 1008 1280 1038 1152 1052C1024 1067 896 1067 768 1052C640 1038 512 1008 384 1001C256 994 128 1008 64 1016L0 1023V73Z"
            fill="#273036"
        />
    </svg>
</section>
<section id="reviews">
    <h2 class="section-title text-center sm:text-start sm:ml-12">
        Visszajelzések
    </h2>
    <div
        class="flex flex-col gap-6 items-center justify-center xl:flex-row xl:gap-12 mb-16"
    >
        {#each reviews as review}
            <ReviewComponent {review} />
        {/each}
    </div>
</section>
<section id="steps" class="relative">
    <svg
        class="h-[40rem]"
        width="100%"
        preserveAspectRatio="none"
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
        <h2 class="section-title text-sxl sm:text-xl">Vásárlás menete</h2>
        <div
            class="w-[19.5rem] xxs:w-[24rem] sm:w-[36rem] md:w-[44rem] bl:w-[52rem] h-24 flex items-center my-8 sm:mt-12 sm:mb-16"
        >
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 0}
                class:animate__bounceOutRight={currentOrderInfo != 0}
            >
                <img
                    class="w-8 h-8 sm:w-16 sm:h-16"
                    src="/send.svg"
                    alt="Send icon"
                />
                <span
                    class="font-semibold text-center text-sm sm:text-md md:text-lg"
                    >Adjon fel egy rendelést weboldalunkon</span
                >
            </div>
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 1}
                class:animate__bounceOutRight={currentOrderInfo != 1}
            >
                <img
                    class="w-8 h-8 sm:w-16 sm:h-16"
                    src="/bank.svg"
                    alt="Bank icon"
                />
                <span class="font-semibold text-sm sm:text-md md:text-lg"
                    >Utalja el a rendelés összegét</span
                >
            </div>
            <div
                class="order-step animate__animated"
                class:animate__bounceInLeft={currentOrderInfo == 2}
                class:animate__bounceOutRight={currentOrderInfo != 2}
            >
                <img
                    class="w-8 h-8 sm:w-16 sm:h-16"
                    src="/deliver.svg"
                    alt="Delivery icon"
                />
                <span class="font-semibold text:sm sm:text-md md:text-lg"
                    >...és már szállítjuk is Önhöz!</span
                >
            </div>
        </div>
        <div
            class="text-white mt-8 w-[96vw] xxs:w-[85vw] sm:w-[75vw] max-w-[60rem]"
        >
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
<section
    class="flex flex-col xxl:flex-row justify-center bg-[url(/chili_bg.png)] min-h-[40rem]"
>
    <section
        id="gyik"
        class="w-[90vw] flex flex-col items-center mx-auto xxl:w-[60vw]"
    >
        <h2 class="section-title">GYIK</h2>
        <div
            class="w-[48rem] h-full max-w-[96vw] xxsm:max-w-[calc(100vw-6rem)]"
        >
            <AccordionComponent {gyikElements} />
        </div>
    </section>
    <section
        id="contact"
        class="w-full xxl:w-[40vw] mb-8 xxl:mb-0 flex flex-col items-center"
    >
        <h2 class="section-title">Kapcsolat</h2>
        <form
            class="bg-white rounded-2xl p-6 flex flex-col gap-6 w-max"
            action=""
        >
            <input
                class="border border-[#d9d9d9] rounded-lg px-4 w-[16rem] xxs:w-[20rem] h-10"
                maxlength="16"
                type="text"
                placeholder="Név"
            />
            <input
                class="border border-[#d9d9d9] rounded-lg px-4 w-[16rem] xxs:w-[20rem] h-10"
                maxlength="16"
                type="text"
                placeholder="Email"
            />
            <textarea
                class="border border-[#d9d9d9] rounded-lg px-4 w-[16rem] xxs:w-[20rem] max-h-40 min-h-40 pt-4"
                placeholder="Üzenet"
            />
            <button
                class="w-[16rem] h-10 text-white bg-black rounded-lg mx-auto"
                >Küldés</button
            >
        </form>
    </section>
</section>

<style>
    h3 {
        font-weight: bold;
    }
</style>
