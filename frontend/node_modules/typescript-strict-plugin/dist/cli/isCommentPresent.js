"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIgnoreCommentPresent = exports.isStrictCommentPresent = exports.isCommentPresent = void 0;
const fs_1 = require("fs");
const constants_1 = require("../common/constants");
function isCommentPresent(commentText, filePath) {
    const allLines = (0, fs_1.readFileSync)(filePath).toString().split('\n');
    const comments = allLines.filter((line) => line.startsWith('//'));
    return comments.some((comment) => Array.from(comment)
        .filter((char) => char !== '/')
        .join('')
        .trim()
        .split(' ')
        .includes(commentText));
}
exports.isCommentPresent = isCommentPresent;
function isStrictCommentPresent(filePath) {
    return isCommentPresent(constants_1.TS_STRICT_COMMENT, filePath);
}
exports.isStrictCommentPresent = isStrictCommentPresent;
function isIgnoreCommentPresent(filePath) {
    return isCommentPresent(constants_1.TS_STRICT_IGNORE_COMMENT, filePath);
}
exports.isIgnoreCommentPresent = isIgnoreCommentPresent;
