import * as vscode from 'vscode';

import initSimpleCommand from './commands/initSimple.js';
import initSimpleWithUiCommand from './commands/initSimpleWithUi.js';

export const registerAllCommands = (context) => {
    const initSimple = vscode.commands.registerCommand('extension.simple', initSimpleCommand(context));
    const initSimpleWithUi = vscode.commands.registerCommand('extension.simpleWithCrud', initSimpleWithUiCommand(context));

    context.subscriptions.push(initSimple, initSimpleWithUi);
};
