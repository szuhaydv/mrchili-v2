<script>
    import { base } from "$app/paths";
    const pdfGDPR = `${base}/adatkezelesi_tajekoztato.pdf`;
    const pdfToC = `${base}/ÁSZF.pdf`;
</script>

<footer class="bg-white w-full flex p-2 xxs:p-4 md:p-8 text-slate-500">
    <section
        class="w-fit flex flex-col items-center sm:items-start mr-1 xxs:mr-4"
    >
        <div class="flex gap-4 items-center mb-2">
            <img
                class="w-12 h-12 xxs:w-16 xxs:h-16 object-fit xxsm:w-24 xxsm:h-24"
                src="/logo.png"
                alt="logo"
            />
            <h2
                class="font-knewave text-black hidden sm:block text-md sm:text-lg break-keep whitespace-nowrap"
            >
                Mr. Chili
            </h2>
        </div>
        <ul class="w-fit flex-col xxsm:flex-row flex gap-4">
            <li>
                <a
                    class="w-6 h-6"
                    href="https://www.tiktok.com/@_mr.chili_"
                    target="_blank"
                >
                    <img
                        class="w-6 h-6"
                        src="/tiktok.png"
                        alt="facebook logo"
                    />
                </a>
            </li>
            <li>
                <a
                    class="w-6 h-6"
                    href="https://www.facebook.com/profile.php?id=61566501605373&locale=hu_HU"
                    target="_blank"
                >
                    <img
                        class="w-6 h-6"
                        src="/facebook.png"
                        alt="facebook logo"
                    />
                </a>
            </li>
            <li>
                <a
                    class="w-6 h-6"
                    href="https://www.instagram.com/_mr_chili_/"
                    target="_blank"
                >
                    <img
                        class="w-6 h-6"
                        src="/instagram.png"
                        alt="facebook logo"
                    />
                </a>
            </li>
        </ul>
        <div class="flex mt-4">
            <img
                src="/mail.svg"
                alt="mail icon"
                class="w-6 h-6 mr-4 hidden sm:block"
            />
            <p class="hidden sm:block text-black">mr.chili.info@gmail.com</p>
        </div>
    </section>
    <div class="flex flex-1 justify-evenly">
        <section
            class="text-[13px] xxsm:text-sm md:text-md flex flex-col gap-2"
        >
            <h3>Főoldal</h3>
            <ul class="flex flex-col gap-2">
                <li><a href="/#categories">Kategóriák</a></li>
                <li><a href="/#reviews">Visszajelzések</a></li>
                <li><a href="/#steps">Vásárlás menete</a></li>
                <li><a href="/#gyik">GYIK</a></li>
                <li><a href="/#contact">Kapcsolat</a></li>
            </ul>
        </section>
        <section
            class="text-[13px] xxsm:text-sm md:text-md flex flex-col gap-2"
        >
            <a href="/products">
                <h3>Termékeink</h3>
            </a>
            <ul class="flex flex-col gap-2">
                <li><a href="/products#chiliszósz">Chiliszósz</a></li>
                <li><a href="/products#chutney">Chutney</a></li>
                <li><a href="/products#bbq">BBQ</a></li>
            </ul>
        </section>
        <section
            class="text-[13px] xxsm:text-sm md:text-md flex flex-col gap-2"
        >
            <a href="/contact">
                <h3>Kapcsolat</h3>
            </a>
            <a href="about">
                <h3>Rólunk</h3>
            </a>
            <a href="/order">
                <h3>Rendelés</h3>
            </a>
            <a target="_blank" href={pdfGDPR}>
                <h3>Adatkezelési<br />Tájékoztató</h3>
            </a>
            <a href={pdfToC} target="_blank">
                <h3>ÁSZF</h3>
            </a>
        </section>
    </div>
</footer>

<style>
    h3 {
        font-weight: bold;
    }
</style>
