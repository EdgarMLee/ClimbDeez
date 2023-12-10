"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliStrictFileChecker = void 0;
const isFileStrict_1 = require("../common/isFileStrict");
const isCommentPresent_1 = require("./isCommentPresent");
class CliStrictFileChecker {
    isFileStrict(filePath, config) {
        return (0, isFileStrict_1.isFileStrict)({
            filePath,
            config,
            isCommentPresent: isCommentPresent_1.isCommentPresent,
        });
    }
}
exports.CliStrictFileChecker = CliStrictFileChecker;
