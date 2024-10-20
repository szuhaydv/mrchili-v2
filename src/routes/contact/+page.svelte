<main
    class="relative mx-8 lg:mx-12 bg-white rounded-[3rem] banner pt-12 h-[80vh]"
>
    <form action="" class="flex flex-col w-[32%] gap-8">
        <input
            class="bg-[#e9f4fcd9] rounded-full h-16 pl-8"
            placeholder="Név"
            type="text"
        />
        <input
            class="bg-[#e9f4fcd9] rounded-full h-16 pl-8"
            placeholder="E-mail"
            type="text"
        />
        <textarea
            name=""
            id=""
            class="h-32 bg-[#e9f4fcd9] p-8"
            placeholder="Üzenet"
        ></textarea>
        <button class="text-white text-md bg-[#43aecfd9] h-16">Küldés</button>
    </form>
</main>

<style>
    .banner {
        -webkit-mask-image: radial-gradient(
            circle at 13.75rem 1.25rem,
            transparent 5.25rem,
            black 5.3125rem
        );
        mask-image: radial-gradient(
            circle at 13.75rem 1.25rem,
            transparent 5.25rem,
            black 5.3125rem
        );
    }
</style>
