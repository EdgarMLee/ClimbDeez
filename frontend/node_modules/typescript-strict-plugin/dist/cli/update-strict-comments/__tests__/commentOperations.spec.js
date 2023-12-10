"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_1 = require("jest-mock");
const fs_1 = require("fs");
const commentOperations_1 = require("../commentOperations");
jest.mock('fs', () => ({
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));
const readFileSyncMock = (0, jest_mock_1.mocked)(fs_1.readFileSync);
const writeFileSyncMock = (0, jest_mock_1.mocked)(fs_1.writeFileSync);
describe('insertIgnoreComment', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should insert comment', () => {
        // given
        readFileSyncMock.mockReturnValue('const x = 0;');
        // when
        (0, commentOperations_1.insertIgnoreComment)('file.ts');
        // then
        expect(writeFileSyncMock).toBeCalledWith('file.ts', '// @ts-strict-ignore\nconst x = 0;');
    });
});
describe('removeStrictComment', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should remove comment', () => {
        // given
        readFileSyncMock.mockReturnValue('// @ts-strict\nconst x = 0;');
        // when
        (0, commentOperations_1.removeStrictComment)('file.ts');
        // then
        expect(writeFileSyncMock).toBeCalledWith('file.ts', 'const x = 0;');
    });
    it('should not change file content without strict comment', () => {
        // given
        readFileSyncMock.mockReturnValue('const x = 0;');
        // when
        (0, commentOperations_1.removeStrictComment)('file.ts');
        // then
        expect(writeFileSyncMock).not.toBeCalled();
    });
});
