"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.setupProxy = exports.turnOffStrictMode = exports.turnOnStrictMode = void 0;
const constants_1 = require("../common/constants");
function turnOnStrictMode(info) {
    info.project['compilerOptions'].strict = true;
}
exports.turnOnStrictMode = turnOnStrictMode;
function turnOffStrictMode(info) {
    info.project['compilerOptions'].strict = false;
}
exports.turnOffStrictMode = turnOffStrictMode;
function setupProxy(info) {
    const proxy = Object.create(null);
    for (const k of Object.keys(info.languageService)) {
        const serviceFunction = info.languageService[k];
        // @ts-ignore
        proxy[k] = (...args) => serviceFunction.apply(info.languageService, args);
    }
    return proxy;
}
exports.setupProxy = setupProxy;
function log(info, message) {
    info.project.projectService.logger.info(`[${constants_1.PLUGIN_NAME}]: ` + message);
}
exports.log = log;
