TouhouUtil.import('type/txtParse')

var TouhouResponse = {
	new: function(arg){
		var touhouResponse = {}
		var name = TouhouTxtParse.new()
		var tooltip = TouhouTxtParse.new()
		var nextDialogue = TouhouTxtParse.new()
		var effects = TouhouTxtParse.new()
		var conditional = TouhouTxtParse.new(true)
		var colour = TouhouTxtParse.new('TEXT')
		var secondsPassed = TouhouTxtParse.new(5)
		if(arg instanceof Object){
			if(arg.name!=null)name.setContent(arg.name);
			if(arg.tooltip!=null)tooltip.setContent(arg.tooltip);
			if(arg.nextDialogue!=null)nextDialogue.setContent(arg.nextDialogue);
			if(arg.effects!=null)effects.setContent(arg.effects);
			if(arg.conditional!=null)conditional.setContent(arg.conditional);
			if(arg.colour!=null)colour.setContent(arg.colour);
			if(arg.secondsPassed!=null)secondsPassed.setContent(arg.secondsPassed);
		}
		touhouResponse.setName = function(str){
			name.setContent(str)
		}
		touhouResponse.setTooltip = function(str){
			tooltip.setContent(str)
		}
		touhouResponse.setNextDialogue = function(str){
			nextDialogue.setContent(str)
		}
		touhouResponse.setEffects = function(str){
			effects.setContent(str)
		}
		touhouResponse.setConditional = function(str){
			conditional.setContent(str)
		}
		touhouResponse.setColour = function(str){
			colour.setContent(str)
		}
		touhouResponse.setSecondsPassed = function(str){
			secondsPassed.setContent(str)
		}
		touhouResponse.getName = function(){
			return name.getTxt()
		}
		touhouResponse.getTooltip = function(){
			return tooltip.getTxt()
		}
		touhouResponse.getNextDialogue = function(){
			return nextDialogue.getTxt()
		}
		touhouResponse.getEffects = function(){
			return effects.getTxt()
		}
		touhouResponse.getConditional = function(){
			return conditional.getTxt()
		}
		touhouResponse.getColour = function(){
			return colour.getTxt()
		}
		touhouResponse.getSecondsPassed = function(){
			return secondsPassed.getTxt()
		}
		return touhouResponse
	}
}
