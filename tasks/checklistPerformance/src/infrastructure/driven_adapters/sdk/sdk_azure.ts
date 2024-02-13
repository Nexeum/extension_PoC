
/// <reference path="../../../../node_modules/vss-web-extension-sdk/typings/vss.d.ts" />

export function init() {
    VSS.init({
        explicitNotifyLoaded: true,
        usePlatformScripts: true
    });
}
export async function ready() {
        VSS.ready(() => {
            //require(["dist/comboControl"], () => {}); // Caso de uso que me va a manejar la logica de las preguntas
            VSS.notifyLoadSucceeded();
            VSS.register(VSS.getContribution().id, () => ({}));
        });
    } 

