import { Mage } from './Mage.js'
import { Thief } from './Thief.js'
import { Warrior } from './Warrior.js'

const arthur = new Mage('Arthur', 90, 14, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })
cain.switchPosition()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.attack(arthur)
arthur.lifeUpgrade(arthur)
beatrice.attack(cain)

cain.switchPosition()
cain.attack(arthur)

console.table({ arthur, beatrice, cain })
