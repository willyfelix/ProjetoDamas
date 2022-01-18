<script>
	class Jogo {
		constructor() {
			this.branco = "⚪";
			this.preto = "⚫";
			this.roxa = "🟣";

			this.tabuleiro = [
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
				["", "", "", "", "", "", "", ""],
			];
		}

		montarTabuleiro() {
			const linhasComPecas = 3;
			const tamanhoTabuleiro = this.tabuleiro.length;

			for (let i = 0; i < linhasComPecas; i++) {
				for (let j = 0; j < tamanhoTabuleiro; j++) {
					if ((i + j) % 2 === 0) {
						this.tabuleiro[i][j] = this.preto;
					}
				}
			}

			for (
				let i = tamanhoTabuleiro - linhasComPecas;
				i < tamanhoTabuleiro;
				i++
			) {
				for (let j = 0; j < tamanhoTabuleiro; j++) {
					if ((i + j) % 2 === 0) {
						this.tabuleiro[i][j] = this.branco;
					}
				}
			}
		}

		mover(i, j) {
			const peca = this.tabuleiro[i][j];
			const pecaExiste = peca.length > 0;
			if (pecaExiste === false) {
				return;
			}

			if (peca === this.branco) {
				const jogada1Linha = i - 1;
				const jogada1Coluna = j - 1;

				const jogada2Linha = i - 1;
				const jogada2Coluna = j + 1;

				this.mostrarOpcoes(
					jogada1Linha,
					jogada1Coluna,
					jogada2Linha,
					jogada2Coluna
				);


				/* As dua condicionais são para esquerda e direita, mas até o momento não funcionam

				Willy, você pode inserir o que fez na rota, se não der certo a gente conversa

				

				if(verificarSeJogadaEValida(i,j)){
				if(i==j){//esquerda; sempre que i==j o movimento é para esquerda
					this.tabuleiro[i][j]=" "
				jogada1= this.tabuleiro[i-1][j-1]= "⚪"
				return jogada1
				}
				else{
					this.tabuleiro[i][j]=" "
					jogada2= this.tabuleiro[i-1][j+1]="⚪"
					return jogada2
				}
			}

			*/
			}

			if (peca === this.preto) {
				const jogada1Linha = i + 1;
				const jogada1Coluna = j - 1;

				const jogada2Linha = i + 1;
				const jogada2Coluna = j + 1;

				this.mostrarOpcoes(
					jogada1Linha,
					jogada1Coluna,
					jogada2Linha,
					jogada2Coluna
				);
				/*

			if(verificarSeJogadaEValida(i,j) ){
				if(i==j){//esquerda
					this.tabuleiro[i][j]=" "
				jogada1= this.tabuleiro[i+1][j-1]= "⚫"
				return 
				}
				else {
					this.tabuleiro[i][j]=" "
					jogada2= this.tabuleiro[i+1][j+1]="⚫"
					return 
				}



			}*/	
			}


		}

		mostrarOpcoes(
			jogada1Linha,
			jogada1Coluna,
			jogada2Linha,
			jogada2Coluna
		) {
			const jogada1Validada = this.verificarSeJogadaEValida(
				jogada1Linha,
				jogada1Coluna
			);
			const jogada2Validada = this.verificarSeJogadaEValida(
				jogada2Linha,
				jogada2Coluna
			);

			if (jogada1Validada == true) {
				this.tabuleiro[jogada1Linha][jogada1Coluna] = this.roxa;
			}

			if (jogada2Validada == true) {
				this.tabuleiro[jogada2Linha][jogada2Coluna] = this.roxa;
			}
		}

		verificarSeJogadaEValida(i, j) {
			const iEValido = i >= 0 && i < this.tabuleiro.length;
			const jEValido = j >= 0 && j < this.tabuleiro.length;

			const estaDentroDoTabuleiro = iEValido && jEValido;
			const existeUmaPeca = this.tabuleiro[i][j].length > 0;

			if (estaDentroDoTabuleiro == true && existeUmaPeca == false) {
				return true;
			} else {
				return false;
			}
		}
	}

	const jogo = new Jogo();
	jogo.montarTabuleiro();
</script>

<main>
	<table>
		{#each jogo.tabuleiro as linha, i}
			<tr>
				{#each linha as peca, j}
					<td
						class={(i + j) % 2 == 0 ? "bg" : ""}
						on:click={() => jogo.mover(i, j)}
					>
						{peca}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</main>

<style>
	table {
		margin-left: auto;
		margin-right: auto;
		border-collapse: collapse;
	}

	td {
		border-style: solid;
		border-width: 2px;
		text-align: center;
		vertical-align: center;
		height: 50px;
		width: 50px;
	}

	.bg {
		background-color: rgb(126, 126, 126);
	}

	td:hover {
		background-color: lightskyblue;
		cursor: pointer;
	}
</style>

