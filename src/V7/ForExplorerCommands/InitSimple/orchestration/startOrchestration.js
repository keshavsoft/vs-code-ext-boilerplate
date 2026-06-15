import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { runPrechecks } from '../services/precheck.js';
import { showSuccessPage } from '../services/showSuccessPage.js';

export async function startOrchestration(uri) {
    try {
        const targetPath = uri.fsPath;

        runPrechecks({ targetPath });

        copyTemplate({ targetPath });

        showSuccessPage();

        finalize({
            message: `Node API initialized successfully 🚀\nFiles created: package.json, app.js\nLocation: ${targetPath}`
        });
    } catch (error) {
        fail(error);
    };
};