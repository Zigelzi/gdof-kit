<script>
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import NextEvent from '$lib/components/NextEvent.svelte';
	import PastEvent from '$lib/components/PastEvent.svelte';

	import meetupLogo from '$lib/assets/logo_meetup.png';
	import gdofBattleSystems from '$lib/assets/gdof_battle_systems.webp';

	export let data;

	let meetupGroupLink = 'https://www.meetup.com/game-designers-finland/';
	let isNextEventAvailable = false;

	let events = data.events;
</script>

<section id="landing-page">
	<div class="container pt-l pb-xxl">
		<p class="fw-bold fs-heading-l">Game design community for you</p>
		<p class="pv-m">
			Join the community of professional and aspiring professional game designers in Finland. Find new
			friends and have thought provoking discussiong with fellow game design enthusiasts.
		</p>
		<div class="pt-m">
			<Button href={meetupGroupLink}>Join the group in Meetup</Button>
		</div>
	</div>
	<div
		class="img-v-l img-bg-cover img-bg-center"
		style="background-image: url({gdofBattleSystems})"
	/>
</section>
<section class="r-20 pv-l">
	<div class="container">
		<h2 class="text-heading-m pb-m">Events</h2>
		<p class="pb-s">
			We organise free events with the best game designers in Finland share their expertise and passion
			about variety of topics.
		</p>
		<h2 class="text-heading-m pt-l pb-m">Articles & summaries</h2>
		<p class="pb-m">Learn about game design in our bite sized summaries covering game design talks and interviews.</p>
		<Link href="/articles" inNewTab={false}>View articles</Link>
	</div>
</section>
<section class="r-20 bg-secondary-100 pv-l">
	<div class="container">
		<h2 class="text-heading-m">Next event</h2>
		{#if isNextEventAvailable}
			<NextEvent event={events[0]} />
		{:else}
			<div class="pv-m">
				<h3 class="fw-bold fs-heading-l">To be announced</h3>
				<p class="pv-s">
					The details of next meetup are not yet available. Join our Meetup group to get notified
					about the next event!
				</p>
				<div class="pv-m">
					<Button href={meetupGroupLink}>Join Meetup group</Button>
				</div>
			</div>
		{/if}
	</div>
</section>
<section class="pv-l">
	<div class="container">
		<h2 class="text-heading-m">Past events</h2>
		{#each events as event, i}
			<PastEvent {...event} index={i} />
		{/each}
		<p class="pv-m">
			Join the Game Designers of Finland Meetup group to stay up to date about new events
		</p>
		<Button href={meetupGroupLink}>Join Meetup group</Button>
	</div>
</section>
<section class="bg-secondary-100 pt-l pb-xxl">
	<div class="container">
		<h2 class="text-heading-m mb-m">Community for game designers</h2>
		<p class="mb-m">
			Game designers of Finland is all about connecting and sharing information with fellow game
			designers.
		</p>
		<p>
			If you enjoy making games, want to share your experiences about solving game design problems
			or get help and new ideas how to tackle your current design challenges, you’re in the right
			place!
		</p>
		<div>
			<div class="flex mt-m">
				<Link href={meetupGroupLink}><img src={meetupLogo} alt="Meetup logo" class="img-s" /></Link>
				<div class="flex flex-align-center">
					<p class="ml-m">
						<Link href={meetupGroupLink}>Join our Meetup group</Link> to keep up to date about our upcoming
						and past events.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	#landing-page {
		/* min-height: calc(95vh - var(--header-height)); */
	}
</style>
