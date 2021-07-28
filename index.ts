import {EventsMathBattle} from './src/core/mathBattle.enums'
import MathBattle from './src/core/MathBattle'
import MessagePrinter from './src/MessagePrinter'
import Readline from './src/Readline'

const game = new MathBattle(5000)
const messagePrinter = new MessagePrinter(game)
const readline = new Readline()

game.emitter.on(EventsMathBattle.startRound, () => {
  messagePrinter.printQuestion()
  readline.waitInput(inputText => game.sendAnswer(Number(inputText)))
})

game.emitter.on(EventsMathBattle.endGame, () => {
  messagePrinter.printGameOverMessage()
  readline.close()
})

game.emitter.on(EventsMathBattle.finishRound, () => {
  readline.pause()
})

game.emitter.on(EventsMathBattle.attackFromEnemyToHero, () => {
  messagePrinter.printAttackFromEnemyToHeroMessage()
})

game.emitter.on(EventsMathBattle.attackFromHeroToEnemy, () => {
  messagePrinter.printAttackFromHeroToEnemyMessage()
})

game.emitter.on(EventsMathBattle.endTimer, () => {
  messagePrinter.printTimeIsOverMessage()
})

messagePrinter.printStartMessage()
setTimeout(() => game.startGame(), 3000)
