export class Caracter {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(caracter) {
    caracter.lifePoints -= this.attackPoints - caracter.defensePoints
  }
}
