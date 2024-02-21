import {Pregunta} from "../models/Pregunta";
import {Respuesta} from "../models/Respuesta";
import { preguntas } from "../../infrastructure/helpers/PreguntasHelper";

declare var process: {
    stdin: any,
    stdout: any
};

export default class PreguntasSecuencialesUseCase {
    private indiceActual: number = 0;
    private respuestas: any[] = [];

    constructor() {}

    iniciarSecuencia(): void {
        this.hacerPregunta(this.indiceActual, () => {
            if (this.indiceActual < preguntas.length - 1) {
                this.indiceActual++;
                this.iniciarSecuencia();
            } else {
                console.log(this.respuestas);
            }
        });
    }

    private hacerPregunta(indice: number, callback: () => void): void {
        const pregunta: Pregunta = preguntas[indice];
        console.log(`Pregunta ${indice + 1}: ${pregunta.enunciado}`);
        pregunta.respuestas?.forEach((respuesta: Respuesta, respuestaIndex: number) => {
            console.log(`Respuesta ${respuestaIndex + 1}: ${respuesta.texto}`);
        });
        console.log('-------------------------');

        process.stdout.write('Por favor, ingresa tu respuesta: ');
        process.stdin.once('data', (data) => {
            const respuestaUsuario = data.toString().trim();
            console.log(`Tu respuesta fue: ${respuestaUsuario}`);

            // Guardar la respuesta del usuario en memoria
            const respuesta = {
                idPregunta: pregunta.id,
                idRespuesta: respuestaUsuario
            };
            this.respuestas.push(respuesta);

            callback();
        });
    }
}