import { EventManager } from "./event-manager";
import { BoxPostList } from "./box-post-list";

export class BoxPostForm {
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
