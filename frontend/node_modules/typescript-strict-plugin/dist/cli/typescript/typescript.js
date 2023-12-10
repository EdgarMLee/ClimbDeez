"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = exports.showConfig = void 0;
const execa_1 = __importDefault(require("execa"));
const showConfig = async () => {
    const output = await (0, execa_1.default)('tsc', [...process.argv.slice(2), '--showConfig'], {
        all: true,
        preferLocal: true,
    });
    return output.stdout;
};
exports.showConfig = showConfig;
let compilerOutputCache = '';
const compile = async () => {
    if (compilerOutputCache) {
        return compilerOutputCache;
    }
    try {
        const compilerResult = await (0, execa_1.default)('tsc', [...process.argv.slice(2), '--strict', '--noEmit', '--pretty', 'false', '--listFiles'], {
            all: true,
            preferLocal: true,
        });
        compilerOutputCache = compilerResult.stdout;
    }
    catch (error) {
        if (isExecaError(error) && error.all) {
            if (wasCompileAborted(error)) {
                console.log(`💥 Typescript task was aborted. Full error log: `, error.all);
                process.exit(error.exitCode);
            }
            compilerOutputCache = error.all;
        }
    }
    return compilerOutputCache;
};
exports.compile = compile;
function isExecaError(error) {
    return typeof (error === null || error === void 0 ? void 0 : error.all) === 'string';
}
function wasCompileAborted(error) {
    return error.signal === 'SIGABRT' || error.exitCode === 134;
}
