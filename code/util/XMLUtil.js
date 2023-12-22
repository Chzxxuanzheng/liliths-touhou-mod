var TouhouXMLUtil = {
	doc: null,
	setDoc: function(doc){
		this.doc = doc
	},
	// 写
	createElement: function(parentElement,elementName){
		var newElement = this.doc.createElement(elementName);
		parentElement.appendChild(newElement);
		return newElement
	},
	addAttribute: function(parentElement,attributeName,value){
		var attr = this.doc.createAttribute(attributeName)
		if(value instanceof Object)TouhouUtil.log.error("设置xml属性时传入了Object")
		attr.setValue(value)
		parentElement.setAttributeNode(attr)
	},
	addValue: function(parentElement, value){
		this.addAttribute(parentElement, 'value', value)
	},
	createElementWithValue: function(parentElement,elementName,value){
		var newElement = this.createElement(parentElement,elementName)
		addAttribute(newElement, 'value', value)
	},
	setContent: function(parentElement, content){
		if(content instanceof Object){
			content = JSON.stringify(content)
			this.addAttribute(parentElement,'isObject','true')
		}
		parentElement.setTextContent(content)
	},
	createElementWithContent: function(parentElement, elementName, content){
		var newElement = this.createElement(parentElement,elementName)
		this.setContent(newElement, content)
	},
	// 读
	getElement: function(parentElement, elementName){
		return parentElement.getElementsByTagName(elementName).item(0)
	},
	getAttribute: function(parentElement, attributeName){
		return parentElement.getAttribute(attributeName)
	},
	getValue: function(parentElement){
		return getAttribute(parentElement, 'value')
	},
	getContent: function(parentElement){
		var out = parentElement.getTextContent()
		if(this.getAttribute(parentElement, "isObject") == true){
			out = JSON.parse(out)
		}
		return out
	}
}