"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginStrictFileChecker = void 0;
const isFileStrict_1 = require("../common/isFileStrict");
class PluginStrictFileChecker {
    constructor(info) {
        this.info = info;
        this.isCommentPresent = (comment, filePath) => {
            const tsStrictComments = this.info.languageService.getTodoComments(filePath, [
                { text: comment, priority: 0 },
            ]);
            return tsStrictComments.length > 0;
        };
        this.currentDirectory = info.project.getCurrentDirectory();
        this.config = info.config;
    }
    isFileStrict(filePath) {
        return (0, isFileStrict_1.isFileStrict)({
            filePath,
            config: this.config,
            isCommentPresent: this.isCommentPresent,
            projectPath: this.currentDirectory,
        });
    }
}
exports.PluginStrictFileChecker = PluginStrictFileChecker;
