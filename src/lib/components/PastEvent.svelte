<script>
    import Link from "./Link.svelte";

    export let name;
    export let date;
    export let locationName;
    export let link;
    export let index;
</script>

<div class="pv-m" class:border-top-primary-300={index > 0}>
    <h3 class="fw-bold fs-heading-m">{name}</h3>
    <p class="pv-s">{date.toLocaleString('en-GB', {weekday: 'long'})} - {date.toLocaleDateString('fi')} - {locationName}</p>
    <div class="pv-m">
        <Link link={link}>View event</Link>
    </div>
</div>
