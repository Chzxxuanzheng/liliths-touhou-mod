// mod 路径
var touhouModPath = 'mods/touhou'


// log
var touhouLog = {
	error: function(log){
		err.println('[touhou mod]|error| ' + log)
	},
	log: function(log){
		if(!touhouConfig.debug)return
		err.println('[touhou mod]|  log | ' + log)
	},
	warn: function(log){
		if(!touhouConfig.debug)return
		err.println('[touhou mod]| warn | ' + log)
	},
	scuess: function(log){
		if(!touhouConfig.debug)return
		err.println('[touhou mod]|scuess| ' + log)
	}
}

var needPackPath = new Array(
	'config'
)

for (var i=0;i<needPackPath.length;i++){
	game.parseJsFromFile(touhouModPath + '/code/' + needPackPath[i])
}

// 工具
var TouhouUtil = {}

// 加载
TouhouUtil.loadHaveLoadPath = new Array()
TouhouUtil.import = function(path){
	if(TouhouUtil.loadHaveLoadPath.indexOf(path) != -1)return
	TouhouUtil.loadHaveLoadPath.push(path)
	touhouLog.log('导入模块:' + path)
	game.parseJsFromFile(touhouModPath + '/code/' + path)
}
// 执行,类似加载,但不会有计数
TouhouUtil.run = function(path){
	touhouLog.log('执行脚本:' + path)
	game.parseJsFromFile(touhouModPath + '/code/' + path)
}
//解析
TouhouUtil.parse = function(str){
	return game.forceParse(str)
}

TouhouUtil.log = touhouLog