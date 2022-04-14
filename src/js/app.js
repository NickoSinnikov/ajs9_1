// TODO: write your code here
export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.stoned = false;

    if (type === "Magician") {
      this.attack = 10;
      this.defence = 40;
    }

    if (type === "Daemon") {
      this.attack = 10;
      this.defence = 40;
    }
  }

  get stoned() {
    return this._stoned;
  }
  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    if (this.distance < 0) {
      return 0;
    }
    let attack = ((10 - (this.distance - 1)) / 10) * this._attack;
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack); //  возвращает число, округлённое к ближайшему целому.
  }
  set attack(value) {
    this._attack = value;
  }
}
