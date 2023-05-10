interface ListenerInterface {
  (): void;
}

class EventManager {
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

class BoxPostList {
  static boxID = "box-post-list";
  static EVENT_CLICK_HIDE_BOX_LIST = "box-post-list-click-hide";
  private buttonListSelector = `#${BoxPostList.boxID}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }
  private init() {
    const buttonList = document.querySelector(this.buttonListSelector);

    buttonList.addEventListener("click", () => {
      this.hideBox();
      this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM);
    });

    this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST, () => {
      this.showBox();
    });
  }
  hideBox() {
    const boxList = document.getElementById(BoxPostList.boxID);
    boxList.style.display = "none";
  }
  showBox() {
    const boxList = document.getElementById(BoxPostList.boxID);
    boxList.removeAttribute("style");
  }
}
class BoxPostForm {
  static boxID = "box-post-form";
  static EVENT_CLICK_HIDE_BOX_FORM = "box-post-form-click-hide";

  private buttonFormSelector = `#${BoxPostForm.boxID}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }
  private init() {
    const buttonForm = document.querySelector(this.buttonFormSelector);

    buttonForm.addEventListener("click", () => {
      this.hideBox();
      this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST);
    });

    this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM, () => {
      this.showBox();
    });
  }
  hideBox() {
    const boxList = document.getElementById(BoxPostForm.boxID);
    boxList.style.display = "none";
  }
  showBox() {
    const boxList = document.getElementById(BoxPostForm.boxID);
    boxList.removeAttribute("style");
  }
}

class PostsPage {
  constructor(private eventManager: EventManager) {
    this.init();
  }

  private init() {
    new BoxPostList(this.eventManager);
    new BoxPostForm(this.eventManager);
  }
}

new PostsPage(new EventManager());
