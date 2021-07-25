export function getRandomInt(min: number, max: number): number {
  if (min >= max) throw 'The min number must be less than the max number'
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomBool(): boolean {
  return Boolean(Math.round(Math.random()))
}
