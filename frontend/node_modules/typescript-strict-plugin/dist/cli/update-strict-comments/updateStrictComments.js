"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStrictComments = void 0;
const getFilePaths_1 = require("./getFilePaths");
const isCommentPresent_1 = require("../isCommentPresent");
const isFileStrictByPath_1 = require("../../common/isFileStrictByPath");
const commentOperations_1 = require("./commentOperations");
async function updateStrictComments(filePaths, configPaths) {
    const filesWithErrors = await (0, getFilePaths_1.getFilePathsWithErrors)(filePaths);
    const filesOnPathWithoutErrors = (0, getFilePaths_1.getFilePathsOnPathWithoutErrors)(filePaths, filesWithErrors, configPaths);
    let updatedFileCount = 0;
    filesOnPathWithoutErrors.forEach((filePath) => {
        if (shouldRemoveStrictComment(filePath, configPaths)) {
            (0, commentOperations_1.removeStrictComment)(filePath);
            updatedFileCount++;
        }
    });
    filesWithErrors.forEach((filePath) => {
        const insertIgnore = shouldInsertIgnoreComment(filePath, configPaths);
        const removeStrict = shouldRemoveStrictComment(filePath, configPaths);
        if (insertIgnore) {
            (0, commentOperations_1.insertIgnoreComment)(filePath);
        }
        if (removeStrict) {
            (0, commentOperations_1.removeStrictComment)(filePath);
        }
        if (removeStrict || insertIgnore) {
            updatedFileCount++;
        }
    });
    return { updatedFileCount };
}
exports.updateStrictComments = updateStrictComments;
function shouldInsertIgnoreComment(filePath, configPaths) {
    return (0, isFileStrictByPath_1.isFileStrictByPath)({ filePath, configPaths }) && !(0, isCommentPresent_1.isIgnoreCommentPresent)(filePath);
}
function shouldRemoveStrictComment(filePath, configPaths) {
    return (0, isFileStrictByPath_1.isFileStrictByPath)({ filePath, configPaths }) && (0, isCommentPresent_1.isStrictCommentPresent)(filePath);
}
