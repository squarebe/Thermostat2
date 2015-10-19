describe('Thermostat', function(){

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  var thermostat;

  describe('thermostat should show current termperature', function(){

    it('thermostat starts at 20 degrees', function(){
      expect(thermostat.temperature).toBe(20);
    });

  });

});
