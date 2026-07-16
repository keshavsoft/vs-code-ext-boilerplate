import { labManagement } from "@keshavsoft-org/express-todo";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = ({ panel, inProcessPath, inFolderName }) => {
    executeGenerationTask({
        panel,
        actionLabel: "labManagement",
        inProcessPath,
        generateFunc: labManagement,
        inFolderName
    });
};

export default startFunc;
