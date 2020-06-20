"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.goToImpl', (param) => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.selection.isEmpty) {
            const position = editor.selection.active;
            vscode.commands.executeCommand("editor.action.goToImplementation", param, position)
                .then((result) => { console.log(result); }, (error) => { console.log(error); });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map