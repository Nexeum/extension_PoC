import {Pregunta} from "../models/Pregunta";
import {Respuesta} from "../models/Respuesta";
import { preguntas } from "../../infrastructure/helpers/PreguntasHelper";

export default class ObtenerPreguntaUseCase {
    private indice: number;

    constructor(indice: number) {
        this.indice = indice;
    }

    verPregunta(): void {
        const pregunta: Pregunta = preguntas[this.indice];
        console.log(`Pregunta ${this.indice + 1}: ${pregunta.enunciado}`);
        pregunta.respuestas?.forEach((respuesta: Respuesta, respuestaIndex: number) => {
            console.log(`Respuesta ${respuestaIndex + 1}: ${respuesta.texto}`);
        });
        console.log('-------------------------');
    }
}