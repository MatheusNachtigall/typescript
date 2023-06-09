define(["require", "exports", "./event-manager", "./box-post-form", "./box-post-list"], function (require, exports, event_manager_1, box_post_form_1, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostsPage = /** @class */ (function () {
        function PostsPage(eventManager) {
            this.eventManager = eventManager;
            this.init();
        }
        PostsPage.prototype.init = function () {
            new box_post_list_1.BoxPostList(this.eventManager);
            new box_post_form_1.BoxPostForm(this.eventManager);
        };
        return PostsPage;
    }());
    new PostsPage(new event_manager_1.EventManager());
});
//# sourceMappingURL=posts.js.map