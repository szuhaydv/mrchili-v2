<script lang="ts">
    import { Card } from "./dataTypes";
    import CardComponent from "./CardComponent.svelte";
    import ChiliCard from "./ChiliCard.svelte";

    class NavLink {
        constructor(
            public name = "",
            public route = "",
            public hidden = false,
        ) {}
    }

    class ChiliInfo {
        constructor(
            public readonly name = "Chili",
            public readonly origin = "Country",
            public readonly spiceLevel = 2,
            public readonly description = "lorem ipsum",
        ) {}
    }

    const routes = [
        new NavLink("Főoldal", "", false),
        new NavLink("Termékeink", "products", true),
        new NavLink("Paprikáink", "chilies", true),
        new NavLink("Kapcsolat", "contact", true),
        new NavLink("Rólunk", "about", true),
        new NavLink("Rendelés", "order", false),
    ];

    const chilies = [
        new ChiliInfo(
            "Trinidad Morgua Scorpio",
            "Japán 🇯🇵",
            3,
            "Lorem ipsum dolor sit amet dasrfsa consectetur. Donec mauris etiam elit orci sed quam cursus arcu.",
        ),
    ];
    const cards: Card[] = [
        new Card(
            "100% Magyar",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/hungary.svg",
            "hungary icon",
        ),
        new Card(
            "100% Elégedettség",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/like.svg",
            "like icon",
        ),
        new Card(
            "Szállítés",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/delivery.svg",
            "delivery icon",
        ),
        new Card(
            "Nyereményjátékok",
            "Termékeink hazai termőföldön lorem ipsum dolor sit amet",
            "/sale.svg",
            "prize icon",
        ),
    ];
</script>

<header>
    <nav class="flex items-center h-12 lg:h-[4rem] relative pr-24">
        <h2 class="font-knewave text-lg ml-[calc(17.5vw+3rem)] mr-auto">
            Mr. Chili
        </h2>
        <div class="flex gap-[clamp(1.5rem,-0.833rem+4.861vw,5rem)]">
            {#each routes as route}
                <a
                    class="font-inter {route.hidden
                        ? 'hidden'
                        : ''} {route.name == 'Termékeink'
                        ? 'lg:block'
                        : '2xl:block'} font-semibold text-md text-[#444]"
                    href={"/" + route.route}>{route.name}</a
                >
            {/each}
        </div>
        <img class="w-10 h-10 ml-2" src="/cart.svg" alt="Cart icon" />
    </nav>
</header>

<main class="relative mx-8 lg:mx-12">
    <div class="absolute h-[35vw] flex flex-col pl-[10%]">
        <h1
            class="text-2xl font-semibold block mt-auto leading-tight bg-red-300"
        >
            Heading One
        </h1>
        <h2 class="text-xl font-light">Subheading something</h2>
        <p class="text-md max-w-[40rem]">
            Lorem ipsum dolor sit amet consectetur. Dictum interdum morbi
            tincidunt at ut vel. Nulla blandit pulvinar tellus massa nulla
            pellentesque enim. Non sed mauris nec in.
        </p>
        <button
            class="text-md text-white bg-[#D00000] mb-16 border-white w-max rounded-full border-4 py-2 px-8 ml-[25%]"
            >Körülnézek →</button
        >
    </div>
    <img
        src="/logo.png"
        class="w-[8.77%] h-[8.77vw] absolute left-[8%] top-[-3vw]"
        alt="Mr. Chili Logo"
    />
    <svg
        class="banner"
        width="100%"
        viewBox="0 0 1808 672"
        xmlns="http://www.w3.org/2000/svg"
        height="35vw"
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
    </svg>
</main>
<section class="flex justify-evenly">
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

<style>
    :global(html) {
        background: linear-gradient(to bottom, #dae2f8 60%, #d6a4a4 100%);
    }
</style>
