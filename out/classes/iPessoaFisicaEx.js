"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iPessoaFiscal = void 0;
var iPessoaFiscal = /** @class */ (function () {
    function iPessoaFiscal(nome, sobrenome, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }
    iPessoaFiscal.prototype.validarDados = function (x) {
        if (this.nome == x || this.sobrenome == x)
            return true;
        return false;
    };
    iPessoaFiscal.prototype.validarCpf = function (x) {
        if (this.cpf == x)
            return true;
        return false;
    };
    return iPessoaFiscal;
}());
exports.iPessoaFiscal = iPessoaFiscal;
//# sourceMappingURL=iPessoaFisicaEx.js.map