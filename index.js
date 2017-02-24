(function() {
  try {
    return new KeyboardEvent(eventType, init);
  } catch (error) {
    global.window.KeyboardEvent = function(eventType, init) {
      var modKeys = [
        init.ctrlKey ? 'Control' : '',
        init.shiftKey ? 'Shift' : '',
        init.altKey ? 'Alt' : '',
        init.altGrKey ? 'AltGr' : '',
        init.metaKey ? 'Meta' : '',
      ].join(' ');
      var keyEvent = document.createEvent('KeyboardEvent');
      keyEvent.initKeyboardEvent(
        eventType,
        false,
        false,
        window,
        init.char || '',
        init.keyCode || 0,
        modKeys,
        init.repeat || false
      );
      keyEvent.key = init.key;

      return keyEvent;
    }
  }
})();
