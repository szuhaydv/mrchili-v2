<script>
    import { Drawer, Button, CloseButton } from "flowbite-svelte";
    import { userCart } from "./cartService";
    import { routes } from "./dataService";
    import Hamburger from "./Hamburger.svelte";
    import { sineIn } from "svelte/easing";

    let isSidebarHidden = true;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn,
    };
    let isHamburgerClicked = false;

    function handleSidebarToggle() {
        isHamburgerClicked = !isHamburgerClicked;
        isSidebarHidden = !isSidebarHidden;
    }
</script>

<header class="sticky bg-[#d3def5] top-0 z-30">
    <nav
        class="w-full flex justify-end bl:justify-start items-center h-12 lg:h-[4rem] relative pr-12 lg:pr-24"
    >
        <div class="block 2xl:hidden absolute left-8 sm:left-16">
            <Hamburger
                on:click={handleSidebarToggle}
                open={isHamburgerClicked}
                duoLine={false}
            />
        </div>
        <a
            href="/"
            class="hidden bl:block ml-[17.5rem] lg:ml-[22.5rem] mr-auto"
        >
            <h2 class="font-knewave text-md xl:text-lg">Mr. Chili</h2>
        </a>
        <div
            class="hidden sm:flex gap-4 xl:gap-[clamp(1.5rem,-0.833rem+4.861vw,5rem)]"
        >
            {#each routes as route}
                <a
                    class="font-inter font-semibold text-sm xxl:text-md text-[#444]"
                    href={"/" + route.route}>{route.name}</a
                >
            {/each}
        </div>
        <a class="relative w-8 h-8 lg:w-10 lg:h-10 ml-2" href="/order">
            {#if userCart.length}
                <div
                    class="absolute w-5 h-5 rounded-full bg-[#ff0000] top-0 right-0 flex items-center justify-center"
                >
                    {userCart.length}
                </div>
            {/if}
            <img src="/cart.svg" alt="Cart icon" />
        </a>
    </nav>
    <a
        href="/"
        class="z-20 left-1/2 -translate-x-1/2 absolute sm:left-[7.75rem] sm:translate-x-0 lg:left-[11.75rem] top-[0.25rem] p-2 bg-[#d3def5] rounded-full"
    >
        <img
            src="/logo.png"
            class="w-36 h-36 lg:w-40 lg:h-40 object-contain"
            alt="Mr. Chili Logo"
        />
    </a>
</header>

<Drawer
    transitionType="fly"
    {transitionParams}
    bind:hidden={isSidebarHidden}
    id="sidebar1"
>
    <div class="flex items-center">
        <CloseButton
            on:click={handleSidebarToggle}
            class="mb-4 dark:text-white"
        />
    </div>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a
            href="/"
            class="text-primary-600 underline dark:text-primary-500 hover:no-underline"
        >
            limited-time sale
        </a>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
        and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
        <Button color="light" href="/">Learn more</Button>
    </div>
</Drawer>
