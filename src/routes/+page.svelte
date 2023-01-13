<script>
	import Blurb from '$lib/components/Blurb.svelte';
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
	<div class="container mt-l mb-xxl">
		<p class="fw-bold fs-heading-l">Game design community for you</p>
		<p class="pv-m">
			Join the community of professional and aspiring professional game designers in Finland. Find
			new friends and have thought provoking discussiong with fellow game design enthusiasts.
		</p>
		<div class="pt-m">
			<Button href={meetupGroupLink}>Join Meetup group</Button>
		</div>
	</div>
	<div
		class="img-v-l img-bg-cover img-bg-center"
		style="background-image: url({gdofBattleSystems})"
	/>
</section>
<section class="">
	<div>
		<Blurb><h2>Game designers</h2></Blurb>
	</div>
	<div class="container mv-l">
		<div>
			<h3 class="mb-m text-heading-m">Events</h3>
			<h4 class="fw-bold mb-s">Learn</h4>
			<p class="mb-s">Join our free events to learn about in depth topics of game design.</p>
			<p>
				Expert game designers share their knowledge and experience with you, so that you can get
				inspired in your endeavours in the game design space.
			</p>
			<h4 class="fw-bold mt-m mb-s">Meet</h4>
			<p class="mb-m">
				Connect with existing friends and meet new fellow game designers. Get inspired by new
				viewpoints and entertain your curiosity with interesting conversations.
			</p>
			<Link href="#next-event" inNewTab={false}>View next event</Link>
			<h4 class="fw-bold mt-m mb-s">Speak</h4>
			<p>Share your knowledge and experience with other game designers by speaking in our event.</p>
		</div>
		<div class="mt-xxl mb-xxl">
			<h2 class="text-heading-m mb-m">Articles</h2>
			<p class="mb-m">
				Learn about game design in our bite sized summaries covering game design talks and
				interviews.
			</p>
			<Link href="/articles" inNewTab={false}>View articles</Link>
		</div>
	</div>
	<div>
		<Blurb isDark={false}><h2>Companies</h2></Blurb>
	</div>
	<div class="container mt-l mb-xxl">
		<h3 class="mb-m text-heading-m">Host</h3>
		<p class="mb-s">
			Connect and reach enthusiastic game designers by hosting an event together with us.
		</p>
		<p>
			Our experienced crew organises event together with you. Participate to organising as much or
			little as you want, but we'll ensure that the event goes smooth from opening the doors to
			closing the lights.
		</p>
	</div>
</section>
<section id="next-event" class="r-20 bg-secondary-100 pv-l">
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
