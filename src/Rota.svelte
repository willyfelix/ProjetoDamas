<script>
	import { Router, Route, Link } from "svelte-navigator";

	import Jogo from "./telas/Jogo.svelte";
	import Sobre from "./telas/Sobre.svelte";
	import Ajuda from "./telas/Ajuda.svelte";
</script>

<Router>
	<style>
        section {
			border: 40px solid black;
			background: gray;
		}
        #nomeprincipal {
			color: black;
            background: white;
            margin-top: 2%;
            left: 35%;
            font-family:fantasy;
            font-size: 70px;
			border-radius: 90%;			
        }
        p {
            font-family: cursive;
            color: white;
            font-size: 15px;
            text-align: center;	
			background: black;
			margin-top: 5%;						
        }
		#textoajuda{
			font-family: cursive;
            color: antiquewhite;	
		}
		div.nav {
			flex: auto;
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
			font-size:25px;
            margin-top: 10%;
				
		}
		button {
			background: white;
			border-radius: 58px;
			font-family: Courier New;
			font-size: 27px;
			padding: 12px;
			margin: 0 20px;
		}
		button a {
			color: black;
		}
		#listanome-sobre{
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
			font-size:20px;
		}

    </style>

	<section>
		<p id="nomeprincipal">Jogo de Damas</p>
		<p>
			<strong>
			Desenvolvido por alunas do 1ª Período de TSI/IPI do IFPE Campus Igarassu
			</strong>	
		</p>
		<div class="nav" align="center">
			<nav>
				<button> <Link to="jogo">Jogar</Link></button>
				
				<button><Link to="sobre">Sobre</Link></button>
	
				<button> <Link to="ajuda">Ajuda</Link></button>
			</nav>
		</div>
		<br><br>
		<hr>
	</section>
	<main>
			
		<Route path="jogo">
			<Jogo />
		</Route>

		<Route path="sobre">
			<Sobre />
		</Route>

		<Route path="ajuda">
			<Ajuda />
		</Route>

	</main>
		
</Router>
