<script lang="ts">
    import { cards, chilies, reviews, gyikElements } from "./dataService";
    import CardComponent from "./CardComponent.svelte";
    import ChiliCard from "./ChiliCard.svelte";
    import ReviewComponent from "./ReviewComponent.svelte";
    import AccordionComponent from "./AccordionComponent.svelte";
</script>

<main class="relative mx-8 lg:mx-12 h-[80vh]">
    <div class="absolute top-0 left-0 z-10">
        <h1 class="text-xl font-semibold block leading-tight pt-[10rem]">
            Kézműves termékek <br /> széles választéka
        </h1>
        <h2 class="max-w-[40rem] text-lg font-light leading-tight">
            Kóstold meg a világ elsőszámú tiszalöki chilijét!
        </h2>
        <button
            class="text-md text-white bg-[#D00000] border-white w-max rounded-full border-4 py-2 px-8 ml-[25%] mt-4"
            >Körülnézek →</button
        >
    </div>
    <div
        class="banner w-full h-full top-0 bg bg-gradient-to-b from-[#fdc830] to-[#f37335] rounded-[3rem]"
    ></div>
    <!-- <svg
        class="banner"
        width="100%"
        viewBox="0 0 1808 672"
        xmlns="http://www.w3.org/2000/svg"
        height="80vh"
        preserveAspectRatio="none"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#fdc830; stop-opacity:1;" />
                <stop
                    offset="100%"
                    style="stop-color:#f37335; stop-opacity:1;"
                />
            </linearGradient>
        </defs>
        <path
            d="M 48,0 A 48,48 0 0 0 0,48 L 0,624 A 48,48 0 0 0 48,672 L 1760,672 A 48,48 0 0 0 1808,624 L 1808,48 A 48,48 0 0 0 1760,0 L 344,0 A 24,24 0 0 0 320,24 A 96,96 0 0 1 226,120 A 96,96 0 0 1 132,24 A 24,24 0 0 0 108,0 L 48,0"
            fill="url(#gradient)"
        />
    </svg> -->
</main>
<section
    class="
    flex flex-col justify-evenly gap-y-8 px-2 items-center
    md:grid md:grid-cols-2 md:justify-items-center
    xl:flex xl:flex-row"
>
    {#each cards as card}
        <CardComponent {card} />
    {/each}
</section>
<section class="flex-row-reverse flex justify-end">
    <div>
        <h2>Chilik a világ körül</h2>
    </div>
    {#each chilies as chili}
        <ChiliCard {chili} />
    {/each}
</section>
<section>
    <h2 class="section-title">Visszajelzések</h2>
    <div
        class="flex flex-col gap-6 items-center justify-center xl:flex-row xl:gap-12"
    >
        {#each reviews as review}
            <ReviewComponent {review} />
        {/each}
    </div>
</section>
<section>
    <h2 class="section-title">Vásárlás menete</h2>
    <div class="order-step">
        <img class="w-16 h-16" src="/send.svg" alt="Send icon" />
        <span class="font-semibold text-lg"
            >Adjon fel egy rendelést weboldalunkon</span
        >
    </div>
    <div class="order-step">
        <img class="w-16 h-16" src="/bank.svg" alt="Bank icon" />
        <span class="font-semibold text-lg">Utalja el a rendlés összegét</span>
    </div>
    <div class="order-step">
        <img class="w-16 h-16" src="/deliver.svg" alt="Delivery icon" />
        <span class="font-semibold text-lg">...és már szállítjuk is Önhöz!</span
        >
    </div>
</section>
<section class="flex">
    <section>
        <h2 class="section-title">GYIK</h2>
        <AccordionComponent {gyikElements} />
    </section>
    <section>
        <h2 class="section-title">Kapcsolat</h2>
    </section>
</section>

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
