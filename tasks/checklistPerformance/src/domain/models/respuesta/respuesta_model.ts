import { Pregunta } from '../pregunta/pregunta_model';

export class Respuesta {
    id: number; // Identificador único de la respuesta
    respuesta: string; // Texto de la respuesta
    preguntasSiguientes: Pregunta[]; // Preguntas que siguen a esta respuesta


    //Inicializo el constructor
    constructor(id: number, respuesta: string, preguntasSiguientes: Pregunta[] = []) {
        this.id = id;
        this.respuesta = respuesta;
        this.preguntasSiguientes = preguntasSiguientes;
    }
}