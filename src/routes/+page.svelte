<script>
  import Footer from "$lib/components/Footer.svelte";
  import Link from '$lib/components/Link.svelte';
  import NextEvent from '$lib/components/NextEvent.svelte';
  import PastEvent from '$lib/components/PastEvent.svelte';

  import meetupLogo from '$lib/assets/logo_meetup.png';
  import gdofMonetisation from '$lib/assets/gdof_monetisation.webp';

  let meetupGroupLink = "https://www.meetup.com/game-designers-finland/"
  let isNextEventAvailable = false;
  let pastEvents = [
    {
      name: 'Battle systems @ Metacore',
		  date: new Date('2022-11-29T18:30:00+02:00'),
      locationName: 'Metacore',
      link: 'https://www.meetup.com/game-designers-finland/events/289623080/'
    },
    {
      name: 'Matt Dondelinger - Monetization Design',
      date: new Date('2022-09-27T18:30:00+02:00'),
      locationName: 'Arcade5',
      link: 'https://www.meetup.com/game-designers-finland/events/288132002/'
    },
    {
      name: 'Game Designers of Finland Mentor BBQ',
      date: new Date('2022-06-14T18:30:00+02:00'),
      locationName: 'Arcade5',
      link: 'https://www.meetup.com/game-designers-finland/events/285927780/'
    },
    {
      name: 'Game Designers - Finland @ Skunkworks!',
      date: new Date('2022-04-19T19:00:00+02:00'),
      locationName: 'Skunkworks',
      link: 'https://www.meetup.com/game-designers-finland/events/284093445/'
    }
  ]
</script>

<div id="landing-page">
  <section class="mt-xxl ph-m">
    <div class="container">
      <p class="fw-bold fs-heading-l" >Learn and ask the questions about game design that you always wanted to</p>
      <p class="pv-m">Join meetups and community of professional and aspiring professional game designers in Finland. Find new friends and have thought provoking discussiong with fellow game design enthusiasts.</p>
      <div class="mt-m">
        <Link link={meetupGroupLink} isButton={true}>Attend next event in Meetup</Link>
      </div>
    </div>
  </section>
</div>
<main>
  <section class="r-20 bg-secondary-100 ph-m pv-l">
    <div class="container">
      <h2 class="text-heading-m" >Next event</h2>
      {#if isNextEventAvailable}
        <NextEvent />
      {:else }
      <div class="pv-m">
        <h3 class="fw-bold fs-heading-l">To be announced</h3>
        <p class="pv-s">The details of next meetup are not yet available. Join our Meetup group to get notified about the next event!</p>
        <div class="pv-m">
          <Link link={meetupGroupLink} isButton={true}>Join Meetup group</Link>
        </div>
      </div>  
      

      {/if}
      
    </div>
  </section>
  <div class="img-v-l img-bg-cover img-bg-center" style="background-image: url({gdofMonetisation})" />
  <section class="ph-m pv-l">
    <div class="container">
      <h2 class="text-heading-m">Past events</h2>
      {#each pastEvents as event, i}
        <PastEvent {...event} index={i}/>
      {/each}
      <p class="pv-m">Join the Game Designers of Finland Meetup group to stay up to date about new events</p>
      <Link link={ meetupGroupLink } isButton={true}>Join group in Meetup</Link>
    </div>
  </section>
  <section class=" bg-secondary-100 ph-m pt-l pb-xxl">
    <div class="container">
      <h2 class="text-heading-m mb-m" >Community for game designers</h2>
      <p class="mb-m">Game designers of Finland is all about connecting and sharing information with fellow game designers.</p>
      <p>If you enjoy making games, want to share your experiences about solving game design problems or get help and new ideas how to tackle your current design challenges, you’re in the right place!</p>
      <div>
        <div class="flex mt-m">
          <Link link={ meetupGroupLink }><img src="{meetupLogo}" alt="Discord logo" class="img-s"></Link>
          <div class="flex flex-align-center">
            <p class="ml-m"><Link link={ meetupGroupLink }>Join our Meetup group</Link> to keep up to date about our upcoming and past events.</p>
          </div>
          
        </div>
      </div>
    </div>
    
  </section>
</main>
<Footer />

<style>
#landing-page {
  height: 65vh;
}
</style>
