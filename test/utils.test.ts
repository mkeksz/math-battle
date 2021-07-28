import {assert} from 'chai'
import {getRandomInt} from '../src/core/utils'
import {filterUniqueValuesOfArray, shouldThrowFunction} from './helpers/utils'

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
