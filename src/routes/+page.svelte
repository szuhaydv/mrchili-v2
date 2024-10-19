<script lang="ts">
    import { cards, reviews, gyikElements } from "./dataService";
    import CardComponent from "./CardComponent.svelte";
    //import ChiliCard from "./ChiliCard.svelte";
    import ReviewComponent from "./ReviewComponent.svelte";
    import AccordionComponent from "./AccordionComponent.svelte";
</script>

<main
    class="mx-8 lg:mx-12 h-[80vh] banner bg bg-gradient-to-b from-[#fdc830] to-[#f37335] rounded-[3rem] flex flex-col justify-center pl-24"
>
    <h1 class="text-xl font-semibold block leading-tight">
        Kézműves termékek <br /> széles választéka
    </h1>
    <h2 class="max-w-[40rem] text-lg font-light leading-tight">
        Kóstold meg a világ elsőszámú tiszalöki chilijét!
    </h2>
    <button
        class="text-md text-white bg-[#D00000] border-white w-max rounded-full border-4 py-2 px-8 ml-16 mt-4"
        >Körülnézek →</button
    >
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
<!-- <section class="flex-row-reverse flex justify-end">
    <div>
        <h2>Chilik a világ körül</h2>
    </div>
    {#each chilies as chili}
        <ChiliCard {chili} />
    {/each}
</section>
-->
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
