"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noStrictFilesError = exports.notConfiguredError = void 0;
exports.notConfiguredError = `
typescript-strict-plugin isn't configured in tsconfig.json
        
Please add following configuration:
{
  "compilerOptions": {
    ...
    "plugins": [{
      "name": "typescript-strict-plugin"
    }]
  },
}
`;
exports.noStrictFilesError = `
Project does not contain any strict files.
`;
