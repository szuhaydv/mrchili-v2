<script context="module">
    import { page } from "$app/stores";
</script>

<script>
    // Get the ID from the route parameter
    let id = $page.params.slug;

    // You can fetch data using this ID
    //$: product = fetchProductData(id); // Custom function to fetch product data

    //async function fetchProductData(id) {
    //    const res = await fetch(`/api/products/${id}`);
    //    const data = await res.json();
    //    return data;
    //}
</script>

<main
    class="mx-8 lg:mx-12 h-[90vh] banner bg-white rounded-[3rem] flex justify-evenly mb-4 pt-32"
>
    <h1>{id}</h1>
    <ul></ul>
    <p></p>
    <p></p>
    <p></p>
    <span></span>
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
