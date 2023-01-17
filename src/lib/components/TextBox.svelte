<div class="text-box flex flex-align-center">
	<div>
		<slot />
	</div>
</div>

<style>
	.text-box {
		min-height: 30rem;
		width: 90%;
		margin: auto;
	}

	@media (min-width: 50em) {
		.text-box {
			width: 45%;
			padding: var(--p-xxl) var(--p-l);
			max-width: 30rem;
		}
	}
</style>
