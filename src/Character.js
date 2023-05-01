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
  constructor(name, range, stoned, attack) {
    this.name = name;
    this.health = 100;
    this.range = range;
    this.setAttack(attack);
    this.setStoned(stoned);
  }

  setAttack(attackProcessed) {
    attackProcessed -= attackProcessed * ((this.range - 1) / 10);
    this.attack = Math.round(attackProcessed);
  }

  setStoned(stoned) {
    if (stoned) {
      this.attack -= Math.log2(this.range) * 5;
      this.attack = Math.round(this.attack);
      this.stoned = true;
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
