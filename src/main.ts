import Rota from "./Rota.svelte";

const app = new Rota({
	target: document.body,
	props: {
		title: "Jogo das damas",
	},
});

export default app;
