gfunction tempDisplay(){
	$("#temperature").text(thermostat.showTemp());
	$("#temperature").css("color", thermostat.color());
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




