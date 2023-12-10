"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginConfig = void 0;
const typescript = __importStar(require("./typescript/typescript"));
const constants_1 = require("../common/constants");
async function getPluginConfig() {
    var _a;
    const tscConfigRaw = await typescript.showConfig();
    const tscConfig = JSON.parse(tscConfigRaw);
    const plugins = (_a = tscConfig === null || tscConfig === void 0 ? void 0 : tscConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.plugins;
    return plugins === null || plugins === void 0 ? void 0 : plugins.find((plugin) => plugin.name === constants_1.PLUGIN_NAME ||
        (process.env.NODE_ENV === 'test' && plugin.name === '../../dist/plugin'));
}
exports.getPluginConfig = getPluginConfig;
