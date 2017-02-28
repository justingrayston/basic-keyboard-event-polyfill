(function() {
  // critically in Phantom JS it is an object so can't be used as a constructor.
  if (typeof KeyboardEvent !== 'function') {
    window.KeyboardEvent = function(eventType, init) {
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
