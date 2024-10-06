<script lang="ts">
    import { Card } from "./dataTypes";
    export let card: Card;
</script>

<article class="w-[22.5rem] p-8 bg-white shadow-lg flex rounded-3xl">
    <img src={card.imgPath} alt={card.altText} class="w-16 h-16" />
    <div>
        <h3 class="font-bold text-md">{card.title}</h3>
        <p>{card.subtitle}</p>
    </div>
</article>
