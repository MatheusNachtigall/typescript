class BoxPostList {
  constructor() {
    this.init();
  }
  private init() {
    const buttonList = document.querySelector(
      "#box-post-list>button[type=button]"
    );

    buttonList.addEventListener("click", () => {
      this.hideBox();

      const boxForm = document.getElementById("box-post-form");
      boxForm.removeAttribute("style");
    });
  }
  hideBox() {
    const boxList = document.getElementById("box-post-list");
    boxList.style.display = "none";
  }
  showBox() {
    const boxList = document.getElementById("box-post-list");
    boxList.removeAttribute("style");
  }
}
class BoxPostForm {
  constructor() {
    this.init();
  }
  private init() {
    const buttonForm = document.querySelector(
      "#box-post-form>button[type=button]"
    );

    buttonForm.addEventListener("click", () => {
      this.hideBox();

      const boxList = document.getElementById("box-post-list");
      boxList.removeAttribute("style");
    });
  }
  hideBox() {
    const boxList = document.getElementById("box-post-form");
    boxList.style.display = "none";
  }
  showBox() {
    const boxList = document.getElementById("box-post-form");
    boxList.removeAttribute("style");
  }
}

new BoxPostForm();
new BoxPostList();
