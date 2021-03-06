export function getRandomInt(min: number, max: number): number {
  if (min >= max) throw Error('The min number must be less than the max number')
  const minNumber = Math.floor(min)
  const maxNumber = Math.floor(max)
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
}

export function getRandomValueOfEnum<T extends object>(anEnum: T): T[keyof T] {
  const values = Object.values(anEnum)
  const randomIndex = getRandomInt(0, values.length)
  return values[randomIndex]
}
