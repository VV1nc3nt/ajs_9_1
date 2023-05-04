/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
const classList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type, range, stoned, attack) {
    this.name = name;
    this.health = 100;
    this.range = range;
    this.type = type;
    this.stoned = stoned;
    this.attack = attack;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    let attack = this._attack;
    attack -= attack * ((this.range - 1) / 10);
    if (this.stoned) {
      attack -= Math.log2(this.range) * 5;
      attack = Math.round(attack);
    }
    return attack;
  }
}
