function tempDisplay(){
	$("#temperature").text(thermostat.showTemp());
	$("#temperature").css("color", thermostat.color());
	$("#bg").css("background", thermostat.pic());
};

$(document).ready(function(){
	$("#temperature").css("color", thermostat.color());
	$("#bg").css("background", thermostat.pic());
})

var thermostat = new Thermostat;

thermostat.temperature = $('#temperature').text()

$("#up").click(function(){
	thermostat.increase();
	tempDisplay();
	$.post( "/", { temperature: thermostat.showTemp() } )
});

$("#down").click(function(){
	thermostat.decrease();
	tempDisplay();
	$.post( "/", { temperature: thermostat.showTemp() } )
});

$("#reset").click(function(){
		thermostat.reset();
		tempDisplay();
});

$("#powerSaving").click(function(){
	thermostat.powerSavingToggle();
	$("#temperature").text(thermostat.showTemp());
});

$("#city-name").click(function(){
	var city = $("#searchform").val();
	var apiRequest= 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric';
	
	$.getJSON(apiRequest, function (response) {
	var temperature = response.main.temp;
 	 $("#api").html(Math.round(temperature) + '&deg;C');
 });
});

// // getJSON takes two arguments, the URL and the 'callback function' that is going to the URL and then executing the contents of the function



