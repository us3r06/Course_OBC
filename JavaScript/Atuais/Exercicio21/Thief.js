import { Caracter } from './Caracter.js'

export class Thief extends Caracter {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, lifePoints, attackPoints, defensePoints) {
    super(name, lifePoints, attackPoints, defensePoints)
  }

  attack(caracter) {
    caracter.lifePoints -= (this.attackPoints - caracter.defensePoints) * 2
  }
}
