describe('Thermostat', function(){

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  var thermostat;

  describe('should show current termperature', function(){

    it('it starts at 20 degrees', function(){
      expect(thermostat.temperature).toBe(20);
    });

    it('and by default is on power saving mode', function() {
      expect(thermostat.powerSaveMode).toBe(true);
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

    it('value can not go below 10 degrees', function(){
      expect(thermostat.decreaseBy(11)).toBe("temperature too low")
    });

    it('temperature can not exceed 25 degrees when power saving mode is on', function(){
      thermostat.powerSavemode = true
      expect(thermostat.increaseBy(6)).toBe("temperature limit!")
    });

    it('temperature can not exceed 32 degrees when power saving mode is off', function(){
      expect(thermostat.increaseBy(13)).toBe("temperature limit!")
    });

    it ('can turn PSM off', function() {
      thermostat.psmswitch()
      thermostat.psmswitch()
      expect(thermostat.powerSavemode).toEqual(false)
    });

    it ('can turn PSM on', function() {
      thermostat.psmswitch()
      expect(thermostat.powerSavemode).toEqual(true)
    });

  });

});
