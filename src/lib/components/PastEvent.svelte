<script>
	import Link from './Link.svelte';

	export let title;
	export let startDate;
	export let venue;
	export let meetupLink;
	export let index;

	startDate = new Date(startDate);

</script>

<div class="pv-m" class:border-top-primary-300={index > 0}>
	<h3 class="fw-bold fs-heading-m">{title}</h3>
	<p class="pv-s">
		{startDate.toLocaleString('en-GB', { weekday: 'long' })} | {startDate.toLocaleDateString('fi')} | {venue.name}
	</p>
	<div class="pv-m">
		<Link href={meetupLink}>View event in Meetup</Link>
	</div>
</div>
