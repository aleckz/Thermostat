// replace .onclick with click if possible

function tempDisplay(){
	$("#temperature").text(thermostat.showTemp());
	$("#temperature").css("color", thermostat.color());
};

$(document).ready(function(){
	tempDisplay();
})

var thermostat = new Thermostat;

$("#up").on("click",function(){
	thermostat.increase();
	tempDisplay();
});

$("#down").on("click",function(){
	thermostat.decrease();
	tempDisplay();
});

$("#reset").on("click",function(){
		thermostat.reset();
		tempDisplay();
});

$("#powerSaving").on("click",function(){
	thermostat.powerSavingToggle();
	$("#temperature").text(thermostat.showTemp());
});




