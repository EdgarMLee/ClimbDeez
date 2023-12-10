"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectPathFromArgs = exports.isFile = exports.pluralize = exports.getPosixFilePath = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getPosixFilePath(filePath) {
    return filePath.split(path_1.default.sep).join(path_1.default.posix.sep);
}
exports.getPosixFilePath = getPosixFilePath;
function pluralize(word, count) {
    return count === 1 ? word : `${word}s`;
}
exports.pluralize = pluralize;
function isFile(path) {
    try {
        const stats = fs_1.default.statSync(path);
        return stats.isFile();
    }
    catch (_a) {
        return false;
    }
}
exports.isFile = isFile;
function getProjectPathFromArgs() {
    const args = process.argv.slice(2);
    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        if (arg === '--project') {
            return path_1.default.dirname(args[index + 1]);
        }
    }
}
exports.getProjectPathFromArgs = getProjectPathFromArgs;
