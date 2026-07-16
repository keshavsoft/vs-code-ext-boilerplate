export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    inProcessPath,
    generateFunc,
    inFolderName
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating Endpoints..."
    });

    try {
        const funcToRun = generateFunc({
            showLog: false,
            isAnnounce: false,
            folderName: inFolderName || "",
            inProcessPath
        });

        //       folderName = "",
        // isAnnounce = false,
        // showLog = false,
        // inProcessPath

        // await funcToRun({
        //     showLog: true,
        //     isAnnounce: true,
        //     folderName: inFolderName || "",
        //     toPath
        // });

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="font-semibold mb-2">
                    ✅ Generation Complete
                </div>
                <div><b>Action:</b> ${actionLabel}</div>
                ${tableName ? `<div><b>Table:</b> ${tableName}</div>` : ""}
                <div><b>Output:</b> ${inProcessPath}</div>
            `
        });
    } catch (error) {
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
