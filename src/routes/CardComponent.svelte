<script lang="ts">
    import { Card } from "./dataService";
    export let card: Card;
</script>

<article
    class="w-[19.5rem] p-4 sm:w-[22.5rem] sm:p-8 xl:w-[18rem] xl:px-4 xl:gap-4 2xl:w-[22.5rem] 2xl:px8 2xl:gap-6 bg-white shadow-lg flex rounded-3xl gap-6"
>
    <img
        src={card.imgPath}
        alt={card.altText}
        class="w-16 h-16 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16"
    />
    <div>
        <h3 class="font-bold text-md">{card.title}</h3>
        <p>{card.subtitle}</p>
    </div>
</article>
