import addTableNameAction from "./actions/tallyServer.js";
import labManagementAction from "./actions/labManagement.js";

export async function handleWebviewMessage({ message, panel, port, inTargetPath }) {

    switch (message.action) {
        case "tallyServer":
            await addTableNameAction({
                panel,
                tableName: message.tableName,
                toPath,

                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;

        case "labManagement":
            await labManagementAction({
                panel,
                tableName: message.tableName,
                inProcessPath: inTargetPath,
                inFolderName: message.inFolderName,
                inPort: port
            });
            break;
    };
}
