<script>
	import { onMount } from 'svelte';
	import Link from './Link.svelte';

	export let event;

	const timeOptions = { hour: 'numeric', minute: 'numeric' };

	let daysToEvent;

	onMount(() => {
		const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day, hours * hinutes * seconds * milliseconds in a single day
		const differenceInMs = event.startDate.valueOf() - Date.now();
		daysToEvent = Math.round(differenceInMs / oneDay);
	});
</script>

<div class="pv-m">
	<h3 class="fw-bold fs-heading-l">{event.title}</h3>
	<p class="text-accent-500">
		{event.startDate.toLocaleString('en-GB', { weekday: 'long' })} | {event.startDate.toLocaleDateString(
			'fi'
		)} | {event.startDate.toLocaleTimeString('fi', timeOptions)} - {event.endDate.toLocaleTimeString(
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
		<p>{event.venue.name}</p>
		<p>{event.venue.address}, {event.venue.city}</p>
	</div>
	<p>{event.description}</p>
	<div class="pv-m">
		<Link href={event.meetupLink}>Attend in Meetup</Link>
	</div>
</div>
