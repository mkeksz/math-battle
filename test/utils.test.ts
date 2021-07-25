import {assert} from 'chai'
import {getRandomBool, getRandomInt} from '../src/utils'
import {filterUniqueValuesOfArray, shouldThrowFunction} from './helpers/utils'

describe('getRandomBool', () => {
  it('Возвращает булево значение', () => {
    assert.typeOf(getRandomBool(), 'boolean')
  })

  it('Возвращает случайное булево значение',  () => {
    const countIterate = 100
    const randomBooleans: boolean[] = []
    for (let i = 0; i < countIterate; i++) {
      randomBooleans.push(getRandomBool())
    }
    const uniqueBooleans: boolean[] = filterUniqueValuesOfArray(randomBooleans)
    assert.isTrue(uniqueBooleans.length > 1)
  })
})

describe('getRandomInt', () => {
  it('Возвращает целое число', () => {
    const min = -10.23
    const max = 10.45
    const countIterate = 5
    for (let i = 0; i < countIterate; i++) {
      const isInteger = Number.isInteger(getRandomInt(min, max))
      assert.isTrue(isInteger)
    }
  })

  it('Возвращает число равное min <= result < max', () => {
    const countIterate = 10
    const min = 0
    const max = 1
    for (let i = 0; i < countIterate; i++) {
      const result = getRandomInt(min, max)
      assert.isTrue(result === min)
    }
  })

  it('Возвращает случайное число',  () => {
    const countIterate = 10
    const min = -1000
    const max = 1000
    const randomNumbers: number[] = []
    for (let i = 0; i < countIterate; i++) {
      randomNumbers.push(getRandomInt(min, max))
    }
    const uniqueNumbers: number[] = filterUniqueValuesOfArray(randomNumbers)
    assert.isTrue(uniqueNumbers.length > 1)
  })

  it('Выдаст ошибку если аргумент min больше аргумента max', () => {
    shouldThrowFunction(() => getRandomInt(1, 0))
  })

  it('Выдаст ошибку если аргумент min равен аргументу max', () => {
    shouldThrowFunction(() => getRandomInt(1, 1))
  })
})
