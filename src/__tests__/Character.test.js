import Character from '../Character';

test('Testing Character class getAttack() function', () => {
  const character = new Character('Artur', 'Daemon', 2, true, 100);
  const expected = 85;
  const recieved = character.getAttack();
  expect(expected).toBe(recieved);
});

test('Testing Character class getStoned() function when stoned == true & type == Daemon', () => {
  const character = new Character('Artur', 'Daemon', 2, true, 100);
  const expected = true;
  const recieved = character.getStoned();
  expect(expected).toBe(recieved);
});

test('Testing Character class getStoned() function when stoned == false & type == Magician', () => {
  const character = new Character('Artur', 'Magician', 2, false, 100);
  const expected = false;
  const recieved = character.getStoned();
  expect(expected).toBe(recieved);
});

test('Testing Character class getStoned() function when stoned == true & type == Bowman', () => {
  const character = new Character('Artur', 'Bowman', 2, true, 100);
  const expected = false;
  const recieved = character.getStoned();
  expect(expected).toBe(recieved);
});
