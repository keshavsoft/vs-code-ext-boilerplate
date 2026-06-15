import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import { withMail } from "@keshavsoft-org/express-todo";

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = fs.readFileSync(
        path.join(import.meta.dirname, "ui", "index.html"),
        "utf8"
    );
    panel.webview.onDidReceiveMessage(async (message) => {
        const userRootFolder =
            vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

        switch (message.action) {
            case "withMail":

                panel.webview.postMessage({
                    type: "status",
                    text: "⏳ Generating CRUD..."
                });

                await withMail({
                    inProcessPath: userRootFolder
                });

                panel.webview.postMessage({
                    type: "complete",
                    html: `
        <div class="font-semibold mb-2">
            ✅ Generation Complete
        </div>

        <div><b>Action:</b> With Header</div>
        <div><b>Output:</b> ${uri.fsPath}</div>
    `
                });

                break;
        };
    });
};

export default activateHtml;