class BoxPostList {
  static boxID = "box-post-list";
  private buttonListSelector = `#${BoxPostList.boxID}>button[type=button]`;

  constructor() {
    this.init();
  }
  private init() {
    const buttonList = document.querySelector(this.buttonListSelector);

    buttonList.addEventListener("click", () => {
      this.hideBox();

      const boxForm = document.getElementById(BoxPostForm.boxID);
      boxForm.removeAttribute("style");
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

  constructor() {
    this.init();
  }
  private init() {
    const buttonForm = document.querySelector(this.buttonFormSelector);

    buttonForm.addEventListener("click", () => {
      this.hideBox();

      const boxList = document.getElementById(BoxPostList.boxID);
      boxList.removeAttribute("style");
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

new BoxPostForm();
new BoxPostList();
