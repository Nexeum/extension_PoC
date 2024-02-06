"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("vss-web-extension-sdk");
VSS.init({
    explicitNotifyLoaded: true,
    usePlatformScripts: true,
    moduleLoaderConfig: {
        paths: {
            "dataStorage": "dist"
        }
    }
});
VSS.ready(() => {
    require(["dist/comboControl"], () => { });
    VSS.notifyLoadSucceeded();
    VSS.register(VSS.getContribution().id, () => ({}));
});
const modal_online = document.getElementById("myModal_online");
const modal_stop = document.getElementById("myModal_stop");
const modal_batch = document.getElementById("myModal_batch");
const modal_interactivo = document.getElementById("myModal_interactivo");
const span_online = document.getElementsByClassName("close_online")[0];
const span_stop = document.getElementsByClassName("close_stop")[0];
const span_batch = document.getElementsByClassName("close_batch")[0];
const span_interactivo = document.getElementsByClassName("close_interactivo")[0];
span_online.onclick = () => {
    modal_online.style.display = "none";
};
span_stop.onclick = () => {
    modal_stop.style.display = "none";
};
span_batch.onclick = () => {
    modal_batch.style.display = "none";
};
span_interactivo.onclick = () => {
    modal_interactivo.style.display = "none";
};
window.onclick = (event) => {
    if (event.target == modal_online) {
        modal_online.style.display = "none";
    }
};
window.onclick = (event) => {
    if (event.target == modal_batch) {
        modal_batch.style.display = "none";
    }
};
window.onclick = (event) => {
    if (event.target == modal_interactivo) {
        modal_interactivo.style.display = "none";
    }
};
window.onclick = (event) => {
    if (event.target == modal_stop) {
        modal_stop.style.display = "none";
    }
};
//# sourceMappingURL=vista_infoTecnica.ui.js.map