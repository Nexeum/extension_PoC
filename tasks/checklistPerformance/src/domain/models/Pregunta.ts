import {Respuesta} from "./Respuesta";

export class Pregunta {
    id: number | undefined;
    enunciado: string | undefined;
    respuestas: Respuesta[] | undefined;
}