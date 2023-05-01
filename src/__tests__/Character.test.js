import Character from '../Character';

test('Testing Character class getAttack() function', () => {
  const character = new Character('Artur', 2, true, 100);
  const expected = 85;
  const recieved = character.getAttack();
  expect(expected).toBe(recieved);
});

test('Testing Character class getStoned() function when stoned == true', () => {
  const character = new Character('Artur', 2, true, 100);
  const expected = true;
  const recieved = character.getStoned();
  expect(expected).toBe(recieved);
});

test('Testing Character class getStoned() function when stoned == false', () => {
  const character = new Character('Artur', 2, false, 100);
  const expected = false;
  const recieved = character.getStoned();
  expect(expected).toBe(recieved);
});
