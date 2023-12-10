"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileOnPath = void 0;
const utils_1 = require("./utils");
const getAbsolutePath_1 = require("./getAbsolutePath");
const utils_2 = require("./utils");
function isFileOnPath(_a) {
    var _b;
    var { filePath, targetPath, projectPath = (_b = (0, utils_2.getProjectPathFromArgs)()) !== null && _b !== void 0 ? _b : process.cwd(), } = _a;
    if (!projectPath) {
        return false;
    }
    const absolutePathToStrictFiles = (0, getAbsolutePath_1.getAbsolutePath)(projectPath, targetPath);
    return (0, utils_1.getPosixFilePath)(filePath).startsWith((0, utils_1.getPosixFilePath)(absolutePathToStrictFiles));
}
exports.isFileOnPath = isFileOnPath;
