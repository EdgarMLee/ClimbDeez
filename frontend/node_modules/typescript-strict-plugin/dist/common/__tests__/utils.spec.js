"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
let globalProcessArgv;
describe('utils', () => {
    describe('getProjectPathFromArgs', () => {
        beforeEach(() => {
            globalProcessArgv = process.argv;
        });
        afterEach(() => {
            process.argv = globalProcessArgv;
        });
        it('should return undefined if --project not present in path', () => {
            process.argv = [
                '/usr/bin/nodejs/18.7.0/bin/node',
                '/home/neenjaw/typescript-strict-plugin/node_modules/.bin/update-strict-comments',
            ];
            expect((0, utils_1.getProjectPathFromArgs)()).toEqual(undefined);
        });
        it('should return undefined if --project not present in path', () => {
            process.argv = [
                '/usr/bin/nodejs/18.7.0/bin/node',
                '/home/neenjaw/typescript-strict-plugin/node_modules/.bin/update-strict-comments',
                '--project',
                './some/inner/project/tsconfig.json',
            ];
            expect((0, utils_1.getProjectPathFromArgs)()).toEqual('./some/inner/project');
        });
    });
});
