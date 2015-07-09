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
			this.temperature ++;
	}
};

Thermostat.prototype.decrease = function () {
	if (this.temperature > 10) {
		this.temperature --;
	};
};

Thermostat.prototype.powerSavingToggle = function () {
	this.powerSaver = !this.powerSaver;
};
Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.range = function() {
  if (this.temperature < 18) {
  	return 'cold';
  } else if (this.temperature < 25) {
    return 'warm';
  } else {
  	return 'hot';
  }
};

Thermostat.prototype.color = function() {
  if (this.range() === 'cold') {
  	return '#00FF00';
  } else if (this.range() === 'warm') {
    return '#FF9900';
  } else {
  	return 'red';
  }
};

Thermostat.prototype.pic = function() {
  if (this.range() === 'cold') {
  	return "url('http://www.26pm.com/site/wp-content/uploads/2013/12/2014SnowLarge.gif')";
  } else if (this.range() === 'warm') {
  	return "url('http://i.perezhilton.com/wp-content/uploads/2014/03/spring-gifs6.gif')";
  } else {
  	return "url('http://www.clipartbest.com/cliparts/Kcj/e9B/Kcje9BRKi.gif')";
  }
};