export default class Validators {
  static required(value: string): boolean {
    return typeof value != undefined && value !== null && value != "";
  }
  static maxLength(value: string, limit: number): boolean {
    return value.length <= limit;
  }
}
