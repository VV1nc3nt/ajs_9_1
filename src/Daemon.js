import Character from './Character';

export default class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
  }
}
