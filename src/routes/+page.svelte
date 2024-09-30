<script lang="ts">
    import { Card } from "./dataTypes";
    import CardComponent from "./CardComponent.svelte";
    const routes: string[] = [
        "Főoldal",
        "Termékeink",
        "Paprikáink",
        "Kapcsolat",
        "Rólunk",
        "Rendelés",
    ];
    const cards: Card[] = [
        new Card(
            "100% Magyar",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/hungary.svg",
        ),
        new Card(
            "100% Elégedettség",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/like.svg",
        ),
        new Card(
            "Szállítés",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/delivery.svg",
        ),
        new Card(
            "Nyereményjátékok",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/sale.svg",
        ),
    ];
</script>

<header>
    <nav>
        {#each routes as route}
            <a href={"/" + route}>{route}</a>
        {/each}
    </nav>
</header>
<main>
    <h1>Heading One</h1>
    <h2>Subheading something</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur. Dictum interdum morbi tincidunt
        at ut vel. Nulla blandit pulvinar tellus massa nulla pellentesque enim.
        Non sed mauris nec in.
    </p>
    <button>Körülnézek</button>
</main>
<section>
    {#each cards as card}
        <CardComponent {card} />
    {/each}
</section>
