export function getRandomInt(min: number, max: number): number {
  if (min >= max) throw Error('The min number must be less than the max number')
  const minCeil = Math.ceil(min)
  const maxFloor = Math.floor(max)
  return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil
}

export function getRandomBool(): boolean {
  return Boolean(Math.round(Math.random()))
}
