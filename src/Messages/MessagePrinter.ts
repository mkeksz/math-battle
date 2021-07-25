import MessageMaker from './MessageMaker'

export default class MessagePrinter extends MessageMaker{
  public printGameOverMessage(): void {
    this.game.enemy.healthPoints <= 0 ? this.printEnemyDeadMessage() : this.printHeroDeadMessage()
  }

  public printHeroDeadMessage(): void {
    console.info(this.getHeroDeadMessage())
  }

  public printEnemyDeadMessage(): void {
    console.info(this.getEnemyDeadMessage())
  }

  public printStartMessage(): void {
    console.info(this.getStartMessage())
  }

  public printTimeIsOverMessage(): void {
    console.info(this.getTimeIsOverMessage())
  }

  public printAttackForHeroMessage(): void {
    console.info(this.getAttackForHeroMessage())
  }

  public printAttackForEnemyMessage(): void {
    console.info(this.getAttackForEnemyMessage())
  }

  public printQuestion(): void {
    console.info(this.game.question)
  }
}
