<script>
    let deliveryOption = "Házhozszállítás";
</script>

<main
    class="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] relative mx-8 mb-8 lg:mx-12 bg-white rounded-[3rem] banner pt-4"
>
    <h1 class="section-title text-center">Rendelés</h1>
    <div class="flex justify-evenly">
        <section class="w-[30%] bg-red-300 h-10">
            <ul>
                <li></li>
            </ul>
            <p></p>
        </section>
        <form action="">
            <label class="font-bold text-md pl-4 pb-2" for="name">NÉV</label>
            <input
                class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="name"
                type="text"
            />
            <label class="font-bold text-md pl-4 pb-2" for="email"
                >EMAIL CÍM</label
            >
            <input
                class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="email"
                type="text"
            />
            <div class="flex items-center mb-8">
                <label class="font-bold text-md mr-4" for="delivery"
                    >SZÁLLÍTÁSI MÓD</label
                >
                <select
                    class="bg-[#C8CDCD] px-4 py-2 rounded-full"
                    name="delivery"
                    id="delivery"
                    bind:value={deliveryOption}
                >
                    <option value="Házhozszállítás"
                        >Házhozszállítás - 2290Ft</option
                    >
                    <option value="Csomagponti Átvétel"
                        >Csomagponti átvétel - 1290Ft-tól</option
                    >
                    <option value="Személyes Átvétel"
                        >Személyes Átvétel - Ingyenes</option
                    >
                </select>
            </div>
            {#if deliveryOption == "Házhozszállítás"}
                <ul class="pl-8 flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                        />
                        <label
                            for="gls"
                            class="text-md font-semibold flex gap-2"
                            >GLS<span class="font-light"> 2290Ft</span></label
                        >
                    </li>
                </ul>
            {:else if deliveryOption == "Csomagponti Átvétel"}
                <ul class="pl-8 flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                        />
                        <label for="gls">GLS - 2190Ft</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="foxpost"
                            type="radio"
                            name="group"
                        />
                        <label for="foxpost">Foxpost - 1290Ft</label>
                    </li>
                </ul>
            {:else}
                <ul class="flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer border-2"
                            id="mpl"
                            type="radio"
                            name="group"
                        />
                        <label for="mpl">Budapest XI. kerület</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer border-2"
                            id="mpl"
                            type="radio"
                            name="group"
                        />
                        <label for="mpl">Tiszalök</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer border-2"
                            id="mpl"
                            type="radio"
                            name="group"
                        />
                        <label for="mpl">Nyíregyháza</label>
                    </li>
                </ul>
            {/if}
            <div class="flex justify-center mt-8">
                <button
                    class="text-lg text-white font-bold py-4 px-32 bg-[#82E9CD]"
                    type="submit">RENDELÉS</button
                >
            </div>
            <p class="text-[#9D9D9D] mb-4 text-center">
                A fizetés bankszámlaszámra történő utalással történik. <br /> A részletekről
                e-mailben értesítjük.
            </p>
        </form>
    </div>
</main>
