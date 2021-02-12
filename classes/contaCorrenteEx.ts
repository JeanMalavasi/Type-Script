import { iPessoaEx } from "../interface/iPessoaEx";
import { pessoaFiscaEx } from "./pessoaFiscaEx";
import { pessoaJuridicaEx } from "./pessoaJuridicaEx";

export class contaCorrenteEx {
    correntista: Array<iPessoaEx> = []
    saldo: number
    

    adicionaCorrentistaPF (correntista: iPessoaEx): void {
        this.correntista.push(correntista);
    }

    imprimirDadosPF (): String {
        var reposta: String = ""
        this.correntista.forEach(element => {
           reposta += ("Nome: " +  (element as pessoaFiscaEx).nome +
                        "\nSobrenome:" +  (element as pessoaFiscaEx).sobrenome +
                        "\nCpf:" +  (element as pessoaFiscaEx).cpf) +
                        "\n\n"
        });

        return (reposta +
                "\nSaldo: " + this.saldo + "\n\n"
                )
    }

    adicionarCorrentistaPJ (correntista: iPessoaEx) : void {
        this.correntista.push(correntista);
    }

    imprimirDadosPJ (): String {
        var reposta: String = ""
        this.correntista.forEach(element => {
           reposta += ("Nome: " +  (element as pessoaJuridicaEx).nome +
                        "\nSobrenome:" +  (element as pessoaJuridicaEx).sobrenome +
                        "\nCnpj:" +  (element as pessoaJuridicaEx).cnpj) +
                        "\nCredito:" +  (element as pessoaJuridicaEx).credito +
                        "\n\n"
        });

        return (reposta +
                "\nSaldo: " + this.saldo + "\n\n"
                )
    }
}