import EventEmitter from 'events'

export default class Emitter {
  private emitter: EventEmitter

  public constructor() {
    this.emitter = new EventEmitter()
  }

  public emit(event: string): void {
    this.emitter.emit(event)
  }

  public on(event: string, listener: () => void): void {
    this.emitter.on(event, listener)
  }
}
