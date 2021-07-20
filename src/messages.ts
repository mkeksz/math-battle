export function makeAttackForEnemyMessage(attackPowerHero: number, healthPointsEnemy: number): string {
  return `Соперник теряет ${attackPowerHero} здоровья (осталось ${healthPointsEnemy})`
}

export function makeAttackForHeroMessage(attackPowerEnemy: number, healthPointsHero: number): string {
  return `Вы теряете ${attackPowerEnemy} здоровья (осталось ${healthPointsHero})`
}

export function makeEnemyDeadMessage(): string {
  return 'Вы выиграли! Игра окончена.'
}

export function makeHeroDeadMessage(): string {
  return 'Вы проиграли... Игра окончена.'
}

export function makeStartGameMessage(secondsToAnswer: number): string {
  return `Игра начинается! (Время на каждый вопрос: ${secondsToAnswer}с.)`
}

export function makeTimeIsOverMessage(): string {
  return 'Время вышло!'
}
