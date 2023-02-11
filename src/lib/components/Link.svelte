<script>
	export let href;
	export let isBold = false;
	export let inNewTab = true;

	$: target = setTargetAttribute();

	function setTargetAttribute() {
		let targetText;

		if (inNewTab) {
			targetText = '_blank';
		} else {
			targetText = '_self';
		}
		return targetText;
	}
</script>

<a {href} class="pv-s text-primary-500" class:fw-bold={isBold} {target}>
	<slot />
</a>

<style>
	a {
		font-size: var(--fs-link);
		transition: color var(--td-s);
	}

	a:hover,
	a:focus {
		color: var(--blue-600);
	}
</style>
