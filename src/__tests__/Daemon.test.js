import Daemon from '../Daemon';

test('Testing Daemon class', () => {
  const crowley = new Daemon('Crowley', 'Daemon', 3, true, 120);
  const expected = 'Daemon';
  const recieved = crowley.type;
  expect(expected).toBe(recieved);
});
