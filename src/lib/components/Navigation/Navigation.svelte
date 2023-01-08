<script>
    import NavItem from "./NavItem.svelte";
</script>
<nav id="primary-navigation">
    <ul class="nav-list">
        <NavItem href="/articles">Articles</NavItem>
    </ul>
</nav>
<style>
    ul {
        list-style: none;
    }

    .nav-list {
        display: flex;
        justify-content: center;
    }
</style>