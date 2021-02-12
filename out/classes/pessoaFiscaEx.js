"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaFiscaEx = void 0;
var pessoaFiscaEx = /** @class */ (function () {
    function pessoaFiscaEx(nome, sobrenome, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }
    pessoaFiscaEx.prototype.validarCpf = function (cpf) {
        if (this.cpf == cpf)
            return true;
        return false;
    };
    //Metodo de interface
    pessoaFiscaEx.prototype.validarDados = function (x) {
        if (this.nome == x || this.sobrenome == x)
            return true;
        return false;
    };
    return pessoaFiscaEx;
}());
exports.pessoaFiscaEx = pessoaFiscaEx;
//# sourceMappingURL=pessoaFiscaEx.js.map