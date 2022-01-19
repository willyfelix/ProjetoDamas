<script>
	import { Link } from "svelte-navigator";
</script>

<section>
	<div id="titulo">Jogo das Damas</div>

	<div id="subtitulo">
		Desenvolvido por alunas do 1ª Período de TSI/IPI do IFPE Campus Igarassu
	</div>

	<nav class="nav" align="center">
		<button>
			<Link to="jogo">Jogar</Link>
		</button>

		<button>
			<Link to="sobre">Sobre</Link>
		</button>

		<button>
			<Link to="ajuda">Ajuda</Link>
		</button>
	</nav>
</section>

<style>
	section {
		background: gray;
		border: 5px solid black;
		border-radius: 5px;
	}

	#titulo {
		color: black;
		font-size: 60px;
		text-align: center;
		padding: 10px;
		background: white;
		font-family: fantasy;
	}

	#subtitulo {
		padding: 10px;
		font-weight: 200;
		letter-spacing: 4px;
		color: white;
		font-size: 15px;
		text-align: center;
		background: black;
		margin-top: 0px;
	}

	.nav {
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		font-size: 25px;
		padding: 20px;
	}

	button {
		background: white;
		border-radius: 15px;
		width: 200px;
		font-family: Courier New;
		font-size: 20px;
		padding: 12px;
		margin: 0 20px;
	}
</style>
