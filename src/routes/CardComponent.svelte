<script lang="ts">
    import { Card } from "./dataTypes";
    export let card: Card;
</script>

<article>
    <img src={card.imgPath} />
    <h3>{card.title}</h3>
    <p>{card.subtitle}</p>
</article>
