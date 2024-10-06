<script>
    export let chili;
</script>

<section
    class="bg-white w-[25rem] h-[37.5rem] rounded-3xl py-6 px-8 flex flex-col justify-between ml-[7.5%] relative"
>
    <img src="/scorpion.jpg" class="h-[52%] w-[100%] rounded-3xl" />
    <div class="absolute w-16 h-16 right-[-2rem] top-40">
        <img
            src="/chevron.svg"
            alt="chevron right"
            class="absolute w-[100%] h-[100%] z-10"
        />
        <div
            class="bg-white w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></div>
    </div>
    <div class="absolute w-16 h-16 left-[-2rem] rotate-180 top-40">
        <img
            src="/chevron.svg"
            alt="chevron right"
            class="absolute w-[100%] h-[100%] z-10"
        />
        <div
            class="bg-white w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></div>
    </div>
    <h3 class="text-md text-center font-bold">{chili.name}</h3>
    <h4>
        <b class="px-4 py-2 bg-black rounded-lg text-white mr-4">Származás:</b
        >{chili.origin}
    </h4>
    <h4>
        <b class="px-4 py-2 bg-black rounded-lg text-white mr-4">Csípősség:</b
        >{#each Array.from({ length: chili.spiceLevel }) as _}🌶{/each}
    </h4>
    <p>{chili.description}</p>
</section>
