interface ListenerInterface {
  (): void;
}

export class EventManager {
  private listeners: { [eventName: string]: Array<ListenerInterface> } = {};

  addListener(eventName: string, callback: ListenerInterface) {
    if (!(this.listeners[eventName] instanceof Array)) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  runEvent(eventName: string) {
    for (const callback of this.listeners[eventName]) {
      callback();
    }
  }
}
