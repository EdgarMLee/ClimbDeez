"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileStrict = void 0;
const isFileStrictByPath_1 = require("./isFileStrictByPath");
const constants_1 = require("./constants");
const isFileExcludedByPath_1 = require("./isFileExcludedByPath");
// Common logic determining whether file is strict or not
function isFileStrict({ filePath, config, projectPath, isCommentPresent, }) {
    var _a, _b;
    if (isCommentPresent(constants_1.TS_STRICT_IGNORE_COMMENT, filePath)) {
        return false;
    }
    if (isCommentPresent(constants_1.TS_STRICT_COMMENT, filePath)) {
        return true;
    }
    const configExclude = (_a = config === null || config === void 0 ? void 0 : config.exclude) !== null && _a !== void 0 ? _a : [];
    if ((0, isFileExcludedByPath_1.isFileExcludedByPath)({
        filePath,
        configExclude,
        projectPath,
    })) {
        return false;
    }
    const configPaths = (_b = config === null || config === void 0 ? void 0 : config.paths) !== null && _b !== void 0 ? _b : [];
    const fileStrictByPath = (0, isFileStrictByPath_1.isFileStrictByPath)({ filePath, configPaths, projectPath });
    if (configPaths.length > 0 && !fileStrictByPath) {
        return false;
    }
    return true;
}
exports.isFileStrict = isFileStrict;
