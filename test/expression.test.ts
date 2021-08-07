import {assert} from 'chai'
import {Expression, MathSymbols} from '../src/core/Expression'
import {filterUniqueValuesOfArray} from './helpers/utils'

describe('Expression', () => {
  describe('getExpressionAsString возвращает строку выражения вида ${number} ${MathSymbol} ${number} = ?', () => {
    it('Должно вернуть 5 + 5 = ?', () => {
      const expression = new Expression()
      expression.numberOne = 5
      expression.numberTwo = 5
      expression.mathSymbol = MathSymbols.Plus
      assert.equal(expression.getExpressionAsString(), '5 + 5 = ?')
    })

    it('Должно вернуть 25 * 10 = ?', () => {
      const expression = new Expression()
      expression.numberOne = 25
      expression.numberTwo = 10
      expression.mathSymbol = MathSymbols.Multiplication
      assert.equal(expression.getExpressionAsString(), '25 * 10 = ?')
    })

    it('Должно вернуть 100 - 50 = ?', () => {
      const expression = new Expression()
      expression.numberOne = 100
      expression.numberTwo = 50
      expression.mathSymbol = MathSymbols.Minus
      assert.equal(expression.getExpressionAsString(), '100 - 50 = ?')
    })
  })

  it('generateRandomExpression генерирует случайное выражение', () => {
    const expression = new Expression()
    const randomExpressions: string[] = []
    for (let i = 0; i < 5; i++) {
      expression.generateRandomExpression()
      randomExpressions.push(expression.getExpressionAsString())
    }
    const uniqueExpressions = filterUniqueValuesOfArray(randomExpressions)
    assert.isTrue(uniqueExpressions.length > 1)
  })

  describe('getAnswer возвращает правильный ответ', () => {
    it('Должно вернуть 10', () => {
      const expression = new Expression()
      expression.numberOne = 5
      expression.numberTwo = 5
      expression.mathSymbol = MathSymbols.Plus
      assert.equal(expression.getAnswer(), 10)
    })

    it('Должно вернуть 50', () => {
      const expression = new Expression()
      expression.numberOne = 25
      expression.numberTwo = 2
      expression.mathSymbol = MathSymbols.Multiplication
      assert.equal(expression.getAnswer(), 50)
    })

    it('Должно вернуть -10', () => {
      const expression = new Expression()
      expression.numberOne = 10
      expression.numberTwo = 20
      expression.mathSymbol = MathSymbols.Minus
      assert.equal(expression.getAnswer(), -10)
    })
  })
})
