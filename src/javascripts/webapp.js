// document.getElementById("greeting").innerHTML = "Hail, rain, sleet or snow. The thermostat cares where you go. Set the temperature, take a break. All is well upon your wake.";

var thermostat = new Thermostat();

changeDisplay();

function changeDisplay() {
  document.getElementById("temperature").innerHTML=thermostat.showTemp();
  document.getElementById("temperature").style.color = thermostat.color();
}

document.getElementById("up").onclick = function() {
  thermostat.increase();
  changeDisplay();
};

document.getElementById("down").onclick = function() {
	thermostat.decrease();
	changeDisplay();
};

document.getElementById("reset").onclick = function() {
	thermostat.reset();
	changeDisplay();
};

document.getElementById("powerSaving").onclick = function() {
	thermostat.powerSavingToggle();
};
