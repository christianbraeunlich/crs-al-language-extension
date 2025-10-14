import * as path from 'path';
import * as fs from 'fs';

import { runTests } from '@vscode/test-electron';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		// Try to use the installed VS Code executable
		const possibleVSCodePaths = [
			'C:\\Users\\' + process.env.USERNAME + '\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
			'C:\\Program Files\\Microsoft VS Code\\Code.exe',
			'C:\\Program Files (x86)\\Microsoft VS Code\\Code.exe'
		];

		let vscodeExecutablePath: string | undefined;
		for (const vscodePath of possibleVSCodePaths) {
			if (fs.existsSync(vscodePath)) {
				vscodeExecutablePath = vscodePath;
				console.log('Using installed VS Code at:', vscodePath);
				break;
			}
		}

		// Download VS Code, unzip it and run the integration test
		await runTests({
			vscodeExecutablePath,
			extensionDevelopmentPath,
			extensionTestsPath
		});
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
