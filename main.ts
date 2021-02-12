import { contaCorrenteEx } from "./classes/contaCorrenteEx";
import { pessoaFiscaEx } from "./classes/pessoaFiscaEx";
import { pessoaJuridicaEx } from "./classes/pessoaJuridicaEx";


let clientePF = new pessoaFiscaEx("jean", "pinto", "123")
let clientePF2 = new pessoaFiscaEx("xxx", "xxx", "xxx")
let contaPF = new contaCorrenteEx();
console.log("Cliente Pessoa fisica")
contaPF.adicionaCorrentistaPF(clientePF)
contaPF.adicionaCorrentistaPF(clientePF2)
console.log(contaPF.imprimirDadosPF());


console.log("\n\nCliente Pessoa juridica")
let clientePJ = new pessoaJuridicaEx("JEAN", "MALAVASI", "321", 500)
let clientePJ2 = new pessoaJuridicaEx("yyy", "yyy", "yyy", 1000)
let contaPJ = new contaCorrenteEx();

contaPJ.adicionarCorrentistaPJ(clientePJ);
contaPJ.adicionarCorrentistaPJ(clientePJ2);
console.log(contaPJ.imprimirDadosPJ());