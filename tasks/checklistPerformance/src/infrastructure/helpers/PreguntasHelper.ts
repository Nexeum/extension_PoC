import { Pregunta } from "../../domain/models/Pregunta";

export let preguntas: Pregunta[] = [
    {
        id: 1,
        enunciado: "Se está evaluando la necesidad de pruebas de performance modulares o pruebas de performance E2E?",
        respuestas: [
            {
                id: 1,
                texto: "E2E",
            },
            {
                id: 2,
                texto: "Modulares no Iseries",
            },
            {
                id: 3,
                texto: "Modulares Iseries",
            },
        ],
    },
    {
        id: 2,
        enunciado: "Tipo de Cambio:",
        respuestas: [
            {
                id: 1,
                texto: "Cambio de forma",
            },
            {
                id: 2,
                texto: "Cambio de datos",

            },
            {
                id: 3,
                texto: "Cambio de telecomunicaciones",

            },
            {
                id: 4,
                texto: "Otro",

            },
        ],
    },
    {
        id: 3,
        enunciado: "Tipo de transacción:",
        respuestas: [
            {
                id: 1,
                texto: "Online",

            },
            {
                id: 2,
                texto: "Batch",

            },
            {
                id: 3,
                texto: "Interactivo",

            },


        ],
    },
    {
        id: 4,
        enunciado: "¿Qué tipo de arquitectura se tiene para la solución?",
        respuestas: [
            {
                id: 1,
                texto: "On-Premise",

            },
            {
                id: 2,
                texto: "Nube",

            },
            {
                id: 3,
                texto: "Hibrida",

            },


        ],
    },
    {
        id: 5,
        enunciado: "SOLO Iseries: ¿El objetivo de la iniciativa impacta temas de Full Open Close y/o grupos de activación?",
        respuestas: [
            {
                id: 1,
                texto: "Si",

            },
            {
                id: 2,
                texto: "No",

            },
        ],
    },
    {
        id: 6,
        enunciado: "SOLO Iseries: ¿El objetivo de la iniciativa impacta temas de Full Open Close y/o grupos de activación?",
        respuestas: [
            {
                id: 1,
                texto: "Si",

            },
            {
                id: 2,
                texto: "No",

            },
        ],
    },
    {
        id: 7,
        enunciado: "SSOLO OnPremise: ¿La solución cuenta con infraestructura disponible para escalar?",
        respuestas: [
            {
                id: 1,
                texto: "Si",

            },
            {
                id: 2,
                texto: "No",

            },
        ],
    },
];
