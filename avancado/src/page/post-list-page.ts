import Page from "./page";
import PostHttp from "../http/post-http";
import PostTable from "../components/post-table";

export default class PostListPage implements Page {
  constructor(private postHttp: PostHttp, private postTable: PostTable) {
    this.init();
  }
  init(): void {
    this.getPosts();
  }

  getPosts() {
    this.postHttp.query().then((posts: Array<string>) => {
      this.postTable.data = posts;
      this.postTable.make();
    });
  }
}

const postHttp = new PostHttp();
const postTable = new PostTable("#my-table>tbody", ["title", "body"]);
new PostListPage(postHttp, postTable);
