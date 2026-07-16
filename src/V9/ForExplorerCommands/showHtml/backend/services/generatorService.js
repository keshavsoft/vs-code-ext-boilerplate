export async function executeGenerationTask({
    panel,
    actionLabel,
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

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="font-semibold mb-2">
                    ✅ Generation Complete
                </div>
                <div><b>Action:</b> ${actionLabel}</div>
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
