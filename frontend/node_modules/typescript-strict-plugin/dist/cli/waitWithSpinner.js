"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitWithSpinner = void 0;
const ora_1 = __importDefault(require("ora"));
async function waitWithSpinner(callback, message) {
    const spinner = (0, ora_1.default)(message).start();
    const callbackResult = await callback();
    spinner.stop();
    return callbackResult;
}
exports.waitWithSpinner = waitWithSpinner;
