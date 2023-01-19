<div class="text-box flex mt-xxl">
	<div>
		<slot />
	</div>
</div>

<style>
	.text-box {
		min-height: 25rem;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 50em) {
		.text-box {
			width: 45%;
			padding: 0 var(--p-l);
			max-width: 30rem;
		}
	}
</style>
