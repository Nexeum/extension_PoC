import { Respuesta } from '../respuesta/respuesta_model';

export class Pregunta {
    id: number;     // Identificador único de la pregunta
    pregunta: string;   // Texto de la pregunta
    respuestas: Respuesta[]; // Respuestas que siguen a esta pregunta


    //Inicializo el constructor
    constructor(id: number, pregunta: string, respuestas: Respuesta[] = []) {
        this.id = id;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
    }
}