import readline from 'readline'

export default class Readline {
  private readlineInterface: readline.Interface

  public constructor() {
    this.readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  public askQuestion(question: string, callback: (answer: string) => void) {
    this.readlineInterface.question(question, callback)
  }

  public close() {
    this.readlineInterface.close()
  }
}
