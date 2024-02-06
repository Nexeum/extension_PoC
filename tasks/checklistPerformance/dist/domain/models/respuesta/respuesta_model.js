"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Respuesta = void 0;
class Respuesta {
    constructor(id, respuesta, preguntasSiguientes = []) {
        this.id = id;
        this.respuesta = respuesta;
        this.preguntasSiguientes = preguntasSiguientes;
    }
}
exports.Respuesta = Respuesta;
//# sourceMappingURL=respuesta_model.js.map