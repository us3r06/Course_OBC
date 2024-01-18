import { Caracter } from './Caracter.js'

export class Mage extends Caracter {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints
  }

  attack(caracter) {
    caracter.lifePoints -=
      this.attackPoints - caracter.defensePoints + this.magicPoints
  }

  lifeUpgrade(caracter) {
    caracter.lifePoints += 2 * this.magicPoints
  }
}
