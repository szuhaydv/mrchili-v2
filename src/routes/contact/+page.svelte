<script>
    let name;
    let email;
    let message;

    let emailOptions = {
        to: "mr.chili.info@gmail.com",
        subject: "Üzenet érkezett",
        text: `
                Név: ${name}
                Email: ${email}
                Üzenet: ${message}
        `,
        html: `<p><b>Név: </b>${name}</p><p><b>Email: </b>${email}</p><p><b>Üzenet: </b>${message}</p>`,
    };

    async function handleSendEmail() {
        if (!name || !email || !message) return;
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
</script>

<svelte:head>
    <title>Kapcsolat</title>
    <meta name="description" content="Email · TikTok · Facebook · Instagram" />
</svelte:head>

<main
    class="relative mx-2 xxsm:mx-8 lg:mx-12 bg-white rounded-[3rem] pt-8 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] mb-8"
>
    <h1 class="section-title text-center">Kapcsolat</h1>
    <div class="flex flex-col md:flex-row items-center justify-evenly">
        <form
            action=""
            class="flex flex-col w-[92%] xxsm:w-[24rem] lg:w-[32rem] gap-8 mb-8"
        >
            <input
                class="bg-[#e9f4fcd9] rounded-full h-16 pl-8 shadow-inset-lg"
                placeholder="Név"
                type="text"
                bind:value={name}
            />
            <input
                class="bg-[#e9f4fcd9] rounded-full h-16 pl-8 shadow-inset-lg"
                placeholder="Email"
                type="text"
                bind:value={email}
            />
            <textarea
                name=""
                id=""
                class="h-32 bg-[#e9f4fcd9] p-8 shadow-inset-lg"
                placeholder="Üzenet"
                bind:value={message}
            ></textarea>
            <button
                on:click={handleSendEmail}
                class="text-white text-md bg-[#43aecfd9] h-16">Küldés</button
            >
        </form>
        <ul class="flex flex-col justify-evenly gap-8 mb-8">
            <li
                class="flex flex-col bl:flex-row items-center gap-4 text-md xl:text-lg"
            >
                <img
                    class="w-12 h-12 lg:w-16 lg:h-16"
                    src="/mail.svg"
                    alt="Mail icon"
                />
                <span>mr.chili.info@gmail.com</span>
            </li>
            <li>
                <a
                    class="flex flex-col bl:flex-row items-center gap-4 text-md xl:text-lg"
                    href="https://www.tiktok.com/@_mr.chili_"
                    target="_blank"
                >
                    <img
                        class="w-12 h-12 lg:w-16 lg:h-16"
                        src="/tiktok.png"
                        alt="Tiktok icon"
                    />
                    <div class="flex gap-4 items-center">
                        _mr.chili_
                        <svg
                            class="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g><g id="SVGRepo_iconCarrier">
                                <g id="Interface / External_Link">
                                    <path
                                        id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </g></svg
                        >
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="https://www.facebook.com/profile.php?id=61566501605373&locale=hu_HU"
                    target="_blank"
                    class="flex flex-col bl:flex-row items-center gap-4 text-md xl:text-lg"
                >
                    <img
                        class="w-12 h-12 lg:w-16 lg:h-16"
                        src="/facebook.png"
                        alt="Facebook icon"
                    />
                    <div class="flex items-center gap-4">
                        Mr. Chili
                        <svg
                            class="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g><g id="SVGRepo_iconCarrier">
                                <g id="Interface / External_Link">
                                    <path
                                        id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </g></svg
                        >
                    </div>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-col bl:flex-row items-center gap-4 text-md xl:text-lg"
                    href="https://www.instagram.com/_mr_chili_/"
                    target="_blank"
                >
                    <img
                        class="w-12 h-12 lg:w-16 lg:h-16"
                        src="/instagram.png"
                        alt="Instagram icon"
                    />
                    <div class="flex gap-4 items-center">
                        _mr_chili_
                        <svg
                            class="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g><g id="SVGRepo_iconCarrier">
                                <g id="Interface / External_Link">
                                    <path
                                        id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </g></svg
                        >
                    </div>
                </a>
            </li>
        </ul>
    </div>
</main>
