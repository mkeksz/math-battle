import assert from 'chai'

export function shouldThrowFunction(func: () => any, message?: string): void {
  try {
    func()
    assert.assert(true)
  } catch (err) {return}
  assert.assert(false, message ?? 'Функция не выдала ошибку.')
}

export function filterUniqueValuesOfArray(array: any[]): any[] {
  return [...new Set(array)]
}
