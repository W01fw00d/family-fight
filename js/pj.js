class Pj {

  constructor(selector, hp_bar_selector, name, hp) {
    this.selector = selector;
    this.hp_bar_selector = hp_bar_selector
    this.position = selector.offset();
    this.name = name;
    this.hp = hp;
    this.width = 75;
    this.fireball_position = 0;
  }
    
  setHp(value) {
    if (value >= 0) {
        this.hp = value;
        this.hp_bar_selector.value = $pj2.hp;
    }  
  }
    
    
}
