<script>
	import { page } from '$app/stores';
	export let href;

	$: isCurrentPage = checkCurrentPage($page.url.pathname);

	function checkCurrentPage(page) {
		if (page.includes(href)) {
			return true;
		}

		return false;
	}
</script>

<li class="nav-item">
	<a {href} class:current-page={isCurrentPage}>
		<slot />
	</a>
</li>

<style>
	.nav-item {
		/* padding-right: var(--p-m); */
	}

	a {
		text-decoration: none;
		color: var(--grey-400);
		transition: color var(--td-s);
	}

	a:hover,
	a:focus {
		color: var(--blue-500);
		text-decoration: underline;
	}

	.current-page {
		color: var(--blue-500);
	}
</style>
