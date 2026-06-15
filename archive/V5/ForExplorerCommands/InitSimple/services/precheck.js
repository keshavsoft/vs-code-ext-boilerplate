// src/V2/InitJs/services/precheck.js
import fs from 'fs';

export function runPrechecks({ targetPath }) {
    if (fs.existsSync(targetPath) && fs.readdirSync(targetPath).length > 0) {
        throw new Error('FOLDER_NOT_EMPTY');
    };

    return true;
};