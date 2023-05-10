class EventManager {
  private listeners = {};

  addListener(eventName, callback) {
    if (!(this.listeners[eventName] instanceof Array)) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  runEvent(eventName) {
    for (const callback of this.listeners[eventName]) {
      callback();
    }
  }
}

class BoxPostList {
  static boxID = "box-post-list";
  private buttonListSelector = `#${BoxPostList.boxID}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }
  private init() {
    const buttonList = document.querySelector(this.buttonListSelector);

    buttonList.addEventListener("click", () => {
      this.hideBox();

      this.eventManager.runEvent("show-box-post-form");
    });

    this.eventManager.addListener("show-box-post-list", () => {
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
  private buttonFormSelector = `#${BoxPostForm.boxID}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }
  private init() {
    const buttonForm = document.querySelector(this.buttonFormSelector);

    buttonForm.addEventListener("click", () => {
      this.hideBox();

      this.eventManager.runEvent("show-box-post-list");
      //   const boxList = document.getElementById(BoxPostList.boxID);
      //   boxList.removeAttribute("style");
    });

    this.eventManager.addListener("show-box-post-form", () => {
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

const eventManager = new EventManager();
new BoxPostForm(eventManager);
new BoxPostList(eventManager);
