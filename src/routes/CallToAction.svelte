<script>
    export let text;
    export let destination;
    import { goto } from "$app/navigation";
</script>

<button
    class="text-md text-white bg-[#D00000] border-white w-max rounded-full border-4 py-4 px-8 z-50"
    on:click={() => goto(destination)}>{text}</button
>
