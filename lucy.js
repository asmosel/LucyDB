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
		return 'Empty DB';
	},
	find: function(term){
		var lucyStore = JSON.parse(localStorage.lucy);
		for(prop in lucyStore){
			if(lucyStore[prop].name == term){
				console.log(lucyStore[prop]);
			}
		}
	},
	add: function(obj){
		var lucyStore = localStorage.getItem('lucy');
		var cur = JSON.parse(lucyStore);
		cur[obj.uid]=obj;
		localStorage.setItem('lucy',JSON.stringify(cur));
	}
}





lucy.init();
var newPerson = {'uid':'g56','name':'peter'};
lucy.add(newPerson);
var newPerson = {'uid':'g57','name':'trev'};
lucy.add(newPerson);
var newPerson = {'uid':'g58','name':'suze'};
lucy.add(newPerson);

lucy.find('suze');