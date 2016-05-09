var lucy = {
	init: function(){
		if(!localStorage.lucy){
			var obj = {'v':'0.0.1'};
			var objStr = JSON.stringify(obj);
			localStorage.setItem('lucy', objStr);
			return 'Lucy init';
		}
		else{
			return 'Lucy already init';
		}
	},
	empty: function(){
		localStorage.removeItem('lucy');
		lucy.init();
		return 'Empty DB';
	},
	find: function(propertyName, term){
		var lucyStore = JSON.parse(localStorage.lucy);
		for(prop in lucyStore){
			if(lucyStore[prop][propertyName] == term){
				return lucyStore[prop];
			}
		}
	},
	add: function(obj){
		var lucyStore = localStorage.getItem('lucy');
		var cur = JSON.parse(lucyStore);
		cur[obj.uid]=obj;
		localStorage.setItem('lucy',JSON.stringify(cur));
	},
	del: function(uid){
		var uid = uid;
		var lucyStore = JSON.parse(localStorage.lucy);
		delete lucyStore[uid];
		localStorage.setItem('lucy',JSON.stringify(lucyStore));
	}
}
lucy.init();
