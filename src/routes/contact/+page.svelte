<script>
    let emailOptions = {
        to: "",
        subject: "Test Email",
        text: "This is a test email sent from my SvelteKit app.",
        html: "<p>This is a test email sent from my SvelteKit app.</p>",
    };

    async function handleSendEmail() {
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

<main
    class="relative mx-8 lg:mx-12 bg-white rounded-[3rem] pt-8 banner h-[80vh]"
>
    <h1 class="section-title text-center">Kapcsolat</h1>
    <div class="flex justify-evenly">
        <form action="" class="flex flex-col w-[32%] gap-8">
            <input
                class="bg-[#e9f4fcd9] rounded-full h-16 pl-8 shadow-inset-lg"
                placeholder="Név"
                type="text"
            />
            <input
                class="bg-[#e9f4fcd9] rounded-full h-16 pl-8 shadow-inset-lg"
                placeholder="E-mail"
                type="text"
            />
            <textarea
                name=""
                id=""
                class="h-32 bg-[#e9f4fcd9] p-8 shadow-inset-lg"
                placeholder="Üzenet"
            ></textarea>
            <button
                on:click={handleSendEmail}
                class="text-white text-md bg-[#43aecfd9] h-16">Küldés</button
            >
        </form>
        <ul class="flex flex-col justify-evenly">
            <li class="flex items-center gap-4 text-lg">
                <img class="w-16 h-16" src="/mail.svg" alt="Mail icon" />
                <span>mr.chili.info@gmail.com</span>
            </li>
            <li>
                <a
                    class="flex items-center gap-4 text-lg"
                    href="https://www.tiktok.com/@_mr.chili_"
                    target="_blank"
                >
                    <img
                        class="w-16 h-16"
                        src="/tiktok.png"
                        alt="Tiktok icon"
                    />
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
                </a>
            </li>
            <li>
                <a
                    href="https://www.facebook.com/profile.php?id=61566501605373&locale=hu_HU"
                    target="_blank"
                    class="flex items-center gap-4 text-lg"
                >
                    <img
                        class="w-16 h-16"
                        src="/facebook.png"
                        alt="Facebook icon"
                    />
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
                </a>
            </li>
            <li>
                <a
                    class="flex items-center gap-4 text-lg"
                    href="https://www.instagram.com/_mr_chili_/"
                    target="_blank"
                >
                    <img
                        class="w-16 h-16"
                        src="/instagram.png"
                        alt="Instagram icon"
                    />
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
                </a>
            </li>
        </ul>
    </div>
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
