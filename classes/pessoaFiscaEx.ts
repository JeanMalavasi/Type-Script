import { iPessoaEx } from "../interface/iPessoaEx";

export class pessoaFiscaEx implements iPessoaEx {
    cpf: string
    //Variaveis de interface
    nome: string
    sobrenome: string
    
    constructor (nome: string, sobrenome: string, cpf: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }

    validarCpf (cpf: string): boolean {
        if (this.cpf == cpf)
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