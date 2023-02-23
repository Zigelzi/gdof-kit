<script>
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import NextEvent from '$lib/components/NextEvent.svelte';
	import PastEvent from '$lib/components/PastEvent.svelte';
	import TextBox from '$lib/components/TextBox.svelte';

	import meetupLogo from '$lib/assets/logo_meetup.png';
	import gdofAttend from '$lib/assets/gdof_attend.webp';
	import gdofHost from '$lib/assets/gdof_host.webp';
	import gdofSpeak from '$lib/assets/gdof_speak.webp';

	export let data;

	let meetupGroupLink = 'https://www.meetup.com/game-designers-finland/';

	let events = data.events;
	events = events.sort((event1, event2) => {
		let event1Date = new Date(event1.startDate);
		let event2Date = new Date(event2.startDate);
		return event2Date - event1Date;
	});

	let futureEvents = getEvents(false);
	let pastEvents = getEvents(true);
	function getEvents(isPast) {
		let filteredEvents = events.filter((event) => {
			let eventDate = new Date(event.startDate);
			let today = new Date();
			if (isPast) {
				return eventDate < today;
			} else {
				return eventDate >= today;
			}
		});
		return filteredEvents;
	}
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
</section>
<section>
	<Blurb isDark={false}><h2>Events</h2></Blurb>
	<div class="flex flex-justify-end flex-wrap">
		<TextBox>
			<h2 class="text-heading-l mb-m">Attend</h2>
			<p>
				Join our free events to learn about topics related to game design and meet new and existing
				friends.
			</p>
		</TextBox>
		<BackgroundImage imgUrl={gdofAttend} />
	</div>
	<div class="flex flex-wrap-reverse">
		<BackgroundImage imgUrl={gdofSpeak} />
		<TextBox>
			<h2 class="text-heading-l mb-m">Speak</h2>
			<p class="mb-m">
				Share your knowledge and open new professional opportunities by speaking in our event.
			</p>
			<p>
				All topics related to game design are welcome and you can practice your presentation skills
				in warm and friendly community.
			</p>
		</TextBox>
	</div>
	<div class="flex flex-justify-end flex-wrap">
		<TextBox>
			<h2 class="text-heading-l mb-m">Host</h2>
			<p>
				Share you company's passion to making games with over 300 game designers with variety of
				background by hosting event with us!
			</p>
		</TextBox>
		<BackgroundImage imgUrl={gdofHost} />
	</div>
</section>
<section id="next-event" class="bg-secondary-100 pt-l pb-xxl">
	<div class="container">
		<h2 class="text-heading-m">Next event</h2>
		{#if futureEvents.length > 0}
			<NextEvent {...futureEvents[0]} />
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
<section class="mt-l mb-xxl">
	<div class="container">
		<h2 class="text-heading-m">Past events</h2>
		{#each pastEvents as event, i}
			<PastEvent {...event} index={i} />
		{/each}
		<div class="border-top-primary-300">
			<p class="pv-m">
				Join the Game Designers of Finland Meetup group to stay up to date about new events
			</p>
			<Button href={meetupGroupLink}>Join Meetup group</Button>
		</div>
	</div>
</section>
<section>
	<Blurb>Articles</Blurb>
	<div class="container mt-l mb-xxl">
		<h2 class="text-heading-m mb-m">Read</h2>
		<p class="mb-l">
			Learn about game design in our bite sized summaries covering game design talks and interviews.
		</p>
		<Link href="/articles" inNewTab={false}>View articles</Link>
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
		min-height: calc(65vh - var(--header-height));
	}
</style>
