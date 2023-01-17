<script>
	export let isDark = true;

	let blurbColor = setColor();
	function setColor() {
		if (isDark) {
			return 'dark';
		} else {
			return 'light';
		}
	}
</script>

<div class="blurb fs-heading-xl fw-bold {blurbColor}">
	<slot />
</div>

<style>
	.blurb {
		text-align: center;
		padding: 100px var(--p-m);
	}

	.dark {
		background: var(--blue-700);
		color: var(--grey-100);
	}

	.light {
		background-color: var(--blue-500);
		color: var(--grey-100);
	}
</style>
