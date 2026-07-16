import * as vscode from 'vscode';

import initSimpleCommand from './commands/initSimple.js';
import initSimpleWithUiCommand from './commands/initSimpleWithUi.js';

import readHtml from './showHtml/backend/readHtml.js';

const registerAllCommands = (context) => {
    const initSimple = vscode.commands.registerCommand('extension.simple', initSimpleCommand(context));
    const initSimpleWithUi = vscode.commands.registerCommand('extension.simpleWithCrud', initSimpleWithUiCommand(context));

    context.subscriptions.push(initSimple, initSimpleWithUi);

    showHtmlFunc(context);
};

const showHtmlFunc = (context) => {
    const commandToRegister = "extension.showHtml";

    const showAll = vscode.commands.registerCommand(commandToRegister, (uri) => readHtml(context, uri));

    context.subscriptions.push(showAll);
};

export default registerAllCommands;