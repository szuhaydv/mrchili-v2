<script>
    import OrderSummary from "./OrderSummary.svelte";
    import { Modal } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { userCart } from "../cartService";
    import { OrderInfo } from "../dataService";

    let isFoxpostModalOpen = false;
    let isGLSModalOpen = false;

    const formInfo = new OrderInfo();

    function checkDeliveryPrice(deliveryMethod, pickupMethod) {
        if (deliveryMethod == "delivery") {
            return 2290;
        } else if (deliveryMethod == "pickup") {
            if (pickupMethod == "gls") {
                return 2190;
            } else if (pickupMethod == "foxpost") {
                return 1290;
            } else {
                return -1;
            }
        } else if (deliveryMethod == "personal") {
            return 0;
        }
    }

    $: deliveryPrice = checkDeliveryPrice(
        formInfo.deliveryMethod,
        formInfo.pickupMethod,
    );

    $: isCartEmpty = $userCart.length == 0;

    function checkFormValidation(
        userCart,
        name,
        email,
        phoneNumber,
        deliveryMethod,
        zipCode,
        city,
        houseNo,
        optionals,
        pickupMethod,
        pickupName,
        pickupZip,
        pickupCity,
        pickupLocation,
        personalPickupMethod,
    ) {
        const baseChecks = [
            userCart.length == 0,
            name == "",
            email == "",
            phoneNumber == "",
            deliveryMethod == "",
        ];
        if (baseChecks.some((c) => c)) return false;
        if (deliveryMethod == "delivery") {
            const addressChecks = [zipCode == "", city == "", houseNo == ""];
            if (addressChecks.some((c) => c)) return false;
        } else if (deliveryMethod == "pickup") {
            const pickupChecks = [
                pickupMethod == "",
                pickupName == "",
                pickupZip == "",
                pickupCity == "",
                pickupLocation == "",
            ];
            if (pickupChecks.some((c) => c)) return false;
        } else if (deliveryMethod == "personal") {
            if (personalPickupMethod == "") return false;
        }
        return true;
    }

    $: isFormValidated = checkFormValidation(
        $userCart,
        formInfo.name,
        formInfo.email,
        formInfo.phoneNumber,
        formInfo.deliveryMethod,
        formInfo.zipCode,
        formInfo.city,
        formInfo.houseNo,
        formInfo.optionals,
        formInfo.pickupMethod,
        formInfo.pickupPointInfo.name,
        formInfo.pickupPointInfo.zipCode,
        formInfo.pickupPointInfo.city,
        formInfo.pickupPointInfo.location,
        formInfo.personalPickupMethod,
    );

    function receiveMessage(event) {
        const packagePoint = JSON.parse(event.data);
        formInfo.pickupPointInfo.name = packagePoint.name;
        formInfo.pickupPointInfo.zipCode = packagePoint.zip;
        formInfo.pickupPointInfo.city = packagePoint.city;
        formInfo.pickupPointInfo.location = packagePoint.street;
        if (isFoxpostModalOpen) {
            isFoxpostModalOpen = false;
        }
    }

    function handlePickupSelection() {
        if (formInfo.pickupMethod == "gls") {
            isGLSModalOpen = true;
        } else if (formInfo.pickupMethod == "foxpost") {
            isFoxpostModalOpen = true;
        }
    }

    function setupWidget(node) {
        console.log("Widget mounted:", node);

        const handler = (event) => {
            if (event.detail == null) return;
            const packagePoint = event.detail;
            console.log(packagePoint);
            formInfo.pickupPointInfo.name = packagePoint.name;
            formInfo.pickupPointInfo.zipCode = packagePoint.contact.postalCode;
            formInfo.pickupPointInfo.city = packagePoint.contact.city;
            formInfo.pickupPointInfo.location = packagePoint.contact.address;
            if (isGLSModalOpen) {
                isGLSModalOpen = false;
            }
        };

        node.addEventListener("change", handler);

        return {
            destroy() {
                node.removeEventListener("change", handler);
            },
        };
    }

    onMount(() => {
        window.addEventListener("message", receiveMessage, false);

        return function () {
            window.removeEventListener("message", receiveMessage, false);
        };
    });
    async function handleSendEmail(emailOptions) {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailOptions),
            });

            const { message } = await response.json();
            console.log(message);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }

    async function submitForm() {
        //const clientEmailOptions = {
        //    to: formInfo.email,
        //    subject: "Test Email",
        //    text: "This is a test email sent from my SvelteKit app.",
        //    html: "<p>This is a test email sent from my SvelteKit app.</p>",
        //};
        const staffEmailOptions = {
            to: "szuhaydv@gmail.com",
            subject: "Test Email",
            text: `
        This is a test email sent to Rozmár12.

        Kedves ${formInfo.name}!

        Köszönjük a rendelését.

        Végösszeg: ${9999} Ft

        Kérjük utalja el a fizetendő összeget a következő bankszámlaszámra: 11773449-02242675.

        Amint megérkezik az utalás, már csomagoljuk is a rendelt termék(ek)et és a választott szállítási módon eljuttatjuk Önnek. Az esetleges további tudnivalókról e-mailben értesítjük.

        Üdvözlettel,

        Mr. Chili csapata
    `,
            html: `
        <p>This is a test email sent to Rozmár12.</p>

        <p>Kedves ${formInfo.name}!</p>

        <p>Köszönjük a rendelését.</p>

        <p>Végösszeg: ${9999} Ft</p>

        <p>Kérjük utalja el a fizetendő összeget a következő bankszámlaszámra: 11773449-02242675.</p>

        <p>Amint megérkezik az utalás, már csomagoljuk is a rendelt termék(ek)et és a választott szállítási módon eljuttatjuk Önnek. Az esetleges további tudnivalókró��l e-mailben értesítjük.</p>

        <p>Üdvözlettel,</p>

        <p>Mr. Chili csapata</p>
    `,
        };
        handleSendEmail(staffEmailOptions);
    }
</script>

<svelte:head>
    <script
        type="module"
        src="https://map.gls-hungary.com/widget/gls-dpm.js"
    ></script>
</svelte:head>

<main
    class="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] h-max relative mx-2 xxs:mx-8 mb-8 lg:mx-12 bg-white rounded-[3rem] pt-4 pb-12 md:pb-4 font-inter"
>
    <h1 class="section-title text-center">Rendelés</h1>
    <div class="flex flex-col lg:flex-row justify-evenly">
        <OrderSummary {deliveryPrice} />
        <form
            on:submit|preventDefault={submitForm}
            class="flex flex-col items-center lg:items-start"
            action=""
        >
            <label class="font-bold text-md lg:pl-4 pb-2" for="name">NÉV</label>
            <input
                class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="name"
                type="text"
                disabled={isCartEmpty}
                bind:value={formInfo.name}
            />
            <label class="font-bold text-md lg:pl-4 pb-2" for="email"
                >EMAIL CÍM</label
            >
            <input
                class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="email"
                type="text"
                disabled={isCartEmpty}
                bind:value={formInfo.email}
            />
            <label class="font-bold text-md lg:pl-4 pb-2" for="phone"
                >TELEFONSZÁM</label
            >
            <input
                class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD] mb-8"
                id="phone"
                type="tel"
                disabled={isCartEmpty}
                bind:value={formInfo.phoneNumber}
            />

            <div class="mb-8 lg:w-full">
                <p class="text-center sm:text-start font-bold text-md mr-4">
                    SZÁLLÍTÁSI MÓD
                </p>
                <section
                    class="mt-4 flex flex-col sm:flex-row items-center justify-evenly gap-4"
                >
                    <input
                        type="radio"
                        id="delivery"
                        class="hidden"
                        bind:group={formInfo.deliveryMethod}
                        value="delivery"
                        disabled={isCartEmpty}
                    />
                    <label
                        for="delivery"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={formInfo.deliveryMethod ==
                            "delivery"}
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
                        bind:group={formInfo.deliveryMethod}
                        value="pickup"
                        disabled={isCartEmpty}
                    />
                    <label
                        for="pickup"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={formInfo.deliveryMethod ==
                            "pickup"}
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
                        bind:group={formInfo.deliveryMethod}
                        disabled={isCartEmpty}
                    />
                    <label
                        for="personal"
                        class="w-32 h-32 border-2 rounded-lg flex flex-col items-center cursor-pointer pt-2"
                        class:cursor-default={isCartEmpty}
                        class:border-blue-800={formInfo.deliveryMethod ==
                            "personal"}
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
            {#if formInfo.deliveryMethod == "delivery"}
                <ul class="pl-8 flex gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                            value="delivery"
                            bind:group={formInfo.deliveryMethod}
                        />
                        <label for="gls" class="flex gap-2">GLS - 2290Ft</label>
                    </li>
                </ul>
                <label class="font-bold text-md lg:pl-4 pb-2 mt-8" for="zipcode"
                    >IRÁNYÍTÓSZÁM</label
                >
                <input
                    class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD]"
                    id="zipcode"
                    type="number"
                    bind:value={formInfo.zipCode}
                />
                <label class="font-bold text-md lg:pl-4 pb-2 mt-8" for="city"
                    >TELEPÜLÉS</label
                >
                <input
                    class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD]"
                    id="city"
                    type="text"
                    bind:value={formInfo.city}
                />
                <label class="font-bold text-md lg:pl-4 pb-2 mt-8" for="houseno"
                    >HÁZSZÁM</label
                >
                <input
                    class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD]"
                    id="houseno"
                    type="number"
                    bind:value={formInfo.houseNo}
                />
                <label
                    class="font-bold text-md lg:pl-4 pb-2 mt-8"
                    for="optionals"
                >
                    EMELET / AJTÓ / stb. (opcionális)
                </label>
                <input
                    class="pl-4 h-12 w-[18rem] xxs:w-[19.5rem] sm:w-[30rem] border-2 border-[#C8CDCD]"
                    id="optionals"
                    type="text"
                    bind:value={formInfo.optionals}
                />
            {:else if formInfo.deliveryMethod == "pickup"}
                <ul
                    class="pl-0 xxsm:pl-8 flex justify-evenly gap-2 xxsm:gap-8 w-full"
                >
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="gls"
                            type="radio"
                            name="group"
                            value="gls"
                            bind:group={formInfo.pickupMethod}
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
                            bind:group={formInfo.pickupMethod}
                        />
                        <label for="foxpost">Foxpost - 1290Ft</label>
                    </li>
                </ul>
                <button
                    class="rounded-lg flex px-4 py-2 gap-4 items-center border my-4 mx-auto"
                    disabled={!formInfo.pickupMethod}
                    on:click={handlePickupSelection}
                    type="button"
                    class:border-black={formInfo.pickupPointInfo.name == ""
                        ? true
                        : false}
                    class:border-green-500={formInfo.pickupPointInfo.name != ""
                        ? true
                        : false}
                >
                    {#if formInfo.pickupPointInfo.name == ""}
                        Kiválasztás
                        <img class="w-4 h-4" src="/map_pin.svg" alt="Map pin" />
                    {:else}
                        Kiválasztva
                        <span class="text-green-500">✔</span>
                    {/if}
                </button>
            {:else if formInfo.deliveryMethod == "personal"}
                <ul class="flex flex-col sm:flex-row gap-8">
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="bp"
                            type="radio"
                            name="group"
                            value="bp"
                            bind:group={formInfo.personalPickupMethod}
                        />
                        <label for="bp">Budapest XI. kerület</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="tl"
                            type="radio"
                            name="group"
                            value="tisza"
                            bind:group={formInfo.personalPickupMethod}
                        />
                        <label for="tl">Tiszalök</label>
                    </li>
                    <li class="flex items-center gap-2">
                        <input
                            class="w-5 h-5 cursor-pointer"
                            id="nyh"
                            type="radio"
                            name="group"
                            value="nyh"
                            bind:group={formInfo.personalPickupMethod}
                        />
                        <label for="nyh">Nyíregyháza</label>
                    </li>
                </ul>
                <p class="text-[#9d9d9d] text-center sm:text-start px-4 mt-4">
                    Az átvétel pontos helyéről és idejéről e-mailben
                    egyeztetünk.
                </p>
            {/if}
            <div class="w-full flex justify-center mt-8">
                <button
                    class="text-lg text-white font-bold py-4 px-16 sm:px-32"
                    type="submit"
                    class:bg-[#82E9CD]={!isFormValidated}
                    class:opacity-40={!isFormValidated}
                    class:bg-[#43af57]={isFormValidated}
                    disabled={!isFormValidated}>RENDELÉS</button
                >
            </div>
            <p class="text-[#9D9D9D] w-full my-4 text-center px-4">
                A fizetés bankszámlaszámra történő utalással történik. <br /> A részletekről
                e-mailben értesítjük.
            </p>
        </form>
    </div>

    <Modal
        bind:open={isFoxpostModalOpen}
        autoclose
        class="w-[19rem] xxs:w-[24rem] xxsm:w-[28rem] sm:w-[36rem] md:w-[48rem] lg:w-[60rem] xl:w-[72rem] md:left-1/2 md:-translate-x-1/2"
    >
        <svelte:fragment slot="header">
            <h3
                class="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white"
            >
                Foxpost csomagautomata
            </h3>
        </svelte:fragment>

        <iframe
            class="w-[17rem] xxs:w-[21rem] xxsm:w-[25rem] sm:w-[33rem] md:w-[45rem] lg:w-[57rem] xl:w-[69rem] h-[76vh] mx-auto mt-12"
            title="Foxpost csomagpontok"
            frameborder="0"
            loading="lazy"
            src="https://cdn.foxpost.hu/apt-finder/v1/app/"
            width="100%"
            height="600px"
        ></iframe>
    </Modal>
    <Modal
        bind:open={isGLSModalOpen}
        autoclose
        class="w-[19rem] xxs:w-[24rem] xxsm:w-[28rem] sm:w-[36rem] md:w-[48rem] lg:w-[60rem] xl:w-[72rem] md:left-1/2 md:-translate-x-1/2"
    >
        <svelte:fragment slot="header">
            <h3
                class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white"
            >
                GLS csomagautomata
            </h3>
        </svelte:fragment>
        <div
            class="w-[17rem] xxs:w-[21rem] xxsm:w-[25rem] sm:w-[33rem] md:w-[45rem] lg:w-[57rem] xl:w-[69rem] h-[76vh]"
        >
            <gls-dpm use:setupWidget country="hu"></gls-dpm>
        </div>
    </Modal>
</main>
