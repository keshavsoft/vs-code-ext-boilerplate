import addTableNameAction from "./actions/tallyServer.js";
import labManagementAction from "./actions/labManagement.js";
import sendWithMailAction from "./actions/sendWithMail.js";

export async function handleWebviewMessage({ message, panel, port, inTargetPath }) {

    switch (message.action) {
        case "sendWithMail":
            await sendWithMailAction({
                panel,
                inProcessPath: inTargetPath,
                inFolderName: message.inFolderName
            });

            break;

        case "tallyServer":
            await addTableNameAction({
                panel,
                inProcessPath: inTargetPath,
                inFolderName: message.inFolderName
            });
            break;

        case "labManagement":
            labManagementAction({
                panel,
                inProcessPath: inTargetPath,
                inFolderName: message.inFolderName
            });

            break;
    };
}
