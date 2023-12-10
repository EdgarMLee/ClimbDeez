"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_1 = require("jest-mock");
const isCommentPresent_1 = require("../../isCommentPresent");
const getFilePaths_1 = require("../getFilePaths");
const updateStrictComments_1 = require("../updateStrictComments");
const commentOperations_1 = require("../commentOperations");
jest.mock('../../findStrictErrors', () => ({
    findStrictErrors: jest.fn(),
}));
jest.mock('../getFilePaths', () => ({
    getFilePathsWithErrors: jest.fn(),
    getFilePathsOnPathWithoutErrors: jest.fn(),
}));
jest.mock('../../isCommentPresent', () => ({
    isStrictCommentPresent: jest.fn(),
    isIgnoreCommentPresent: jest.fn(),
}));
jest.mock('../commentOperations', () => ({
    removeStrictComment: jest.fn(),
    insertIgnoreComment: jest.fn(),
}));
const getFilePathsWithErrorsMock = (0, jest_mock_1.mocked)(getFilePaths_1.getFilePathsWithErrors);
const getFilePathsOnPathWithoutErrorsMock = (0, jest_mock_1.mocked)(getFilePaths_1.getFilePathsOnPathWithoutErrors);
const isStrictCommentPresentMock = (0, jest_mock_1.mocked)(isCommentPresent_1.isStrictCommentPresent);
const isIgnoreCommentPresentMock = (0, jest_mock_1.mocked)(isCommentPresent_1.isIgnoreCommentPresent);
describe('updateStrictComments', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        getFilePathsWithErrorsMock.mockResolvedValue([]);
        getFilePathsOnPathWithoutErrorsMock.mockReturnValue([]);
    });
    it('should not change comments when there is no strict errors in file', async () => {
        // when
        const { updatedFileCount } = await (0, updateStrictComments_1.updateStrictComments)(['/dir/file.ts']);
        // then
        expect(commentOperations_1.removeStrictComment).not.toBeCalled();
        expect(commentOperations_1.insertIgnoreComment).not.toBeCalled();
        expect(updatedFileCount).toBe(0);
    });
    it('should not change comments when file contains errors and is not on path', async () => {
        // given
        getFilePathsWithErrorsMock.mockResolvedValue(['/dir/file.ts']);
        // when
        const { updatedFileCount } = await (0, updateStrictComments_1.updateStrictComments)(['/dir/file.ts'], ['/other-dir']);
        // then
        expect(commentOperations_1.removeStrictComment).not.toBeCalled();
        expect(commentOperations_1.insertIgnoreComment).not.toBeCalled();
        expect(updatedFileCount).toBe(0);
    });
    it('should insert ignore comment when file contains errors', async () => {
        // given
        getFilePathsWithErrorsMock.mockResolvedValue(['/dir/file.ts']);
        isIgnoreCommentPresentMock.mockReturnValue(false);
        // when
        const { updatedFileCount } = await (0, updateStrictComments_1.updateStrictComments)(['/dir/file2.ts']);
        // then
        expect(commentOperations_1.removeStrictComment).not.toBeCalled();
        expect(commentOperations_1.insertIgnoreComment).toBeCalledTimes(1);
        expect(updatedFileCount).toBe(1);
    });
    it('should insert ignore comment when file contains errors and is on configured path', async () => {
        // given
        getFilePathsWithErrorsMock.mockResolvedValue(['/dir/file.ts']);
        isIgnoreCommentPresentMock.mockReturnValue(false);
        // when
        const { updatedFileCount } = await (0, updateStrictComments_1.updateStrictComments)(['/dir/file.ts'], ['/dir']);
        // then
        expect(commentOperations_1.removeStrictComment).not.toBeCalled();
        expect(commentOperations_1.insertIgnoreComment).toBeCalledTimes(1);
        expect(updatedFileCount).toBe(1);
    });
    it('should remove strict comment when file is on configured path', async () => {
        // given
        getFilePathsOnPathWithoutErrorsMock.mockReturnValue(['/dir/file.ts']);
        isStrictCommentPresentMock.mockReturnValue(true);
        isIgnoreCommentPresentMock.mockReturnValue(false);
        // when
        const { updatedFileCount } = await (0, updateStrictComments_1.updateStrictComments)(['/dir/file.ts'], ['/dir']);
        // then
        expect(commentOperations_1.removeStrictComment).toBeCalledTimes(1);
        expect(commentOperations_1.insertIgnoreComment).not.toBeCalled();
        expect(updatedFileCount).toBe(1);
    });
});
