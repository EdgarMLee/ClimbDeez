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
exports.findStrictFiles = void 0;
const utils_1 = require("../common/utils");
const typescript = __importStar(require("./typescript/typescript"));
const CliStrictFileChecker_1 = require("./CliStrictFileChecker");
const getPluginConfig_1 = require("./getPluginConfig");
async function findStrictFiles() {
    const filesCheckedByTS = await getFilesCheckedByTs();
    const cliStrictFileChecker = new CliStrictFileChecker_1.CliStrictFileChecker();
    const pluginConfig = await (0, getPluginConfig_1.getPluginConfig)();
    if (!pluginConfig) {
        return [];
    }
    return filesCheckedByTS.filter((filePath) => cliStrictFileChecker.isFileStrict(filePath, pluginConfig));
}
exports.findStrictFiles = findStrictFiles;
const filterOutNodeModulesFiles = (files) => {
    return files.filter((filePath) => !filePath.includes('/node_modules/'));
};
async function getFilesCheckedByTs() {
    const filesCheckedByTs = await typescript.compile();
    const filePaths = filesCheckedByTs.split(/\r?\n/).filter(utils_1.isFile).map(utils_1.getPosixFilePath);
    return filterOutNodeModulesFiles(filePaths);
}
