<script>
    export let link;
    export let isButton = false;
    export let isBold = false;
</script>

{#if isButton}
<a href="{link}" class="ph-m pv-s fw-bold fs-link text-grey-100 r-10 btn-primary"><slot /></a>
{:else}
<a href="{link}" class="pv-s fs-link text-accent-500 link-primary" class:fw-bold={isBold}><slot /></a>
{/if}
<style>
.btn-primary {
    background-color: var(--bg-btn);
    transition: background-color .2s;
}

.btn-primary:hover {
    background-color: var(--bg-btn-hover);
}
</style>