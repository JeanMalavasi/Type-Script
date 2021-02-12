"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empregadoMod = exports.idade = void 0;
exports.idade = 20;
var empregadoMod = /** @class */ (function () {
    function empregadoMod(empNome, empMat) {
        this.empNome = empNome;
        this.empMat = empMat;
    }
    empregadoMod.prototype.displayEmpegado = function () {
        console.log("Mat:" + this.empMat + ", Nome: " + this.empNome);
    };
    return empregadoMod;
}());
exports.empregadoMod = empregadoMod;
var NomeCompaninha = "UVV";
//# sourceMappingURL=empregadoMod.js.map