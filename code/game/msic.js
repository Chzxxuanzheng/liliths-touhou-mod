function touhouLibraryWhoRoom(chara){
	if (chara.getLocation().getY() < 18)return 'Library'
	if (chara.getLocation().getX() > 9)return 'Patchouli'
	return 'Little Devil'
}
function touhouMoveInit(arg0, arg1, arg2){
	TouhouTFlag.enterWorld = new Array
	TouhouTFlag.enterX = new Array
	TouhouTFlag.enterY = new Array
	TouhouTFlag.enterScene = new Array
	if(arg0 instanceof Array){
		for(var i = 0;i<arg0.length;i++){
			touhouMoveSingelInit(arg0[i][0], arg0[i][1], arg0[i][2])
		}
	}else{
		touhouMoveSingelInit(arg0, arg1, arg2)
	}
}
function touhouMoveSingelInit(arg0, arg1, arg2){
	var world = arg0
	if (arg2 == null){
		var place = arg1
		var location = game.getWorlds()[world].getClosestCell(pc.getLocation(), place).getLocation()
		var x = location.getX()
		var y = location.getY()
		var sceneId = place.getDialogue(false).getId()
	}else{
		var x = arg1
		var y = arg2
		var sceneId = game.getWorlds()[world].getGrid[x][y].getPlace().getPlaceType().getDialogue(false).getId()
	}
	TouhouTFlag.enterWorld.push(world)
	TouhouTFlag.enterX.push(x)
	TouhouTFlag.enterY.push(y)
	TouhouTFlag.enterScene.push(sceneId)
}
function touhouMoveGeneral(id){
	pc.setLocation(TouhouTFlag.enterWorld[id], TouhouTFlag.enterX[id], TouhouTFlag.enterY[id], false)
	TouhouTFlag.enter = true
}