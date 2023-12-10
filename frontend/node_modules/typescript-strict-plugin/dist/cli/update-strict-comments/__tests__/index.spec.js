"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPluginConfig_1 = require("../../getPluginConfig");
const findStrictFiles_1 = require("../../findStrictFiles");
const updateStrictComments_1 = require("../updateStrictComments");
const index_1 = require("../index");
jest.mock('../../getPluginConfig', () => ({
    getPluginConfig: jest.fn(),
}));
jest.mock('../../findStrictFiles', () => ({
    findStrictFiles: jest.fn(),
}));
jest.mock('../updateStrictComments', () => ({
    updateStrictComments: jest.fn(),
}));
const getPluginConfigMock = jest.mocked(getPluginConfig_1.getPluginConfig);
const findStrictFilesMock = jest.mocked(findStrictFiles_1.findStrictFiles);
const updateStrictCommentsMock = jest.mocked(updateStrictComments_1.updateStrictComments);
jest.spyOn(process, 'exit').mockImplementation();
jest.spyOn(console, 'log').mockImplementation();
describe('update-strict-comments root', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        getPluginConfigMock.mockResolvedValue({});
        updateStrictCommentsMock.mockResolvedValue({ updatedFileCount: 0 });
    });
    it('should display no config error', async () => {
        // given
        getPluginConfigMock.mockResolvedValue(undefined);
        // when
        await (0, index_1.run)();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/typescript-strict-plugin isn't configured in tsconfig.json/i));
        expect(process.exit).toHaveBeenCalledWith(1);
    });
    it('should display no strict files error', async () => {
        // given
        getPluginConfigMock.mockResolvedValue({});
        findStrictFilesMock.mockResolvedValue([]);
        // when
        await (0, index_1.run)();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Project does not contain any strict files/i));
        expect(process.exit).toHaveBeenCalledWith(1);
    });
    it('should display a correct number of strict files', async () => {
        // given
        findStrictFilesMock.mockResolvedValue(['1.ts', '2.ts', '3.ts']);
        // when
        await (0, index_1.run)();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Found 3 strict files/i));
    });
    it('should display a correct number of updated files', async () => {
        // given
        findStrictFilesMock.mockResolvedValue(['1.ts', '2.ts', '3.ts']);
        updateStrictCommentsMock.mockResolvedValue({ updatedFileCount: 3 });
        // when
        await (0, index_1.run)();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Updated comments in 3 files/i));
    });
});
