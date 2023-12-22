TouhouUtil.import('dialogue/response')
var TouhouChairResponses = {
	new: function(arg){
		var touhouChairResponses = {}
		var keyResponse = TouhouResponse.new()
		var responses = new Array(keyResponse)
		// 参数处理
		if (arg instanceof Object){
			// key response 初始化
			if(arg.keyResponse != null)keyResponse = arg.keyResponse

			if(arg.keyName != null){
				if(arg.keyResponse == null){
					keyResponse.setName(arg.keyName)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyName 处理")
				}
			}
			if(arg.keyTooltip != null){
				if(arg.keyResponse == null){
					keyResponse.setTooltip(arg.keyTooltip)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyTooltip 处理")
				}
			}
			if(arg.keyNextDialogue != null){
				if(arg.keyResponse == null){
					keyResponse.setNextDialogue(arg.keyNextDialogue)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyNextDialogue 处理")
				}
			}
			if(arg.keyEffects != null){
				if(arg.keyResponse == null){
					keyResponse.setEffects(arg.keyEffects)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyEffects 处理")
				}
			}
			if(arg.keyConditional != null){
				if(arg.keyResponse == null){
					keyResponse.setConditional(arg.keyConditional)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyConditional 处理")
				}
			}
			if(arg.keyColour != null){
				if(arg.keyResponse == null){
					keyResponse.setColour(arg.keyColour)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keyColour 处理")
				}
			}
			if(arg.keySecondsPassed != null){
				if(arg.keyResponse == null){
					keyResponse.setSecondsPassed(arg.keySecondsPassed)
				}else{
					TouhouUtil.log.warn("已经提供 keyResponse 不再进行 keySecondsPassed 处理")
				}
			}
			responses = new Array(keyResponse)

			// response 处理
			if(arg.responses != null){
				if(arg.responses instanceof Array){
					responses = responses.concat(arg.responses)
				}else if(arg.responses instanceof Object){
					responses.push(arg.responses)
				}else{
					TouhouUtil.log.error("传入response不为Object");
				}
			}
		}
		touhouChairResponses.getKeyResponse = function(){
			return keyResponse
		}
		touhouChairResponses.getResponses = function(){
			return responses
		}
		touhouChairResponses.getResponseName = function(id){
			if(id >= responses.length)return ''
			return responses[id].getName()
		}
		touhouChairResponses.getResponseTooltip = function(id){
			if(id >= responses.length)return ''
			return responses[id].getTooltip()
		}
		touhouChairResponses.getResponseNextDialogue = function(id){
			if(id >= responses.length)return ''
			return responses[id].getNextDialogue()
		}
		touhouChairResponses.getResponseEffects = function(id){
			if(id >= responses.length)return ''
			return responses[id].getEffects()
		}
		touhouChairResponses.getResponseConditional = function(id){
			if(id >= responses.length)return false
			return responses[id].getConditional()
		}
		touhouChairResponses.getResponseColour = function(id){
			if(id >= responses.length)return 'TEXT'
			return responses[id].getColour()
		}
		touhouChairResponses.getResponseSecondsPassed = function(id){
			if(id >= responses.length)return 1
			return responses[id].getSecondsPassed()
		}
		return touhouChairResponses
	}
}
var TouhouChairScene = {
	new: function(arg){
		var touhouChairScene = TouhouChairResponses.new(arg)
		var sceneContent = TouhouTxtParse.new('')
		if(arg instanceof Object){
			if(arg.sceneContent != null)sceneContent = arg.sceneContent
		}
		touhouChairScene.getSceneContent = function(){
			return sceneContent
		}
		touhouChairScene.setSceneContent = function(str){
			sceneContent = str
		}
		return touhouChairScene
	}
}
var TouhouChairUpScene = {
	new: function(arg){
		if(arg instanceof Object){
			if(arg.keyName == null)arg.keyName = '坐下'
			if(arg.keyTooltip == null)arg.keyTooltip = '坐下来'
			if(arg.keyNextDialogue == null)arg.keyNextDialogue = '#IF(touhouChairFlag>9)touhou_common_chairDance#ELSEtouhou_common_chairDown#ENDIF'
			if(arg.sceneContent == null)arg.sceneContent = '[pc.name]坐了下来'
		}else{
			arg = {
				keyName: '坐下',
				keyTooltip: '坐下来',
				keyNextDialogue: '#IF(touhouChairFlag>9)touhou_common_chairDance#ELSEtouhou_common_chairDown#ENDIF',
				sceneContent: '[pc.name]坐了下来'
			}
		}
		var touhouChairUpScene = TouhouChairScene.new(arg)
		return touhouChairUpScene
	}
}
var TouhouChairDownScene = {
	new: function(arg){
		if(arg instanceof Object){
			if(arg.keyName == null)arg.keyName = '起来'
			if(arg.keyTooltip == null)arg.keyTooltip = '站起身来'
			if(arg.keyNextDialogue == null)arg.keyNextDialogue = 'touhou_common_chairUp'
			if(arg.keyEffects == null)arg.keyEffects = '{#touhouChairFlag ++#}'
			if(arg.sceneContent == null)arg.sceneContent = '[pc.name]站了起来'
		}else{
			arg = {
				keyName: '起来',
				keyTooltip: '站起身来',
				keyNextDialogue: 'touhou_common_chairUp',
				keyEffects: '{#touhouChairFlag ++#}',
				sceneContent: '[pc.name]站了起来'
			}
		}
		var touhouChairDownScene = TouhouChairScene.new(arg)
		return touhouChairDownScene
	}
}

var touhouChairUpScene
var touhouChairDownScene
var touhouChairFlag

function touhouChairSceneInit(arg){
	touhouChairFlag = 0
	if(arg instanceof Object){
		touhouChairUpScene = TouhouChairUpScene.new(arg.up)
		touhouChairDownScene = TouhouChairDownScene.new(arg.down)
	}else{
		touhouChairUpScene = TouhouChairUpScene.new()
		touhouChairDownScene = TouhouChairDownScene.new()
	}
}