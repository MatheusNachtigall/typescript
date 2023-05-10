import { Http } from "./http";
import Response from "./response";
import PostTable from "../components/post-table";
export default class PostHttp {
  private http: Http;
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor() {
    this.http = new Http();
  }

  query(): Promise<Array<string>> {
    return this.http.get(this.url).then(function (response: Response) {
      return JSON.parse(response.body);
    });
  }
  save() {}
}
