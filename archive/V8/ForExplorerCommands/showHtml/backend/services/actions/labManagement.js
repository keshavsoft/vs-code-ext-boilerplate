import { labManagement } from "@keshavsoft-org/express-todo";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, inProcessPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "Add Table Name",
        tableName,
        inProcessPath,
        generateFunc: labManagement,
        inFolderName
    });
};

export default startFunc;
