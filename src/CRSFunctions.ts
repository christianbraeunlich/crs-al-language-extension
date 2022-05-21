import * as vscode from 'vscode';
import { Settings } from './Settings';
import { DynamicsNAV } from './DynamicsNAV';
import { WorkspaceFiles } from './WorkspaceFiles';
import { SnippetFunctions } from './SnippetFunctions';
import * as fs from 'fs';
import { NAVObject } from './NAVObject';
import * as path from 'path'
import { MSDocs } from './MSDocs';
import { Google } from './Google';
import * as CRSStatusBar from './UI/CRSStatusBar';
import * as Configuration from './Configuration';
import { ALCExe } from './ALCExe';


export function ManageTestDepdendency() {
    console.log('Running: ManageTestDepdendency');

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

    console.log('Done: ManageTestDepdendency');
}

export function InstallWaldosModules() {
    console.log('Running: InstallWaldosModules');

    vscode.window.showErrorMessage('This function has been temporarily disabled');

    console.log('Done: InstallWaldosModules');
}

export async function CreateGraphVizDependencyGraph() {
    console.log('Running: CreateGraphVizDependencyGraph');

    await WorkspaceFiles.CreateGraphVizDependencyGraph();

    console.log('Done: CreateGraphVizDependencyGraph');
}

export async function CompileDGML() {
    console.log('Running: CompileDGML');

    ALCExe.CompileDGML();

    console.log('Done: CompileDGML');
}

export function RunCurrentObjectWeb(currFile: vscode.Uri) {
    console.log('Running: RunCurrentObjectWeb');
    let currentdocument = currFile;

    if (!currentdocument) {
        currentdocument = vscode.window.activeTextEditor.document.uri
    }
    let navObject = new NAVObject(fs.readFileSync(currentdocument.fsPath).toString(), Settings.GetConfigSettings(currentdocument), path.basename(currentdocument.fsPath));

    let objectId = navObject.objectType.toLowerCase().endsWith('extension') ? navObject.extendedObjectId : navObject.objectId;
    let objectType = navObject.objectType.toLowerCase().endsWith('extension') ? navObject.objectType.toLowerCase().replace('extension', '') : navObject.objectType
    if (objectId) {
        DynamicsNAV.RunObjectInWebClient(objectType, objectId, 'WebClient');
    }

    console.log('Done: RunCurrentObjectWeb')
}

export async function PublishAndRunCurrentObjectWeb(currFile: vscode.Uri) {
    console.log('Running: PublishAndRunCurrentObjectWeb');

    let currentdocument = currFile;

    if (!currentdocument) {
        currentdocument = vscode.window.activeTextEditor.document.uri
    }
    let navObject = new NAVObject(fs.readFileSync(currentdocument.fsPath).toString(), Settings.GetConfigSettings(currentdocument), path.basename(currentdocument.fsPath));

    let objectId = navObject.objectType.toLowerCase().endsWith('extension') ? navObject.extendedObjectId : navObject.objectId;
    let objectType = navObject.objectType.toLowerCase().endsWith('extension') ? navObject.objectType.toLowerCase().replace('extension', '') : navObject.objectType
    if (objectId) {
        await vscode.commands.executeCommand('al.publishNoDebug');
        DynamicsNAV.RunObjectInWebClient(objectType, objectId, 'WebClient');
    }

    console.log('Done: PublishAndRunCurrentObjectWeb')
}

export function RunObjectWeb() {
    console.log('Running: RunObjectWeb');

    vscode.window.showQuickPick(DynamicsNAV.GetRunWebObjectTypesAsQuickPickItem()).then(objecttype =>
        vscode.window.showInputBox({ prompt: 'ObjectID:' }).then(objectid =>
            DynamicsNAV.RunObjectInWebClient(objecttype, objectid, 'WebClient')));

    console.log('Done: RunObjectWeb')
}
export function RunTestTool() {
    console.log('Running: RunTestTool');

    DynamicsNAV.RunObjectInWebClient('Page', 130451, 'WebClient');

    console.log('Done: RunTestTool')
}

export function RunEventSubscribers() {
    console.log('Running: RunEventSubscribers');

    DynamicsNAV.RunObjectInWebClient('Page', 9510, 'WebClient');

    console.log('Done: RunEventSubscribers')
}

export function RunDatabaseLocks() {
    console.log('Running: RunDatabaseLocks');

    DynamicsNAV.RunObjectInWebClient('Page', 9511, 'WebClient');

    console.log('Done: RunDatabaseLocks')
}

export function RunObjectTablet() {
    console.log('Running: RunObjectTablet');

    vscode.window.showQuickPick(DynamicsNAV.GetRunWebObjectTypesAsQuickPickItem()).then(objecttype =>
        vscode.window.showInputBox({ prompt: 'ObjectID:' }).then(objectid =>
            DynamicsNAV.RunObjectInWebClient(objecttype, objectid, 'Tablet')));

    console.log('Done: RunObjectTablet')
}

export function RunObjectPhone() {
    console.log('Running: RunObjectPhone');

    vscode.window.showQuickPick(DynamicsNAV.GetRunWebObjectTypesAsQuickPickItem()).then(objecttype =>
        vscode.window.showInputBox({ prompt: 'ObjectID:' }).then(objectid =>
            DynamicsNAV.RunObjectInWebClient(objecttype, objectid, 'Phone')));

    console.log('Done: RunObjectPhone')
}

export function RunObjectWindows() {
    console.log('Running: RunObjectWindows');

    vscode.window.showQuickPick(DynamicsNAV.GetRunRTCObjectTypesAsQuickPickItem()).then(objecttype =>
        vscode.window.showInputBox({ prompt: 'ObjectID:' }).then(objectid =>
            DynamicsNAV.RunObjectInWindowsClient(objecttype, objectid)));

    console.log('Done: RunObjectWindows')
}

export function RenameCurrentFile() {
    console.log('Running: RenameCurrentFile');

    vscode.window.activeTextEditor.document.save().then(saved => {
        let oldFilename = vscode.window.activeTextEditor.document
        let newFileName = WorkspaceFiles.RenameFile(oldFilename.uri);

        if (oldFilename.uri.fsPath != newFileName) {
            WorkspaceFiles.openRenamedFile(newFileName);
        }
    })
    console.log('Done: RenameCurrentFile')
}

export function RenameAllFiles() {
    console.log('Running: RenameAllFiles');

    let mySettings = Settings.GetConfigSettings(null);
    let SkipWarningMessageOnRenameAll = mySettings[Settings.SkipWarningMessageOnRenameAll];

    if (!SkipWarningMessageOnRenameAll) {
        vscode.window.showWarningMessage('Are you sure to rename all files from all opened workspaces?', 'Yes', 'No').then((action: String) => {
            if (action === 'Yes') {
                WorkspaceFiles.RenameAllFiles();
                vscode.commands.executeCommand('workbench.action.closeAllEditors');
            }
        });
    }
    else
    {
        WorkspaceFiles.RenameAllFiles();
        vscode.commands.executeCommand('workbench.action.closeAllEditors');
    }
    
    console.log('Done: RenameAllFiles')
}

export function ReorganizeCurrentFile() {
    console.log('Running: ReorganizeCurrentFile');

    vscode.window.activeTextEditor.document.save().then(saved => {
        let newFileName = WorkspaceFiles.ReorganizeFile(vscode.window.activeTextEditor.document.uri);
        vscode.workspace.openTextDocument(newFileName).then(doc => vscode.window.showTextDocument(doc));
    })
    console.log('Done: ReorganizeCurrentFile')
}

export function ReorganizeAllFiles() {
    console.log('Running: ReorganizeAllFiles');

    vscode.window.showWarningMessage('Are you sure to reorganize all files from all opened workspaces?', 'Yes', 'No').then((action: String) => {
        if (action === 'Yes') {
            WorkspaceFiles.ReorganizeAllFiles();
            vscode.commands.executeCommand('workbench.action.closeAllEditors');
        }
    });

    console.log('Done: ReorganizeAllFiles')
}

export function SearchMicrosoftDocs() {
    console.log('Running: SearchMicrosoftDocs');

    let currentword = vscode.window.activeTextEditor ? getWord(vscode.window.activeTextEditor) : "";
    vscode.window.showInputBox({ value: currentword, prompt: "Search String:" }).then(SearchString =>
        MSDocs.OpenSearchUrl(SearchString));

    console.log('Done: SearchMicrosoftDocs');
}

export function SearchGoogle() {
    console.log('Running: SearchGoogle');

    let currentword = vscode.window.activeTextEditor ? getWord(vscode.window.activeTextEditor) : "";
    vscode.window.showInputBox({ value: currentword, prompt: "Search String:" }).then(SearchString =>
        Google.OpenSearchUrl(SearchString));

    console.log('Done: SearchGoogle');
}

export function SearchObjectNames() {
    console.log('Running: SearchObjectNames');

    let currentword = vscode.window.activeTextEditor ? getWord(vscode.window.activeTextEditor) : "";
    vscode.window.showInputBox({ value: currentword, prompt: "Search String:" }).then(SearchString =>
        DynamicsNAV.SearchObjectNames(SearchString));

    console.log('Done: SearchObjectNames');
}

export function SetupSnippets() {
    console.log('Running: SetupSnippets');

    SnippetFunctions.SetupDefaultAlSnippets();
    SnippetFunctions.SetupCRSAlSnippets();

    console.log('Done: SetupSnippets');
}

export function HandleOnSaveTextDocument() {
    console.log('Running: HandleOnSaveTextDocument');

    WorkspaceFiles.renameFileOnSave();

    console.log('Done: HandleOnSaveTextDocument');
}

/*** changed to onDidChangeActiveTextEditor eventhandler
 * @deprecated
 */
export function HandleOnOpenTextDocument() {
    console.log('Running: HandleOnOpenTextDocument');

    CRSStatusBar.toggleRunObjectFromStatusBar();

    console.log('Done: HandleOnOpenTextDocument')
}

export function HandleOnChangeActiveTextEditor(editor?: vscode.TextEditor) {
    console.log('Running: HandleOnChangeActiveTextEditor');

    CRSStatusBar.toggleRunObjectFromStatusBar(editor?.document);

    console.log('Done: HandleOnChangeActiveTextEditor')
}

export function ConfigureBestPracticeNaming() {
    console.log('Running: ConfigureBestPracticeNaming');

    Configuration.configureBestPracticesNaming();

    console.log('Done: ConfigureBestPracticeNaming')
}



function getWord(editor: vscode.TextEditor): string {
    const selection = editor.selection;
    const doc = editor.document;
    if (selection.isEmpty) {
        const cursorWordRange = doc.getWordRangeAtPosition(selection.active);

        if (cursorWordRange) {
            let newSe = new vscode.Selection(cursorWordRange.start.line, cursorWordRange.start.character, cursorWordRange.end.line, cursorWordRange.end.character);
            editor.selection = newSe;
            return editor.document.getText(editor.selection);

        } else {
            return '';
        }
    } else {
        return editor.document.getText(editor.selection);
    }
}