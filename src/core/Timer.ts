export default class Timer {
  public readonly millisecondsOfTimeout: number
  private timeout?: NodeJS.Timeout

  public constructor(millisecondsOfTimeout: number) {
    this.millisecondsOfTimeout = millisecondsOfTimeout
  }

  public start(callback: () => void): void {
    this.timeout = setTimeout(callback, this.millisecondsOfTimeout)
  }

  public clear(): void {
    clearTimeout(Number(this.timeout))
  }
}
