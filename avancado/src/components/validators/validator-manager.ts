import Form from "../../components/form";

interface ruleCallback {
  (value: string);
}

export default class ValidatorManager {
  constructor(
    private chainRules: Array<{
      selectorField: string;
      rules: Array<ruleCallback>;
      messageInvalid: string;
    }>
  ) {}
  isValid(): boolean {
    for (let ruleSet of this.chainRules) {
      const value = Form.getValueFromField(ruleSet.selectorField);
      for (let rule of ruleSet.rules) {
        if (!rule(value)) {
          alert(ruleSet.messageInvalid);
          return false;
        }
      }
    }
    return true;
  }
}
