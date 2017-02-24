# basic-keyboard-event-polyfill

A simple polyfill to help PhantomJS out.

Typlically in JS this is pretty easy to sort out in tests, by creating the event
and initialising the Keyboard Event manually. Like in here. However, when running
tests for Angular2+ in Typescript you can't just assign a value to the event.
They are all readonly. So you can have your tests pass but not linting (if you
have `--type-check`) enabled.

Having this be a package you can just require, means your linting doesn't touch it
as it stays in JS land.

Function originally taken from https://github.com/ariya/phantomjs/issues/11289
@runarberg and modified slightly.

Install for dev via:

- `npm install basic-keyboard-event-polyfill --dev`
- `yarn add basic-keyboard-event-polyfill --dev`

