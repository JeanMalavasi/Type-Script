"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaFiscalEx = void 0;
var pessoaFiscalEx = /** @class */ (function () {
    function pessoaFiscalEx(nome, sobrenome, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }
    pessoaFiscalEx.prototype.validarCpf = function (cpf) {
        if (this.cpf == cpf)
            return true;
        return false;
    };
    //Metodo de interface
    pessoaFiscalEx.prototype.validarDados = function (x) {
        if (this.nome == x || this.sobrenome == x)
            return true;
        return false;
    };
    return pessoaFiscalEx;
}());
exports.pessoaFiscalEx = pessoaFiscalEx;
//# sourceMappingURL=pessoaFiscalEx.js.map