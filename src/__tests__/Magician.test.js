import Magician from '../Magician';

test('Testing Magician class', () => {
  const gendalf = new Magician('Gendalf', 'Magician', 3, true, 120);
  const expected = 'Magician';
  const recieved = gendalf.type;
  expect(expected).toBe(recieved);
});
