import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

export function showSuccessPage() {
    const htmlPath = path.join(
        import.meta.dirname,
        "../html/success.html"
    );

    const htmlPath1 = path.join(
        process.cwd(),
        "src",
        "V5",
        "ForExplorerCommands",
        "InitSimple",
        "html",
        "success.html"
    );

    const htmlContent = fs.readFileSync(htmlPath, "utf8");

    const panel = vscode.window.createWebviewPanel(
        "ksExpressSuccess",
        "KS Express Boilerplate",
        vscode.ViewColumn.One,
        {}
    );

    panel.webview.html = htmlContent;
}