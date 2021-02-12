"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaJuridicaEx = void 0;
var pessoaJuridicaEx = /** @class */ (function () {
    function pessoaJuridicaEx(nome, sobrenome, cnpj, credito) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cnpj = cnpj;
        this.credito = credito;
    }
    pessoaJuridicaEx.prototype.validarCnpj = function (cpnj) {
        if (this.cnpj == cpnj)
            return true;
        return false;
    };
    //Metodo de interface
    pessoaJuridicaEx.prototype.validarDados = function (x) {
        if (this.nome == x || this.sobrenome == x)
            return true;
        return false;
    };
    return pessoaJuridicaEx;
}());
exports.pessoaJuridicaEx = pessoaJuridicaEx;
//# sourceMappingURL=pessoaJuridicaEx.js.map