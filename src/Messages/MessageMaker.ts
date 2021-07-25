import Game from '../Game'

export default class MessageMaker {
  protected game: Game

  public constructor(game: Game) {
    this.game = game
  }

  protected getStartMessage(): string {
    const millisecondsInSecond = 1000
    return `Игра начинается! (Время на каждый вопрос: ${this.game.millisecondsToAnswer / millisecondsInSecond}с.)`
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

  protected getAttackForHeroMessage(): string {
    return `Вы теряете ${this.game.enemy.attackPower} здоровья (осталось ${this.game.hero.healthPoints})`
  }

  protected getAttackForEnemyMessage(): string {
    return `Соперник теряет ${this.game.hero.attackPower} здоровья (осталось ${this.game.enemy.healthPoints})`
  }
}
