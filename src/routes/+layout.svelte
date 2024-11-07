<script>
    import { routes } from "./dataService";
    import FooterComponent from "./FooterComponent.svelte";
    import HeaderComponent from "./HeaderComponent.svelte";
</script>

<!-- <h1>Karbantartás alatt...</h1> -->

<HeaderComponent />

<slot></slot>

<FooterComponent />
