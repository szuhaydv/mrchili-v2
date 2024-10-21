<script>
    import { routes } from "./dataService";
</script>

<header class="relative z-20">
    <nav class="flex items-center h-12 lg:h-[4rem] relative pr-24">
        <a href="/" class="ml-[22.5rem] mr-auto">
            <h2 class="font-knewave text-lg">Mr. Chili</h2>
        </a>
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
    <a href="/" class="z-20">
        <img
            src="/logo.png"
            class="w-36 h-36 lg:w-40 lg:h-40 absolute left-[11.25rem] lg:left-[11.75rem] top-[0.25rem]"
            alt="Mr. Chili Logo"
        />
    </a>
</header>

<slot></slot>
