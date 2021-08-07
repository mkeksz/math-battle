import {DEFAULT_ENEMY, DEFAULT_HERO} from './DEFAULT_VALUES'
import {EventsMathBattle} from './mathBattle.enums'
import {Expression} from './Expression'
import Character from './Character'
import Timer from './Timer'
import Emitter from './Emitter'

export default class MathBattle {
  public readonly emitter: Emitter
  public readonly expression: Expression
  public readonly hero: Character
  public readonly enemy: Character
  private readonly timer: Timer
  private gameStarted: boolean
  private currentAnswer?: number

  public constructor(millisecondsToAnswer: number) {
    this.hero = DEFAULT_HERO
    this.enemy = DEFAULT_ENEMY
    this.expression = new Expression()
    this.emitter = new Emitter()
    this.timer = new Timer(millisecondsToAnswer)
    this.gameStarted = false
  }

  public startGame(): void {
    this.gameStarted = true
    this.startRound()
  }

  private startRound(): void {
    this.clearAnswer()
    this.expression.generateRandomExpression()
    this.emitter.emit(EventsMathBattle.startRound)
    this.timer.start(() => this.endTimer())
  }

  private clearAnswer(): void {
    this.currentAnswer = undefined
  }

  private endTimer(): void {
    this.emitter.emit(EventsMathBattle.endTimer)
    this.finishRound()
  }

  protected finishRound(): void {
    this.isRightAnswer() ? this.attackFromHeroToEnemy() : this.attackFromEnemyToHero()
    this.isGameOver() ? this.endGame() : this.startRound()
  }

  private isRightAnswer(): boolean {
    return this.currentAnswer === this.expression.getAnswer()
  }

  private attackFromHeroToEnemy(): void {
    this.enemy.takeDamage(this.hero.getAttackPower())
    this.emitter.emit(EventsMathBattle.attackFromHeroToEnemy)
  }

  private attackFromEnemyToHero(): void {
    this.hero.takeDamage(this.enemy.getAttackPower())
    this.emitter.emit(EventsMathBattle.attackFromEnemyToHero)
  }

  private isGameOver(): boolean {
    return this.hero.isDead() || this.enemy.isDead()
  }

  private endGame(): void {
    this.emitter.emit(EventsMathBattle.endGame)
  }

  public sendAnswer(answer: number): void {
    if (!this.gameStarted) throw Error('Нельзя отправлять ответы до старта игры')
    this.currentAnswer = answer
    this.timer.clear()
    this.finishRound()
  }

  public getSecondsToAnswer(): number {
    const millisecondsInSecond = 1000
    return this.timer.millisecondsOfTimeout / millisecondsInSecond
  }
}
