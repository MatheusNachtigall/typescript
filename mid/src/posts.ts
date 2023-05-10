import { EventManager } from "./event-manager";
import { BoxPostForm } from "./box-post-form";
import { BoxPostList } from "./box-post-list";
class PostsPage {
  constructor(private eventManager: EventManager) {
    this.init();
  }

  private init() {
    new BoxPostList(this.eventManager);
    new BoxPostForm(this.eventManager);
  }
}

new PostsPage(new EventManager());
