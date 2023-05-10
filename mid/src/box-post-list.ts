import { EventManager } from "./event-manager";
import { BoxPostForm } from "./box-post-form";

export class BoxPostList {
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
