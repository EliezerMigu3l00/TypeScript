import { Negociacao } from "./nogociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    adiciona(negociacao: Negociacao ) {
        this.negociacoes.push(negociacao);
    }
    lista(): Array<Negociacao> {
        return this.negociacoes;
    }
}

const nogociacoes = new Negociacoes();
nogociacoes.adiciona(new Negociacao());
