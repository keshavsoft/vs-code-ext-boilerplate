import { withMail } from "@keshavsoft-org/express-todo";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = ({ panel, inProcessPath, inFolderName }) => {
    executeGenerationTask({
        panel,
        actionLabel: "withMail",
        inProcessPath,
        generateFunc: withMail,
        inFolderName
    });
};

export default startFunc;
