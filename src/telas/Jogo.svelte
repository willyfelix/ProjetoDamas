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

		verificarSeJogadaEValida(i, j) {
			const iEValido = i >= 0 && i < this.tabuleiro.length;
			const jEValido = j >= 0 && j < this.tabuleiro.length;

			const estaDentroDoTabuleiro = iEValido && jEValido;
			if (estaDentroDoTabuleiro == true) {
				const existeUmaPeca = this.tabuleiro[i][j].length > 0;
				if (existeUmaPeca == false) {
					return true;
				}
			}

			return false;
		}

		mostrarOpcoes(jogada1, jogada2) {
			const jogada1Validada = this.verificarSeJogadaEValida(
				jogada1.linha,
				jogada1.coluna
			);
			const jogada2Validada = this.verificarSeJogadaEValida(
				jogada2.linha,
				jogada2.coluna
			);

			if (jogada1Validada == true) {
				this.tabuleiro[jogada1.linha][jogada1.coluna] = this.roxa;
			}

			if (jogada2Validada == true) {
				this.tabuleiro[jogada2.linha][jogada2.coluna] = this.roxa;
			}
		}

		limparOpcoes() {
			const tamanho = this.tabuleiro.length;

			for (let i = 0; i < tamanho; i++) {
				for (let j = 0; j < tamanho; j++) {
					if (this.tabuleiro[i][j] === this.roxa) {
						this.tabuleiro[i][j] = "";
					}
				}
			}
		}
	}

	class OpcaoDeJogada {
		constructor(i, j) {
			this.linha = i;
			this.coluna = j;
			this.peca = null;
		}
	}

	const jogo = new Jogo();

	jogo.montarTabuleiro();

	$: tabuleiro = jogo.tabuleiro;
	$: pecaSelecionada = {};

	function mover(i, j) {
		const peca = jogo.tabuleiro[i][j];
		const pecaExiste = peca.length > 0;

		// encerra jogada porque a posicao que o usuario clicou no tabuleiro nao existe peca
		if (pecaExiste === false) {
			return;
		}

		// se o usuario clicou em uma peca roxa entao movemos a peça ja selecionada para a posição que o usuário acabou de clicar
		if (peca === jogo.roxa) {
			// remover peca da posicao original
			const linha = pecaSelecionada.linha;
			const coluna = pecaSelecionada.coluna;
			jogo.tabuleiro[linha][coluna] = "";

			// colocar peca na posicao destino
			jogo.tabuleiro[i][j] = pecaSelecionada.peca;

			jogo.limparOpcoes();

			tabuleiro = jogo.tabuleiro;
			return;
		}

		// se peca existe atualizamos a variavel pecaSelecionada
		pecaSelecionada = new OpcaoDeJogada(i, j);
		pecaSelecionada.peca = peca;

		// mostra as opções disponiveis para a peça clicada
		let jogada1, jogada2;

		if (peca === jogo.branco) {
			jogada1 = new OpcaoDeJogada(i - 1, j - 1);
			jogada2 = new OpcaoDeJogada(i - 1, j + 1);
		}

		if (peca === jogo.preto) {
			jogada1 = new OpcaoDeJogada(i + 1, j - 1);
			jogada2 = new OpcaoDeJogada(i + 1, j + 1);
		}

		jogo.mostrarOpcoes(jogada1, jogada2);

		tabuleiro = jogo.tabuleiro;
	}
</script>

<main id="jogo">
	<table>
		{#each tabuleiro as linha, i}
			<tr>
				{#each linha as peca, j}
					<td
						class={(i + j) % 2 == 0 ? "bg" : ""}
						on:click={() => mover(i, j)}
					>
						{peca}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</main>

<style>
	#jogo {
		padding: 100px;
	}

	table {
		margin: 0 auto;
		border-collapse: collapse;
	}

	td {
		border-style: solid;
		border-width: 2px;
		text-align: center;
		vertical-align: center;
		height: 100px;
		width: 100px;
	}

	.bg {
		background-color: rgb(126, 126, 126);
	}

	td:hover {
		background-color: lightskyblue;
		cursor: pointer;
	}
</style>
