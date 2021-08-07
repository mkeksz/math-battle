import {LIMITS_EXPRESSION} from './DEFAULT_VALUES'
import {getRandomInt, getRandomValueOfEnum} from './utils'

export enum MathSymbols {
  Multiplication = '*',
  Plus = '+',
  Minus = '-'
}

export class Expression {
  public numberOne: number = 0
  public numberTwo: number = 0
  public mathSymbol: MathSymbols = MathSymbols.Plus

  public generateRandomExpression(): void {
    this.numberOne = getRandomInt(LIMITS_EXPRESSION.min, LIMITS_EXPRESSION.max)
    this.numberTwo = getRandomInt(LIMITS_EXPRESSION.min, LIMITS_EXPRESSION.max)
    this.mathSymbol = getRandomValueOfEnum(MathSymbols)
  }

  public getAnswer(): number {
    let result: number
    switch (this.mathSymbol) {
      default:
      case MathSymbols.Multiplication:
        result = this.numberOne * this.numberTwo
        break
      case MathSymbols.Minus:
        result = this.numberOne - this.numberTwo
        break
      case MathSymbols.Plus:
        result = this.numberOne + this.numberTwo
        break
    }
    return result
  }

  public getExpressionAsString(): `${number} ${MathSymbols} ${number} = ?` {
    return `${this.numberOne} ${this.mathSymbol} ${this.numberTwo} = ?`
  }
}
