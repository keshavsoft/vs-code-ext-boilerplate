import { tallyServer } from "@keshavsoft-org/express-todo";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "Add Table Name",
        tableName,
        toPath,
        generateFunc: tallyServer,
        inFolderName
    });
};

export default startFunc;
