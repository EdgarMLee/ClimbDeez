"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileExcludedByPath = void 0;
const isFileOnPath_1 = require("./isFileOnPath");
function isFileExcludedByPath({ filePath, projectPath, configExclude, }) {
    if (configExclude === undefined) {
        return false;
    }
    return configExclude === null || configExclude === void 0 ? void 0 : configExclude.some((path) => (0, isFileOnPath_1.isFileOnPath)({
        filePath,
        targetPath: path,
        projectPath,
    }));
}
exports.isFileExcludedByPath = isFileExcludedByPath;
