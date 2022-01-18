import Rota from "./Rota.svelte";

const app = new Rota({
	target: document.body,
	props: {
		name: "world",
	},
});

export default app;
