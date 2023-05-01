import Character from './Character';

export default class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
  }
}
