import readline from 'readline'

export default class Readline {
  private readlineInterface: readline.Interface

  public constructor() {
    this.readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  /**
   * Ожидает текстовый ответ от пользователя в командной строке и отправляет этот ответ в callback.
   * @param callback Обработчик текстового ответа пользователя.
   * @return {Promise<string>} Promise ожидающий текстовый ответ от пользователя.
   */
  public waitInput(callback: (inputText: string) => void): void {
    this.readlineInterface.resume()
    this.readlineInterface.question('', callback)
  }

  /**
   * Закрывает ожидание ответа в командной строке от пользователя.
   */
  public close(): void {
    this.readlineInterface.close()
  }

  public pause(): void {
    this.readlineInterface.pause()
  }
}
