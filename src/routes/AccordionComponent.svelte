<script>
    export let gyikElements;
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
</script>

<Accordion autocollapse class="card p-4 text-secondary-100 bg-surface-500">
    {#each gyikElements as element, index}
        <AccordionItem open={index == 0}>
            <svelte:fragment slot="lead"
                ><img
                    class="w-9 h-9"
                    src={element.iconString}
                    alt="icon"
                /></svelte:fragment
            >
            <svelte:fragment slot="summary"
                ><span class="text-md font-semibold">{element.question}</span
                ></svelte:fragment
            >
            <svelte:fragment slot="content"
                >{@html element.answer}</svelte:fragment
            >
        </AccordionItem>
    {/each}
</Accordion>
