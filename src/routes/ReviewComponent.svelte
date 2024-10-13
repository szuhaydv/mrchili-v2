<script>
    export let review;
</script>

<article
    class="bg-white px-4 py-6 w-[19.5rem] rounded-lg flex flex-col gap-4 shadow-sm
    sm:px-8 sm:w-[21rem]
    xl:h-60
    "
>
    <div class="flex gap-2">
        {#each Array.from({ length: 5 }) as _}
            <img class="w-8 h-8" src="/star.svg" alt="Star icon" />
        {/each}
    </div>
    <p>{review.review}</p>
    <div class="flex">
        <img class="w-12 h-12 mr-3" src={review.avatar} alt="avatar icon" />
        <div>
            <span class="block font-bold text-[#757575]">{review.name}</span>
            <span class="text-[#B3B3B3]">{review.date}</span>
        </div>
    </div>
</article>
