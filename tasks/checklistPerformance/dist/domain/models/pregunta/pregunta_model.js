define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pregunta = void 0;
    var Pregunta = (function () {
        function Pregunta(id, pregunta, respuestas) {
            if (respuestas === void 0) { respuestas = []; }
            this.id = id;
            this.pregunta = pregunta;
            this.respuestas = respuestas;
        }
        return Pregunta;
    }());
    exports.Pregunta = Pregunta;
});
//# sourceMappingURL=pregunta_model.js.map