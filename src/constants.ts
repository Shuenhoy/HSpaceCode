export const extensionId = 'hspacecode';
export const publisherId = 'Shuenhoy';
export const extensionQualifiedId = `${publisherId}.${extensionId}`;
export const spaceCmdId = `${extensionId}.space`;
export enum CommandId {
	ShowSpaceMenu = "hspacecode.space",
	ShowMagitRefMenu = "hspacecode.showMagitRefMenu",

	Configure = "hspacecode.configure",
	ConfigureSettings = "hspacecode.configureSettings",
	ConfigureKeybindings = "hspacecode.configureKeybindings",

	OpenDocumentationUrl = "hspacecode.openDocumentationUrl",

	CopyPath = "hspacecode.copyPath",
	CopyPathWithLine = "hspacecode.copyPathWithLine",
	CopyPathWithLineColumn = "hspacecode.copyPathWithLineColumn",
	CopyDirectoryPath = "hspacecode.copyDirectoryPath",
	CopyRelativePath = "hspacecode.copyRelativePath",
	CopyRelativePathWithLine = "hspacecode.copyRelativePathWithLine",
	CopyRelativePathWithLineColumn = "hspacecode.copyRelativePathWithLineColumn",
	CopyRelativeDirectoryPath = "hspacecode.copyRelativeDirectoryPath",
	CopyFilename = "hspacecode.copyFilename",
	CopyFilenameBase = "hspacecode.copyFilenameBase",

	CopyWholeBuffer = "hspacecode.copyWholeBuffer",

	RegisterWhichKey = "whichkey.register",
	ShowWhichKey = "whichkey.show"
}
export enum GlobalState {
	SpacecodeVersion = 'vspacecodeVersion'
}
export enum ConfigKey {
	Bindings = "bindings",
	Overrides = "bindingOverrides",
	RefBindings = "magitRefBindings",
}

export const BindingsId = {
	VSpaceCode: `${extensionId}.${ConfigKey.Bindings}`,
	Overrides: `${extensionId}.${ConfigKey.Overrides}`,
	RefBindings: `${extensionId}.${ConfigKey.RefBindings}`
};

export const manualInstallUrl = "https://github.com/VSpaceCode/VSpaceCode#installation";

export const defaultStatusBarTimeout = 5000;
