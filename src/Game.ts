import MessagePrinter from './Messages/MessagePrinter'
import Readline from './Readline'
import * as settings from './settings'
import * as utils from './utils'

export default class Game {
  public readonly hero: Character
  public readonly enemy: Character
  private readonly inputReader: Readline
  private readonly messagePrinter: MessagePrinter
  private readonly limitsExpression: LimitsExpression
  public readonly millisecondsToAnswer: number
  public question?: string
  private rightAnswer?: string
  private currentAnswer?: string
  private timeoutToAnswer?: NodeJS.Timeout

  public constructor(millisecondsToAnswer: number = 5000) {
    this.hero = {...settings.INITIAL_HERO}
    this.enemy = {...settings.INITIAL_ENEMY}
    this.limitsExpression = {...settings.LIMITS_EXPRESSION}
    this.millisecondsToAnswer = millisecondsToAnswer
    this.inputReader = new Readline()
    this.messagePrinter = new MessagePrinter(this)
  }

  public startGame(millisecondsToStart: number = 0): void {
    this.messagePrinter.printStartMessage()
    setTimeout(() => this.nextRound(), millisecondsToStart)
  }

  private nextRound(): void {
    this.clearAnswer()
    this.generateNewExpression()
    this.printQuestion()
    this.startTimer()
    this.waitInputAnswer()
  }

  private startTimer(): void {
    this.timeoutToAnswer = setTimeout(() => this.endTimer(), this.millisecondsToAnswer)
  }

  public sendAnswer(answer: string): void {
    clearTimeout(Number(this.timeoutToAnswer))
    this.currentAnswer = answer
    this.inputReader.pause()
    this.finishRound()
  }

  private waitInputAnswer(): void {
    this.inputReader.waitInput(answer => this.sendAnswer(answer))
  }

  private clearAnswer(): void {
    this.currentAnswer = undefined
  }

  private endTimer(): void {
    this.messagePrinter.printTimeIsOverMessage()
    this.finishRound()
  }

  private finishRound(): void {
    this.isRightAnswer() ? this.attackForEnemy() : this.attackForHero()
    this.isGameOver() ? this.endGame() : this.nextRound()
  }

  private isGameOver(): boolean {
    return this.hero.healthPoints <= 0 || this.enemy.healthPoints <= 0
  }

  private endGame(): void {
    this.messagePrinter.printGameOverMessage()
    this.inputReader.close()
  }

  private attackForEnemy(): void {
    this.enemy.healthPoints -= this.hero.attackPower
    this.messagePrinter.printAttackForEnemyMessage()
  }

  private attackForHero(): void {
    this.hero.healthPoints -= this.enemy.attackPower
    this.messagePrinter.printAttackForHeroMessage()
  }

  private printQuestion(): void {
    console.info(this.question)
  }

  private isRightAnswer(): boolean {
    return this.rightAnswer == this.currentAnswer
  }

  private generateNewExpression() {
    const numberOne: number = utils.getRandomInt(this.limitsExpression.minNumber, this.limitsExpression.maxNumber)
    const numberTwo: number = utils.getRandomInt(this.limitsExpression.minNumber, this.limitsExpression.maxNumber)
    const isAddition: boolean = utils.getRandomBool()

    this.question = `${numberOne} ${isAddition ? '+' : '-'} ${numberTwo} = ?`
    this.rightAnswer = isAddition ? String(numberOne + numberTwo) : String(numberOne - numberTwo)
  }
}
