<script>
	import { onMount } from 'svelte';
	import Link from './Link.svelte';

	export let title;
	export let startDate;
	export let endDate;
	export let venue;
	export let meetupLink;
	export let description;

	const timeOptions = { hour: 'numeric', minute: 'numeric' };

	let daysToEvent;
	startDate = new Date(startDate);
	endDate = new Date(endDate);

	onMount(() => {
		const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day, hours * hinutes * seconds * milliseconds in a single day
		const differenceInMs = startDate.valueOf() - Date.now();
		daysToEvent = Math.round(differenceInMs / oneDay);
	});
</script>

<div class="pv-m">
	<h3 class="fw-bold fs-heading-l">{title}</h3>
	<p class="text-accent-500">
		{startDate.toLocaleString('en-GB', { weekday: 'long' })} | {startDate.toLocaleDateString('fi')} |
		{startDate.toLocaleTimeString('fi', timeOptions)} - {endDate.toLocaleTimeString(
			'fi',
			timeOptions
		)}
	</p>
	{#if daysToEvent > 0}
		<p class="text-accent-500">In {daysToEvent} days</p>
	{:else if daysToEvent === 0}
		<p class="text-accent-500">Today!</p>
	{/if}
	<div class="pv-m text-grey-400">
		<p>{venue.name}</p>
		<p>{venue.address}, {venue.city}</p>
	</div>
	<p>{description}</p>
	<div class="pv-m">
		<Link href={meetupLink}>Attend in Meetup</Link>
	</div>
</div>
