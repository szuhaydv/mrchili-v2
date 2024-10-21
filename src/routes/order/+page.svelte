<script>
    let deliveryOption = "Házhozszállítás";
</script>

<main
    class="min-h-[calc(100vh-6rem)] relative mx-8 mb-8 lg:mx-12 bg-white rounded-[3rem] banner pt-4"
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
                    <option value="Házhozszállítás">Házhozszállítás</option>
                    <option value="Csomagponti Átvétel"
                        >Csomagponti átvétel</option
                    >
                    <option value="Személyes Átvétel">Személyes Átvétel</option>
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
                        <label for="gls">GLS</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="foxpost"
                            type="radio"
                            name="group"
                        />
                        <label for="foxpost">Foxpost</label>
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
                        <label for="gls">GLS</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="foxpost"
                            type="radio"
                            name="group"
                        />
                        <label for="foxpost">Foxpost</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer border-2"
                            id="mpl"
                            type="radio"
                            name="group"
                        />
                        <label for="mpl">MPL</label>
                    </li>
                </ul>
            {:else}
                <p class="text-[#9D9D9D] pl-8">
                    Személyes átvételt választotta
                </p>
            {/if}
            <p class="text-[#9D9D9D] mt-8 mb-4 text-center">
                A rendelés további menetéről e-mailben értesítjük
            </p>
            <div class="flex justify-center">
                <button
                    class="text-lg text-white font-bold py-4 px-32 bg-[#82E9CD]"
                    type="submit">RENDELÉS</button
                >
            </div>
        </form>
    </div>
</main>
