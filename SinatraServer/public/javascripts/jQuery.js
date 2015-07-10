$(document).ready(function(){
	$("#temperature").css("color", thermostat.color());
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
2
$("#reset").click(function(){
		thermostat.reset();
		tempDisplay();
});

$("#powerSaving").click(function(){
	thermostat.powerSavingToggle();
	$("#temperature").text(thermostat.showTemp());
});

$("#city-name").click(function(){
	var city = $("#city-search").val();
	var apiRequest= 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric';
	
	$.getJSON(apiRequest, function (response) {
	var temperature = response.main.temp;
 	$("#api").html(Math.round(temperature) + '&deg;C');
 });

	// $.post( "/", { cityname: city } )
	// $("#city").html("The temperature in "+city+":");
});

	// function cityTemperature(){
	// 	if ($("#existing-city").trim().length) {
	// 		var city = $("#existing-city").text();
			
	// 		var apiRequest= 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric';
	// 		$.getJSON(apiRequest, function (response) {
	// 		var temperature = response.main.temp;
	// 			$("#api").html(Math.round(temperature) + '&deg;C');
	// 		})
	// 	};
	// }	
// // getJSON takes two arguments, the URL and the 'callback function' that is going to the URL and then executing the contents of the function

function tempDisplay(){
	$("#temperature").text(thermostat.showTemp());
	$("#temperature").css("color", thermostat.color());
};
