var TouhouTxtParse = {
	new: function(str){
		var txtParse = {}
		var txt = str
		txtParse.setContent = function(str){
			txt = str
		}
		txtParse.getContent = function(){
			return txt
		}
		txtParse.getTxt = function(){
			return TouhouUtil.parse(txt)
		}
		return txtParse
	}
}