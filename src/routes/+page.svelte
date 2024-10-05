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
    <nav class="flex items-center h-[4rem] relative pr-12">
        <h2 class="font-knewave text-lg ml-96 mr-auto">Mr. Chili</h2>
        <div class="flex gap-20">
            {#each routes as route}
                <a
                    class="font-inter font-semibold text-md text-[#444]"
                    href={"/" + route}>{route}</a
                >
            {/each}
        </div>
    </nav>
</header>

<main class="relative mx-12">
    <div class="absolute">
        <h1>Heading One</h1>
        <h2>Subheading something</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur. Dictum interdum morbi
            tincidunt at ut vel. Nulla blandit pulvinar tellus massa nulla
            pellentesque enim. Non sed mauris nec in.
        </p>
        <button>Körülnézek</button>
    </div>
    <img
        src="/logo.png"
        class="w-[8.77%] h-[8.77vw] absolute left-[8%] top-[-3.5rem]"
        alt="Mr. Chili Logo"
    />
    <svg
        class="banner"
        width="100%"
        viewBox="0 0 1808 672"
        xmlns="http://www.w3.org/2000/svg"
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
    </svg>
</main>
<section>
    {#each cards as card}
        <CardComponent {card} />
    {/each}
</section>
