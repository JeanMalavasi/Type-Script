import { iPessoaEx } from "../interface/iPessoaEx";

export class pessoaJuridicaEx implements iPessoaEx {
    cnpj: string
    credito: number
    //Variaveis de interface
    nome: string
    sobrenome: string

    constructor (nome: string, sobrenome: string, cnpj: string, credito: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cnpj = cnpj;
        this.credito = credito;
    }
    
    validarCnpj (cpnj: string): boolean {
        if (this.cnpj == cpnj)
            return true;
        return false;
    }

    //Metodo de interface
    validarDados (x:string): boolean {
        if (this.nome == x || this.sobrenome == x)
            return true;
        return false;
    }
}