<script>
	export let href;

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

<a {href} {target} class="ph-m pv-s fw-bold fs-link text-grey-100 r-10 btn-primary"><slot /></a>

<style>
	.btn-primary {
		display: inline-block;
		background-color: var(--blue-500);
		border: 2px solid var(--blue-500);
		transition: background-color var(--td-s);
	}

	.btn-primary:hover,
	.btn-primary:focus {
		background-color: #ffffff;
		color: var(--blue-500);
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: var(--fc-grey-100);
	}
</style>
