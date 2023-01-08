<script>
	import Navigation from "./Navigation/Navigation.svelte";
</script>
<header class="primary-header p-m">
	<div class="container header-full-width flex">
		<div class="header-item">
			<a href="/" class="fw-bold fs-heading-m">Game Designers of Finland</a>
		</div>
		<div class="header-item header-right">
			<Navigation />
		</div>
	</div>
</header>

<style>
	.primary-header {
		display: flex;
	}

	.header-full-width {
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: initial;
	}

	.header-item {
		flex: 1;
	}

	.header-right {
		/* flex-basis: 50%; */
		align-self: center;
	}
</style>
