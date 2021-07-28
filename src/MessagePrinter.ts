import MessageMaker from './MessageMaker'

export default class MessagePrinter extends MessageMaker{
  public printGameOverMessage(): void {
    this.game.enemy.getHealth() <= 0 ? this.printEnemyDeadMessage() : this.printHeroDeadMessage()
  }

  private printHeroDeadMessage(): void {
    console.info(this.getHeroDeadMessage())
  }

  private printEnemyDeadMessage(): void {
    console.info(this.getEnemyDeadMessage())
  }

  public printStartMessage(): void {
    console.info(this.getStartMessage())
  }

  public printTimeIsOverMessage(): void {
    console.info(this.getTimeIsOverMessage())
  }

  public printAttackFromEnemyToHeroMessage(): void {
    console.info(this.getAttackFromEnemyToHeroMessage())
  }

  public printAttackFromHeroToEnemyMessage(): void {
    console.info(this.getAttackFromHeroToEnemyMessage())
  }

  public printQuestion(): void {
    console.info(this.game.expression.getExpressionAsString())
  }
}
