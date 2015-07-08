describe('Thermostat', function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('when initialized', function() {
		it('starts at 20 degrees', function(){
			expect(thermostat.showTemp()).toEqual(20)
		});
	});

	describe('temperature change', function(){
		it('can increase', function(){
			thermostat.increase();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease', function(){
			thermostat.decrease();
			expect(thermostat.temperature).toEqual(19);
		});
	});

	describe('has a minimum temp',function(){
		it('minimum is 10 degrees', function(){
			for(i = 0;i < 10;i++){
				thermostat.decrease();
			};
			thermostat.decrease();
			expect(thermostat.temperature).toEqual(10);
		});
	});

	describe('power saving mode on', function() {
		it('max temperature is 25 degrees', function() {
			// for(i = 0; i < 5; i++){
			// 	thermostat.increase();
			// };
			thermostat.temperature = 25
			thermostat.increase();
			expect(thermostat.temperature).toEqual(25);
		});
	});

	describe('power saving mode off', function() {
		it('max temperature is 32 degrees', function() {
			thermostat.powerSavingToggle();
			// for(i = 0; i < 12; i++){
			// 	thermostat.increase();
			// };
			thermostat.temperature = 32
			thermostat.increase();
			expect(thermostat.temperature).toEqual(32);
		});
	});

	describe('reset button', function() {
		it('can be reset to 20 by hitting the reset button', function() {
			thermostat.temperature = 25;
			thermostat.reset();
			expect(thermostat.temperature).toEqual(20);
		});
	});

	describe('temperature range', function(){
		it('less than 18 degrees is green', function(){
			thermostat.temperature = 17;
			expect(thermostat.color()).toBe("green");
		});
	});

	describe('temperature range', function(){
		it('less than 25 degrees is orange', function(){
			thermostat.temperature = 24;
			expect(thermostat.color()).toBe("orange");
		});
	});

	describe('temperature range', function(){
		it('greater than or equal to 25 degrees is red', function(){
			thermostat.temperature = 25;
			expect(thermostat.color()).toBe("red");
		});
	});

});
