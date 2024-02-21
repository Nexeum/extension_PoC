import {Pregunta} from "../models/Pregunta";
import {Respuesta} from "../models/Respuesta";
import { preguntas } from "../../infrastructure/helpers/PreguntasHelper";
export default class ObtenerPreguntasUseCase {
    verPreguntas(): void {
        preguntas.forEach((pregunta: Pregunta, index: number) => {
            console.log(`Pregunta ${index + 1}: ${pregunta.enunciado}`);
            pregunta.respuestas?.forEach((respuesta: Respuesta, respuestaIndex: number) => {
                console.log(`Respuesta ${respuestaIndex + 1}: ${respuesta.texto}`);
            });
            console.log('-------------------------');
        });
    }
}