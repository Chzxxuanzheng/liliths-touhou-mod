TouhouUtil.import('util/XMLUtil')
TouhouUtil.import('util/flag')
function touhouExportGame(){
	var root = save.getElementsByTagName("game").item(0)
	TouhouXMLUtil.setDoc(save)
	var mainNode = TouhouXMLUtil.createElement(root, "touhouMod")
	// 核心信息
	var coreInfo = TouhouXMLUtil.createElement(mainNode, "coreInfo")
	TouhouXMLUtil.addAttribute(coreInfo, 'version', 0.01)
	// flag
	var flag = TouhouXMLUtil.createElement(mainNode, 'flag')
	TouhouXMLUtil.createElementWithContent(flag, 'flag', TouhouSFlag)
}

function touhouImportGame(){
	var root = save.getElementsByTagName("game").item(0)
	TouhouXMLUtil.setDoc(save)
	var mainNode = TouhouXMLUtil.getElement(root, 'touhouMod')
	// 核心信息
	var coreInfo = TouhouXMLUtil.getElement(mainNode, 'coreInfo')
	TouhouTFlag['saveVersion'] = TouhouXMLUtil.getAttribute(coreInfo, "version")
	// flag
	var flag = TouhouXMLUtil.getElement(root, 'flag')
	TouhouSFlag = TouhouXMLUtil.getContent(flag)
}