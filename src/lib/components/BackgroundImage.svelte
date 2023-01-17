<script>
	export let imgUrl;
</script>

<div style:background-image="url({imgUrl})" class="bg-image" />

<style>
	.bg-image {
		width: 100%;
		min-height: 35rem;
		background-size: cover;
		background-position: center;
	}

	@media (min-width: 50em) {
		.bg-image {
			width: 50%;
		}
	}
</style>
