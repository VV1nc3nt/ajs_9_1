import Character from '../Character';

test('Testing Character class getAttack() function', () => {
  const character = new Character('Artur', 'Daemon', 2, true, 100);
  const expected = 85;
  const recieved = character.attack;
  expect(expected).toBe(recieved);
});

test('Testing Character class getAttack() function', () => {
  const character = new Character('Artur', 'Daemon', 3, false, 100);
  const expected = 80;
  const recieved = character.attack;
  expect(expected).toBe(recieved);
});
