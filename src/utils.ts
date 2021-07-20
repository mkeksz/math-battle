import Readline from './Readline'

/**
 * Выводит в консоль текст и возвращает Promise ожидающий текстовый ответ от пользователя
 * в теченни заданного времени.
 *
 * @param {string} message Выводимое сообщение.
 * @param {number} milliseconds Количество миллисекунд до прекращения ожидания ответа.
 * Если 0, то ограничение по времени отстутсвует.
 * @return {Promise<string>} Promise ожидающий текстовый ответ от пользователя.
 */
export function inputTextInTime(message: string, milliseconds?: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const readline = new Readline()

    const timeout = setTimeout(() => {
      reject()
      readline.close()
    }, milliseconds)

    readline.askQuestion(message, answer => {
      resolve(answer)
      readline.close()
      clearTimeout(timeout)
    })
  })
}

export function getRandomInt(min: number, max: number): number {
  if (min >= max) throw 'The min number must be less than the max number'
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomBool(): boolean {
  return Boolean(Math.round(Math.random()))
}

export function sleep(milliseconds: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(() => resolve(), milliseconds))
}
