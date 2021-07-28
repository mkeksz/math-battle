export default class Character {
  private readonly attackPower: number
  private healthPoints: number

  public constructor(healthPoints: number, attackPower: number) {
    this.healthPoints = healthPoints
    this.attackPower = attackPower
  }

  public takeDamage(damage: number): void {
    this.healthPoints -= damage
  }

  public getHealth(): number {
    return this.healthPoints
  }

  public getAttackPower(): number {
    return this.attackPower
  }

  public isDead(): boolean {
    return this.healthPoints <= 0
  }
}
