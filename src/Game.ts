import MessagePrinter from './Messages/MessagePrinter'
import Readline from './Readline'
import * as settings from './settings'
import * as utils from './utils'

export default class Game {
  public readonly millisecondsToAnswer: number
  public readonly enemy: Character
  public readonly hero: Character
  public question?: string
  private readonly limitsExpression: LimitsExpression
  private readonly messagePrinter: MessagePrinter
  private readonly inputReader: Readline
  private timeoutToAnswer?: NodeJS.Timeout
  private currentAnswer?: string
  private rightAnswer?: string

  public constructor(millisecondsToAnswer: number = 5000) {
    this.limitsExpression = {...settings.LIMITS_EXPRESSION}
    this.messagePrinter = new MessagePrinter(this)
    this.inputReader = new Readline()
    this.millisecondsToAnswer = millisecondsToAnswer
    this.enemy = {...settings.INITIAL_ENEMY}
    this.hero = {...settings.INITIAL_HERO}
  }

  public startGame(millisecondsToStart: number = 0): void {
    this.messagePrinter.printStartMessage()
    setTimeout(() => this.nextRound(), millisecondsToStart)
  }

  private nextRound(): void {
    this.clearAnswer()
    this.generateNewExpression()
    this.startTimer()
    this.messagePrinter.printQuestion()
    this.waitInputAnswer()
  }

  private clearAnswer(): void {
    this.currentAnswer = undefined
  }

  private generateNewExpression(): void {
    const numberOne: number = utils.getRandomInt(this.limitsExpression.minNumber, this.limitsExpression.maxNumber)
    const numberTwo: number = utils.getRandomInt(this.limitsExpression.minNumber, this.limitsExpression.maxNumber)
    const isAddition: boolean = utils.getRandomBool()

    this.question = `${numberOne} ${isAddition ? '+' : '-'} ${numberTwo} = ?`
    this.rightAnswer = String(isAddition ? numberOne + numberTwo : numberOne - numberTwo)
  }

  private startTimer(): void {
    this.timeoutToAnswer = setTimeout(() => this.endTimer(), this.millisecondsToAnswer)
  }

  private waitInputAnswer(): void {
    this.inputReader.waitInput(answer => this.sendAnswer(answer))
  }

  private endTimer(): void {
    this.messagePrinter.printTimeIsOverMessage()
    this.finishRound()
  }

  public sendAnswer(answer: string): void {
    clearTimeout(Number(this.timeoutToAnswer))
    this.currentAnswer = answer
    this.inputReader.pause()
    this.finishRound()
  }

  private finishRound(): void {
    this.isRightAnswer() ? this.attackForEnemy() : this.attackForHero()
    this.isGameOver() ? this.endGame() : this.nextRound()
  }

  private isRightAnswer(): boolean {
    return this.rightAnswer === this.currentAnswer
  }

  private isGameOver(): boolean {
    return this.hero.healthPoints <= 0 || this.enemy.healthPoints <= 0
  }

  private attackForEnemy(): void {
    this.enemy.healthPoints -= this.hero.attackPower
    this.messagePrinter.printAttackForEnemyMessage()
  }

  private attackForHero(): void {
    this.hero.healthPoints -= this.enemy.attackPower
    this.messagePrinter.printAttackForHeroMessage()
  }

  private endGame(): void {
    this.messagePrinter.printGameOverMessage()
    this.inputReader.close()
  }
}
