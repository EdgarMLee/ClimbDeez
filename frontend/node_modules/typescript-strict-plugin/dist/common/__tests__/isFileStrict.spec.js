"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFileStrict_1 = require("../isFileStrict");
const isFileOnPath_1 = require("../isFileOnPath");
const jest_mock_1 = require("jest-mock");
jest.mock('../isFileOnPath', () => ({
    isFileOnPath: jest.fn(),
}));
const isFileOnPathMock = (0, jest_mock_1.mocked)(isFileOnPath_1.isFileOnPath);
const isCommentPresent = jest.fn();
const filePath = 'filePath';
describe('isFileStrict', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        isFileOnPathMock.mockImplementation(({ targetPath }) => targetPath === filePath);
        isCommentPresent.mockReturnValue(false);
    });
    it('should return false when ignore comment is present', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict-ignore');
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent });
        // then
        expect(result).toBe(false);
    });
    it('should return true when strict comment is present', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict');
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent });
        // then
        expect(result).toBe(true);
    });
    it('should return true when strict comment is present and file is excluded', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict');
        const config = {
            exclude: [filePath],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(true);
    });
    it('should return false when both strict and ignore update-strict-comments are present', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict' || comment === '@ts-strict-ignore');
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent });
        // then
        expect(result).toBe(false);
    });
    it('should return true when file is on path', () => {
        // given
        const config = {
            paths: ['otherFilePath', filePath, 'otherFilePath'],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(true);
    });
    it('should return false when file is not on path', () => {
        // given
        const config = {
            paths: ['otherFilePath', 'otherFilePath'],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(false);
    });
    it('should return true when file is not on path and contains strict comment', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict');
        const config = {
            paths: ['otherFilePath', 'otherFilePath'],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(true);
    });
    it('should return false when file is on path and contains ignore comment', () => {
        // given
        isCommentPresent.mockImplementation((comment) => comment === '@ts-strict-ignore');
        const config = {
            paths: ['otherFilePath', filePath, 'otherFilePath'],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(false);
    });
    it('should return false when file is on path and in exclude', () => {
        // given
        const config = {
            paths: ['otherFilePath', filePath, 'otherFilePath'],
            exclude: [filePath],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(false);
    });
    it('should return true when path config is empty', () => {
        // given
        const config = {
            paths: [],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(true);
    });
    it('should return false when path config is empty and file is excluded', () => {
        // given
        const config = {
            paths: [],
            exclude: [filePath],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(false);
    });
    it('should return true when path config is empty and different file is excluded (check for false-positive)', () => {
        // given
        const config = {
            paths: [],
            exclude: ['otherFile'],
        };
        // when
        const result = (0, isFileStrict_1.isFileStrict)({ filePath, isCommentPresent, config });
        // then
        expect(result).toBe(true);
    });
});
