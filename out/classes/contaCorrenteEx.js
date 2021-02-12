"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaCorrenteEx = void 0;
var contaCorrenteEx = /** @class */ (function () {
    function contaCorrenteEx() {
        this.correntista = [];
    }
    contaCorrenteEx.prototype.adicionaCorrentistaPF = function (correntista) {
        this.correntista.push(correntista);
    };
    contaCorrenteEx.prototype.imprimirDadosPF = function () {
        var reposta = "";
        this.correntista.forEach(function (element) {
            reposta += ("Nome: " + element.nome +
                "\nSobrenome:" + element.sobrenome +
                "\nCpf:" + element.cpf) +
                "\n\n";
        });
        return (reposta +
            "\nSaldo: " + this.saldo + "\n\n");
    };
    contaCorrenteEx.prototype.adicionarCorrentistaPJ = function (correntista) {
        this.correntista.push(correntista);
    };
    contaCorrenteEx.prototype.imprimirDadosPJ = function () {
        var reposta = "";
        this.correntista.forEach(function (element) {
            reposta += ("Nome: " + element.nome +
                "\nSobrenome:" + element.sobrenome +
                "\nCnpj:" + element.cnpj) +
                "\nCredito:" + element.credito +
                "\n\n";
        });
        return (reposta +
            "\nSaldo: " + this.saldo + "\n\n");
    };
    return contaCorrenteEx;
}());
exports.contaCorrenteEx = contaCorrenteEx;
//# sourceMappingURL=contaCorrenteEx.js.map