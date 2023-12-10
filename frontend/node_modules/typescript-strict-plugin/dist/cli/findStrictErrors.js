"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStrictErrors = void 0;
const compile_1 = require("./typescript/compile");
const path_1 = __importDefault(require("path"));
const waitWithSpinner_1 = require("./waitWithSpinner");
async function findStrictErrors(strictPaths) {
    if (strictPaths.length === 0) {
        return [];
    }
    const tscErrorMap = await (0, waitWithSpinner_1.waitWithSpinner)(compile_1.compile, 'Compiling with strict mode...');
    return strictPaths.flatMap((filePath) => {
        var _a;
        return (_a = tscErrorMap.get(path_1.default.resolve(filePath))) !== null && _a !== void 0 ? _a : [];
    });
}
exports.findStrictErrors = findStrictErrors;
