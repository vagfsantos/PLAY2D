const ok = require('../build/index');

test('ok', () => {
  expect( new ok.Test().test()).toBe('tss');
});
