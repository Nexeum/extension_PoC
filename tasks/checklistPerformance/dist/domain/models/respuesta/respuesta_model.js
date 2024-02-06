define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Respuesta = void 0;
    var Respuesta = (function () {
        function Respuesta(id, respuesta, preguntasSiguientes) {
            if (preguntasSiguientes === void 0) { preguntasSiguientes = []; }
            this.id = id;
            this.respuesta = respuesta;
            this.preguntasSiguientes = preguntasSiguientes;
        }
        return Respuesta;
    }());
    exports.Respuesta = Respuesta;
});
//# sourceMappingURL=respuesta_model.js.map