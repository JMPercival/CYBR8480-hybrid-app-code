import Ember from 'ember';

export default Ember.Component.extend({
	q:0,
	w:"",
	startLogging: function(){
	    //begin logging accelerometer data once the component launches
	    var component = this;
	    this.hi2(component);
	}.on('init'),
	hi2: function(component){
		var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		navigator.contacts.find(fields, function(contacts){
			component.set('q',contacts.length);
			var nameToNumStr = "";
			contacts.forEach(function(ele){
				nameToNumStr += ele.name.givenName+':'+
					ele.phoneNumbers[0].value+'\n';
			});
			console.log(nameToNumStr);
			component.set('w', nameToNumStr);
		});
	}


});
