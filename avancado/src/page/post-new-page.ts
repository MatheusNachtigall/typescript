import Page from "./page";
import Form from "../components/form";
import PostHttp from "../http/post-http";
import Validators from "../components/validators/validators";
import ValidatorManager from "../components/validators/validator-manager";

export default class PostNewPage implements Page {
  constructor(private postHttp: PostHttp) {
    this.init();
  }
  init(): void {
    document
      .querySelector("#my-form")
      .addEventListener("submit", (event: Event) => {
        event.preventDefault();
        this.submit();
        return false;
      });
  }

  submit() {
    if (!this.isValid()) {
      return;
    }

    this.postHttp
      .save({
        title: Form.getValueFromField("#title"),
        body: Form.getValueFromField("#body"),
      })
      .then((response) => {
        console.log(`response: ${JSON.stringify(response)}`);
      });
    this.goToPostList();
  }

  isValid(): boolean {
    const validators = new ValidatorManager([
      {
        selectorField: "#title",
        rules: [Validators.required],
        messageInvalid: "Titulo Obrigatorio",
      },
      {
        selectorField: "#body",
        rules: [Validators.required],
        messageInvalid: "Body Obrigatorio",
      },
    ]);

    return validators.isValid();
  }

  goToPostList() {
    window.location.href = "/post/post-list.html";
  }
}

new PostNewPage(new PostHttp());
