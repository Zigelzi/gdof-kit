<script>
	export let href;
	export let isBold = false;
	export let inNewTab = true;

	$: target = setTargetAttribute();
	
	function setTargetAttribute() {
		let targetText;

		if (inNewTab) {
			targetText = '_blank';
		}
		else {
			targetText = '_self';
		}
		return targetText;
	}
</script>

<a href={href} class="pv-s fs-link text-accent-500 link-primary" class:fw-bold={isBold} target="{target}">
	<slot />
</a>
