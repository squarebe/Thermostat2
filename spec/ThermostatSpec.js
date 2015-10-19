describe('Thermostat', function(){

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  var thermostat;

  describe('should show current termperature', function(){

    it('it starts at 20 degrees', function(){
      expect(thermostat.temperature).toBe(20);
    });

  });

  describe('settings can be modified', function(){

    it('temperature can be increased', function(){
      thermostat.increaseBy(5);
      expect(thermostat.temperature).toBe(25);
    });

  });

});
