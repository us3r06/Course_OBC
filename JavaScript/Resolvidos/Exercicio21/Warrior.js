import { Caracter } from './Caracter.js'

export class Warrior extends Caracter {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, lifePoints, attackPoints, defensePoints, shildPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.shildPoints = shildPoints
    this.defensePosition = false
  }

  attack(caracter) {
    if (this.defensePosition === false) {
      caracter.lifePoints -= this.attackPoints - caracter.defensePoints
    } else {
      console.log(`${this.name} está em modo de defesa`)
    }
  }

  switchPosition() {
    if (this.defensePosition === false) {
      this.defensePosition = true
      this.defensePoints += this.shildPoints
    } else {
      this.defensePosition = false
      this.defensePoints -= this.shildPoints
    }
  }
}
