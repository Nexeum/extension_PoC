import PreguntasSecuencialesUseCase from "./domain/usecase/PreguntasSecuencialesUseCase";

function run() {
    try{
        const preguntasSecuenciales = new PreguntasSecuencialesUseCase();
        preguntasSecuenciales.iniciarSecuencia();
    } catch (error) {
        console.error(error);
    }
}

run();