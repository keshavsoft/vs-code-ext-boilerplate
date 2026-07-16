import { tallyServer } from "@keshavsoft-org/express-todo";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = ({ panel, inProcessPath, inFolderName }) => {
    executeGenerationTask({
        panel,
        actionLabel: "tallyServer",
        inProcessPath,
        generateFunc: tallyServer,
        inFolderName
    });
};

export default startFunc;
