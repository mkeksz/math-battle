const assert =  require('chai')

export function shouldThrowFunction(func: Function, message?: string): void {
  try {
    func()
    assert.assert(true)
  } catch (err) {return}
  assert.assert(false, message || 'Функция не выдала ошибку.')
}

export function filterUniqueValuesOfArray(array: any[]): any[] {
  return array.filter((value, index) => array.indexOf(value) == index)
}
