
describe('basic-keyboard-event-polyfill', function() {

  it('should not throw an error if you try to create a KeyboardEvent', function() {
    expect(function(){ new KeyboardEvent('Keydown', {'key': 'Enter'})}).not.toThrow();
  });

});
