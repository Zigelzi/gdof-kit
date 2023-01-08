<script>
	import Navigation from "./Navigation/Navigation.svelte";
</script>
<header class="ph-m pb-s">
	<div class="container header-full-width primary-header pt-s">
		<div class="header-item">
			<a href="/" class="fw-bold fs-heading-m">Game Designers of Finland</a>
		</div>
		<div class="header-item header-right">
			<Navigation />
		</div>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid var(--grey-200);
	}
	
	.primary-header {
		display: flex;
		height: var(--header-height);
		align-items: center;
		flex-wrap: wrap;
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
		display: flex;
		justify-content: center;
		flex: 1;
		flex-basis: 410px;
	}

</style>
