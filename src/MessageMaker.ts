import MathBattle from './core/MathBattle'

export default class MessageMaker {
  protected game: MathBattle

  public constructor(game: MathBattle) {
    this.game = game
  }

  protected getStartMessage(): string {
    return `Игра начинается! (Время на каждый вопрос: ${this.game.getSecondsToAnswer()}с.)`
  }

  protected getHeroDeadMessage(): string {
    return 'Вы проиграли... Игра окончена.'
  }

  protected getEnemyDeadMessage(): string {
    return 'Вы выиграли! Игра окончена.'
  }

  protected getTimeIsOverMessage(): string {
    return 'Время вышло!'
  }

  protected getAttackFromEnemyToHeroMessage(): string {
    return `Вы теряете ${this.game.enemy.getAttackPower()} здоровья (осталось ${this.game.hero.getHealth()})`
  }

  protected getAttackFromHeroToEnemyMessage(): string {
    return `Соперник теряет ${this.game.hero.getAttackPower()} здоровья (осталось ${this.game.enemy.getHealth()})`
  }
}
