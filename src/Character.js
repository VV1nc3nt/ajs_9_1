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
    this.setAttack(attack);
    this.setStoned(stoned);
  }

  setAttack(attackProcessed) {
    if (this.type === 'Daemon' || this.type === 'Magician') {
      attackProcessed -= attackProcessed * ((this.range - 1) / 10);
      this.attack = Math.round(attackProcessed);
    } else {
      this.attack = attackProcessed;
    }
  }

  setStoned(stoned) {
    if (this.type === 'Daemon' || this.type === 'Magician') {
      if (stoned) {
        this.attack -= Math.log2(this.range) * 5;
        this.attack = Math.round(this.attack);
        this.stoned = true;
      } else {
        this.stoned = false;
      }
    } else {
      this.stoned = false;
    }
  }

  getAttack() {
    return this.attack;
  }

  getStoned() {
    return this.stoned;
  }
}
