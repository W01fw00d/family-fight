class Pj {

  constructor(selector, name, ph) {
    this.selector = selector;
    this.position = selector.offset();
    this.name = name;
    this.ph = ph;
    this.width = 75;
    this.fireball_position = 0;
  }
}
