"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const getAbsolutePath_1 = require("../getAbsolutePath");
const jest_mock_1 = require("jest-mock");
const isFileOnPath_1 = require("../isFileOnPath");
jest.mock('../utils', () => ({
    ...jest.requireActual('../utils'),
    getProjectPathFromArgs: jest.fn(),
}));
jest.mock('../getAbsolutePath', () => ({
    getAbsolutePath: jest.fn(),
}));
const getProjectPathFromArgsMock = (0, jest_mock_1.mocked)(utils_1.getProjectPathFromArgs);
const getAbsolutePathMock = (0, jest_mock_1.mocked)(getAbsolutePath_1.getAbsolutePath);
const projectPathFromArgs = './defined_project_path';
describe('isFileOnPath', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        getProjectPathFromArgsMock.mockReturnValue(projectPathFromArgs);
        getAbsolutePathMock.mockReturnValue('/some_file_path/lib_dir');
    });
    it('when projectPath argument used, prefer argument value', () => {
        // given
        const projectPath = '/some_path';
        // when
        (0, isFileOnPath_1.isFileOnPath)({
            filePath: '/some_file_path/lib_dir/file.ts',
            targetPath: './lib_dir',
            projectPath,
        });
        // then
        expect(getAbsolutePathMock).toHaveBeenCalledTimes(1);
        expect(getAbsolutePathMock).toHaveBeenCalledWith(projectPath, './lib_dir');
    });
    it('when getProjectPathFromArgs is defined, use defined value', () => {
        //when
        (0, isFileOnPath_1.isFileOnPath)({ filePath: '/some_file_path/lib_dir/file.ts', targetPath: './lib_dir' });
        // then
        expect(getAbsolutePathMock).toHaveBeenCalledTimes(1);
        expect(getAbsolutePathMock).toHaveBeenCalledWith(projectPathFromArgs, './lib_dir');
        expect(projectPathFromArgs).not.toEqual(process.cwd());
    });
    it('when getProjectPathFromArgs is undefined, fallback to current working directory to match', () => {
        // given
        getProjectPathFromArgsMock.mockReturnValue(undefined);
        const cwd = process.cwd();
        // when
        (0, isFileOnPath_1.isFileOnPath)({ filePath: '/some_file_path/lib_dir/file.ts', targetPath: './lib_dir' });
        // then
        expect(getAbsolutePathMock).toHaveBeenCalledTimes(1);
        expect(getAbsolutePathMock).toHaveBeenCalledWith(cwd, './lib_dir');
    });
});
