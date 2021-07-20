import {assert} from 'chai'
import {getRandomBool, getRandomInt} from '../src/utils'
import {filterUniqueValuesOfArray, shouldThrowFunction} from './helpers/utils'

describe('getRandomBool', () => {
  it('Возвращает булево значение', () => {
    assert.typeOf(getRandomBool(), 'boolean')
  })

  it('Возвращает случайное булево значение',  () => {
    const randomBooleans: boolean[] = []
    for (let i = 0; i < 100; i++) {randomBooleans.push(getRandomBool())}
    const uniqueBooleans: boolean[] = filterUniqueValuesOfArray(randomBooleans)
    assert.isTrue(uniqueBooleans.length > 1)
  })
})

describe('getRandomInt', () => {
  it('Возвращает целое число', () => {
    for (let i = 0; i < 5; i++) {assert.isTrue(Number.isInteger(getRandomInt(-10, 10)))}
  })

  it('Возвращает число равное min <= result < max', () => {
    const min: number = -1
    const max: number = 1
    for (let i = 0; i < 10; i++) {
      const result: number = getRandomInt(min, max)
      assert.isTrue(min <= result && result < max)
    }
  })

  it('Возвращает случайное число',  () => {
    const min: number = -1000
    const max: number = 1000
    const randomNumbers: number[] = []
    for (let i = 0; i < 10; i++) {randomNumbers.push(getRandomInt(min, max))}
    const uniqueNumbers: number[] = filterUniqueValuesOfArray(randomNumbers)

    assert.isTrue(uniqueNumbers.length > 1)
  })

  it('Выдаст ошибку если аргумент min больше аргумента max', () => {
    shouldThrowFunction(() => getRandomInt(1, 0))
  })

  it('Выдаст ошибку если аргумент min равен аргументу max', () => {
    shouldThrowFunction(() => getRandomInt(1, 1))
  })

  it('Сработает с дробными числами в аргументах', () => {
    assert.isTrue(Number.isInteger(getRandomInt(1.534, 5.234)))
  })
})
