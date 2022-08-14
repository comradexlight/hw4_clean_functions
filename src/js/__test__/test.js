import { conditionCheck } from '../conditionCheck.js';

test.each([
  [{ name: 'character', health: 90 }, 'healthy'],
  [{ name: 'character', health: 45 }, 'wounded'],
  [{ name: 'character', health: 12 }, 'critical'],
  [{ name: 'character' }, false],
])('testeing conditionCheck function with %o characterList and %s status', (character, expected) => {
  const result = conditionCheck(character);
  expect(result).toBe(expected);
});
