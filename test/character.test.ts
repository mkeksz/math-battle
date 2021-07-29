import {assert} from 'chai'
import Character from '../src/core/Character'

describe('Character', () => {
  describe('Возвращает attackPower указанный при создании', () => {
    const healthPoints = 100
    it('Должно вернуть 10', () => {
      const attackPower = 10
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getAttackPower(), attackPower)
    })

    it('Должно вернуть 25', () => {
      const attackPower = 25
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getAttackPower(), attackPower)
    })

    it('Должно вернуть 80', () => {
      const attackPower = 80
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getAttackPower(), attackPower)
    })
  })

  describe('Возвращает текущее значение healthPoints', () => {
    const attackPower = 1
    it('Должно вернуть 10', () => {
      const healthPoints = 10
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getHealth(), healthPoints)
    })

    it('Должно вернуть 25', () => {
      const healthPoints = 25
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getHealth(), healthPoints)
    })

    it('Должно вернуть 80', () => {
      const healthPoints = 80
      const character = new Character(healthPoints, attackPower)
      assert.equal(character.getHealth(), healthPoints)
    })
  })

  describe('Вызов takeDamage уменьшает healthPoints', () => {
    const character = new Character(100, 1)
    it('Должно вернуть 50', () => {
      character.takeDamage(50)
      assert.equal(character.getHealth(), 50)
    })

    it('Должно вернуть 40', () => {
      character.takeDamage(10)
      assert.equal(character.getHealth(), 40)
    })

    it('Должно вернуть 20', () => {
      character.takeDamage(20)
      assert.equal(character.getHealth(), 20)
    })
  })

  describe('isDead возвращает true если healthPoints <= 0', () => {
    it('Должно вернуть false при healthPoints = 100', () => {
      const character = new Character(100, 1)
      assert.equal(character.isDead(), false)
    })

    it('Должно вернуть false при healthPoints = 1', () => {
      const character = new Character(1, 1)
      assert.equal(character.isDead(), false)
    })

    it('Должно вернуть false при healthPoints = 0.001', () => {
      const character = new Character(0.001, 1)
      assert.equal(character.isDead(), false)
    })

    it('Должно вернуть true при healthPoints = 0', () => {
      const character = new Character(0, 1)
      assert.equal(character.isDead(), true)
    })

    it('Должно вернуть true при healthPoints = -0.001', () => {
      const character = new Character(-0.001, 1)
      assert.equal(character.isDead(), true)
    })

    it('Должно вернуть true при healthPoints = -1', () => {
      const character = new Character(-1, 1)
      assert.equal(character.isDead(), true)
    })
  })
})
