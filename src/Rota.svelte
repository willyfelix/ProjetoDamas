<script>
	import { Router, Route } from "svelte-navigator";

	import Jogo from "./telas/Jogo.svelte";
	import Sobre from "./telas/Sobre.svelte";
	import Ajuda from "./telas/Ajuda.svelte";
	import Menu from "./telas/Menu.svelte";

	export let title = "";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Router>
	<Menu />

	<Route path="jogo" component={Jogo} />

	<Route path="sobre" component={Sobre} />

	<Route path="ajuda" component={Ajuda} />
</Router>
