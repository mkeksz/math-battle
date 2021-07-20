import {getRandomBool, getRandomInt, inputTextInTime as printQuestion, sleep} from './utils'
import * as settings from './settings'
import * as messages from './messages'

const EMPTY_EXPRESSION: Expression = {question: '', answer: ''}

export default class Game {
  private expression: Expression
  private readonly hero: Character
  private readonly enemy: Character
  private answer: string

  public constructor() {
    this.expression = Object.assign({}, EMPTY_EXPRESSION)
    this.hero = Object.assign({}, settings.INITIAL_HERO)
    this.enemy = Object.assign({}, settings.INITIAL_ENEMY)
    this.answer = ''
  }

  public startGame(): void {
    Game.printStartMessage()
    sleep(settings.MILLISECONDS_TO_START).then(() => this.nextRound())
  }

  private nextRound(): void {
    this.clearAnswer()
    this.generateNewExpression()
    printQuestion(this.expression.question, settings.MILLISECONDS_TO_ANSWER).then(answer => {
      this.answer = answer
      this.finishRound()
    }).catch(() => {
      Game.printTimeIsOverMessage()
      this.finishRound()
    })
  }

  private clearAnswer(): void {
    this.answer = ''
  }

  private finishRound(): void {
    this.isRightAnswer() ? this.attackForEnemy() : this.attackForHero()
    this.isGameOver() ? this.printGameOverMessage() : this.nextRound()
  }

  private isGameOver(): boolean {
    return this.hero.healthPoints <= 0 || this.enemy.healthPoints <= 0
  }

  private attackForEnemy(): void {
    this.enemy.healthPoints -= this.hero.attackPower
    this.printAttackMessageForEnemy()
  }

  private attackForHero(): void {
    this.hero.healthPoints -= this.enemy.attackPower
    this.printAttackMessageForHero()
  }

  private static printStartMessage(): void {
    console.info(messages.makeStartGameMessage(settings.SECONDS_TO_ANSWER))
  }

  private printAttackMessageForHero(): void {
    console.info(messages.makeAttackForHeroMessage(this.enemy.attackPower, this.hero.healthPoints))
  }

  private printAttackMessageForEnemy(): void {
    console.info(messages.makeAttackForEnemyMessage(this.hero.attackPower, this.enemy.healthPoints))
  }

  private printGameOverMessage(): void {
    const message: string = this.enemy.healthPoints <= 0 ? messages.makeEnemyDeadMessage() : messages.makeHeroDeadMessage()
    console.info(message)
  }

  private static printTimeIsOverMessage(): void {
    console.info(messages.makeTimeIsOverMessage())
  }

  private isRightAnswer(): boolean {
    return this.expression.answer == this.answer
  }

  private generateNewExpression() {
    const numberOne: number = getRandomInt(settings.LIMITS_EXPRESSION.minNumber, settings.LIMITS_EXPRESSION.maxNumber)
    const numberTwo: number = getRandomInt(settings.LIMITS_EXPRESSION.minNumber, settings.LIMITS_EXPRESSION.maxNumber)
    const isAddition: boolean = getRandomBool()

    const answer: string = isAddition ? String(numberOne + numberTwo) : String(numberOne - numberTwo)
    const question: string = `${numberOne} ${isAddition ? '+' : '-'} ${numberTwo} = ?\n`

    this.expression = {answer, question}
  }
}
