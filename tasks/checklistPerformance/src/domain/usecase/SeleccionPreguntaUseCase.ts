import ObtenerPreguntasUseCase from "./ObtenerPreguntasUseCase";

declare var process: {
    stdin: {
        on: (event: string, callback: (data: any) => void) => void;
        resume: () => void;
        pause: () => void;
        setEncoding: (encoding: string) => void;
    }
};

export default class SeleccionPreguntaUseCase {
    private obtenerPreguntasUseCase: ObtenerPreguntasUseCase;

    constructor() {
        this.obtenerPreguntasUseCase = new ObtenerPreguntasUseCase();
    }


    seleccionarRespuesta(): void {
        this.obtenerPreguntasUseCase.verPreguntas();

        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        process.stdin.on('data', (respuesta) => {
            console.log(`Has seleccionado la respuesta: ${respuesta}`);
            process.stdin.pause();
        });

        console.log('Por favor, selecciona una respuesta: ');
    }
}