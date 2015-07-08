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

// $.getJSON(url['api.openweathermap.org/data/2.5/weather?q=London'], function(data) {
	
// });

