var Thermostat = function() {
	this.temperature =  20;
	this.powerSaver = true;
};

Thermostat.prototype.showTemp = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function() {
	if ((this.powerSaver && this.temperature < 25) 
		|| (!this.powerSaver && this.temperature < 32)){
			this.temperature += 1;
	}
};

Thermostat.prototype.decrease = function () {
	if (this.temperature > 10) {
		this.temperature -= 1;
	};
};

Thermostat.prototype.powerSavingToggle = function () {
	this.powerSaver = !this.powerSaver;
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.color = function() {
  if (this.temperature < 18) {
  	return 'green';
  } else if (this.temperature < 25) {
    return 'yellow';
  } else {
  	return 'red';
  }
};