<script>
    import OrderSummary from "./OrderSummary.svelte";
    import { Modal } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { userCart } from "../cartService";

    let deliveryOption = "";
    let isFormValidated = false;
    let isFoxpostModalOpen = false;
    let isGLSModalOpen = false;
    let widget;
    let pickupOption;

    $: isCartEmpty = $userCart.length == 0;

    function receiveMessage(event) {
        var apt = JSON.parse(event.data);
        console.log(apt.name, apt.findme);
    }

    function handlePickupSelection() {
        if (pickupOption == "gls") {
            isGLSModalOpen = true;
        } else if (pickupOption == "foxpost") {
            isFoxpostModalOpen = true;
        }
    }

    onMount(() => {
        window.addEventListener("message", receiveMessage, false);
        if (widget) {
            widget.addEventListener("change", (event) => {
                console.log(event.detail);
            });
        }

        return function () {
            window.removeEventListener("message", receiveMessage, false);
        };
    });
</script>

<svelte:head>
    <script
        type="module"
        src="https://map.gls-hungary.com/widget/gls-dpm.js"
    ></script>
</svelte:head>

<main
    class="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] h-max relative mx-8 mb-8 lg:mx-12 bg-white rounded-[3rem] pt-4 pb-12 md:pb-4 font-inter"
>
    <h1 class="section-title text-center">Rendelés</h1>
    <div class="flex justify-evenly">
        <OrderSummary />
        <form action="">
            <label class="font-bold text-md pl-4 pb-2" for="name">NÉV</label>
            <input
                class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="name"
                type="text"
                disabled={isCartEmpty}
            />
            <label class="font-bold text-md pl-4 pb-2" for="email"
                >EMAIL CÍM</label
            >
            <input
                class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="email"
                type="text"
                disabled={isCartEmpty}
            />
            <label class="font-bold text-md pl-4 pb-2" for="phone"
                >TELEFONSZÁM</label
            >
            <input
                class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="phone"
                type="tel"
                disabled={isCartEmpty}
            />

            <div class="mb-8">
                <label class="font-bold text-md mr-4" for="delivery"
                    >SZÁLLÍTÁSI MÓD</label
                >
                <section class="mt-4 flex justify-evenly">
                    <input
                        type="radio"
                        id="delivery"
                        class="hidden"
                        bind:group={deliveryOption}
                        value="delivery"
                        disabled={isCartEmpty}
                    />
                    <label
                        for="delivery"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={deliveryOption == "delivery"}
                    >
                        <img
                            class="w-16 h-16"
                            src="/home.svg"
                            alt="home icon"
                        />
                        <p class="mt-auto">Házhozszállítás</p>
                        <p class="text-[14px] text-slate-500">2290Ft</p>
                    </label>
                    <input
                        type="radio"
                        id="pickup"
                        class="hidden"
                        bind:group={deliveryOption}
                        value="pickup"
                        disabled={isCartEmpty}
                    />
                    <label
                        for="pickup"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={deliveryOption == "pickup"}
                    >
                        <img class="w-16 h-16" src="/box.svg" alt="box icon" />
                        <p class="mt-auto">Csomagpont</p>
                        <p class="text-[14px] text-slate-500">1290Ft</p>
                    </label>
                    <input
                        type="radio"
                        id="personal"
                        class="hidden"
                        value="personal"
                        bind:group={deliveryOption}
                        disabled={isCartEmpty}
                    />
                    <label
                        for="personal"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={deliveryOption == "personal"}
                    >
                        <img
                            class="w-16 h-16"
                            src="/personally.svg"
                            alt="person icon"
                        />
                        <p class="mt-auto text-center">Személyesen</p>
                        <p class="text-[14px] text-slate-500">Ingyenes</p>
                    </label>
                </section>
            </div>
            {#if deliveryOption == "delivery"}
                <ul class="pl-8 flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                            value="delivery"
                            bind:group={deliveryOption}
                        />
                        <label for="gls" class="flex gap-2">GLS - 2290Ft</label>
                    </li>
                </ul>
                <label class="font-bold text-md pl-4 pb-2 mt-8" for="zipcode"
                    >IRÁNYÍTÓSZÁM</label
                >
                <input
                    class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD]"
                    id="zipcode"
                    type="number"
                />
                <label class="font-bold text-md pl-4 pb-2 mt-8" for="city"
                    >TELEPÜLÉS</label
                >
                <input
                    class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD]"
                    id="city"
                    type="text"
                />
                <label class="font-bold text-md pl-4 pb-2 mt-8" for="houseno"
                    >HÁZSZÁM</label
                >
                <input
                    class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD]"
                    id="houseno"
                    type="number"
                />
                <label class="font-bold text-md pl-4 pb-2 mt-8" for="zipcode">
                    EMELET / AJTÓ / stb. (opcionális)
                </label>
                <input
                    class="pl-4 h-12 w-[30rem] border-2 border-[#C8CDCD]"
                    id="zipcode"
                    type="number"
                />
            {:else if deliveryOption == "pickup"}
                <ul class="pl-8 flex justify-evenly gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                            value="gls"
                            bind:group={pickupOption}
                        />
                        <label for="gls">GLS - 2190Ft</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="foxpost"
                            type="radio"
                            name="group"
                            value="foxpost"
                            bind:group={pickupOption}
                        />
                        <label for="foxpost">Foxpost - 1290Ft</label>
                    </li>
                </ul>
                <button
                    class="rounded-lg flex px-4 py-2 gap-4 items-center border border-black my-4 mx-auto"
                    disabled={!pickupOption}
                    on:click={handlePickupSelection}
                    type="button"
                >
                    Kiválasztás
                    <img class="w-4 h-4" src="/map_pin.svg" alt="Map pin" />
                </button>
            {:else if deliveryOption == "personal"}
                <ul class="flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="bp"
                            type="radio"
                            name="group"
                        />
                        <label for="bp">Budapest XI. kerület</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="tl"
                            type="radio"
                            name="group"
                        />
                        <label for="tl">Tiszalök</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="nyh"
                            type="radio"
                            name="group"
                        />
                        <label for="nyh">Nyíregyháza</label>
                    </li>
                </ul>
                <p class="text-[#9d9d9d] mt-4">
                    Az átvétel pontos helyéről és idejéről e-mailben
                    egyeztetünk.
                </p>
            {/if}
            <div class="flex justify-center mt-8">
                <button
                    class="text-lg text-white font-bold py-4 px-32"
                    type="submit"
                    class:bg-[#82E9CD]={!isFormValidated}
                    class:opacity-40={!isFormValidated}
                    class:bg-[#43af57]={isFormValidated}
                    disabled={!isFormValidated}>RENDELÉS</button
                >
            </div>
            <p class="text-[#9D9D9D] my-4 text-center">
                A fizetés bankszámlaszámra történő utalással történik. <br /> A részletekről
                e-mailben értesítjük.
            </p>
        </form>
    </div>

    <Modal
        title="Foxpost csomagautomata"
        bind:open={isFoxpostModalOpen}
        autoclose
        class="w-[72rem] left-1/2 -translate-x-1/2"
    >
        <iframe
            class="w-[64rem] mx-auto mt-12"
            title="Foxpost csomagpontok"
            frameborder="0"
            loading="lazy"
            src="https://cdn.foxpost.hu/apt-finder/v1/app/"
            width="100%"
            height="600px"
        ></iframe>
    </Modal>
    <Modal
        title="GLS csomagautomata"
        bind:open={isGLSModalOpen}
        autoclose
        class="w-[72rem] left-1/2 -translate-x-1/2"
    >
        <div class="w-[69rem] h-[76vh]">
            <gls-dpm bind:this={widget} country="hu"></gls-dpm>
        </div>
    </Modal>
</main>
