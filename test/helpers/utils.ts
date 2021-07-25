import assert from 'chai'

export function shouldThrowFunction(func: () => any, message?: string): void {
  try {
    func()
    assert.assert(true)
  } catch (err) {return}
  assert.assert(false, message || 'Функция не выдала ошибку.')
}

export function filterUniqueValuesOfArray(array: any[]): any[] {
  return array.filter((value: any, index: number): boolean => array.indexOf(value) === index)
}
