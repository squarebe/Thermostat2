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
      thermostat.increaseBy(1);
      expect(thermostat.temperature).toBe(21);
    });

    it('temperature can be decreased', function(){
      thermostat.decreaseBy(1);
      expect(thermostat.temperature).toBe(19);
    });

    it('and be reset to default', function() {
      thermostat.increaseBy(5)
      thermostat.resetTemp()
      expect(thermostat.temperature).toBe(20)
    });

  });

});
