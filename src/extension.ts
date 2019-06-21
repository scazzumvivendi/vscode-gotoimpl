import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}
