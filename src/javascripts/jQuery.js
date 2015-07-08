function tempDisplay(){
	$("#temperature").text(thermostat.showTemp());
	$("#temperature").css("color", thermostat.color());
	$("#bg").css("background", thermostat.pic());
};

$(document).ready(function(){
	tempDisplay();
})

var thermostat = new Thermostat;

$("#up").click(function(){
	thermostat.increase();
	tempDisplay();
});

$("#down").click(function(){
	thermostat.decrease();
	tempDisplay();
});

$("#reset").click(function(){
		thermostat.reset();
		tempDisplay();
});

$("#powerSaving").click(function(){
	thermostat.powerSavingToggle();
	$("#temperature").text(thermostat.showTemp());
});

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=London&units=metric',
 {},
 function (response) {
 	 var data = response.list[0].main.temp;
 	 $("#api").prepend(data);
 	 // prepend or append or text... fack
 });