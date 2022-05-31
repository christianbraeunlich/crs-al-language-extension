'use strict';

import path = require('path');
import { exit } from 'process';
import * as vscode from 'vscode';

export function ManageTestDependencies() {
    
    let workspaceAppManifest = path.join(vscode.workspace.workspaceFolders[0].uri.path, 'app.json');
    workspaceAppManifest = workspaceAppManifest.substring(1);
    vscode.window.showInformationMessage(workspaceAppManifest);

    vscode.workspace.openTextDocument(workspaceAppManifest).then((document) => {
        vscode.window.showInformationMessage('document');
        if (document.isClosed) {
            vscode.window.showInformationMessage('file is closed');
        }
        vscode.window.showInformationMessage(document.fileName);
        let text = document.getText();
        
        vscode.window.showInformationMessage(text.length.toString());
    });
}

function openQuickPick() {
    const target = vscode.window.showQuickPick(
        [
            { label: 'Tests-Bank', description: 'Testing Sales Header', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Cash Flow', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Cost Accounting', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-CRM integration', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Data Exchange', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Dimension', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-ERM', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Fixed Asset', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-General Journal', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Graph', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Integration', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Invoicing', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Job', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Local', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Marketing', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Misc', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Monitor Sensitive Fields', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Permissions', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Physical Inventory', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Prepayment', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Rapid Start', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Report', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Resource', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Reverse', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-SCM', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-SINGLESERVER', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-SMB', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-SMTP', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-TestLibraries', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Upgrade', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-User', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-VAT', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Tests-Workflow', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Any', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Library Assert', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Library Variable Storage', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'},
            { label: 'Permissions Mock', description: 'Testing Graph API', picked: false, alwaysShow: true, detail: 'Some additional details'}
        ],
        {placeHolder: 'Select the view to show when opening a window.', canPickMany: true}
    );
}