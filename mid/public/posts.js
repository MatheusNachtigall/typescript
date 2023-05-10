var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = {};
    }
    EventManager.prototype.addListener = function (eventName, callback) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    };
    EventManager.prototype.runEvent = function (eventName) {
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback();
        }
    };
    return EventManager;
}());
var BoxPostList = /** @class */ (function () {
    function BoxPostList(eventManager) {
        this.eventManager = eventManager;
        this.buttonListSelector = "#" + BoxPostList.boxID + ">button[type=button]";
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener("click", function () {
            _this.hideBox();
            _this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM);
        });
        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST, function () {
            _this.showBox();
        });
    };
    BoxPostList.prototype.hideBox = function () {
        var boxList = document.getElementById(BoxPostList.boxID);
        boxList.style.display = "none";
    };
    BoxPostList.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostList.boxID);
        boxList.removeAttribute("style");
    };
    BoxPostList.boxID = "box-post-list";
    BoxPostList.EVENT_CLICK_HIDE_BOX_LIST = "box-post-list-click-hide";
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm(eventManager) {
        this.eventManager = eventManager;
        this.buttonFormSelector = "#" + BoxPostForm.boxID + ">button[type=button]";
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener("click", function () {
            _this.hideBox();
            _this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST);
        });
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM, function () {
            _this.showBox();
        });
    };
    BoxPostForm.prototype.hideBox = function () {
        var boxList = document.getElementById(BoxPostForm.boxID);
        boxList.style.display = "none";
    };
    BoxPostForm.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostForm.boxID);
        boxList.removeAttribute("style");
    };
    BoxPostForm.boxID = "box-post-form";
    BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM = "box-post-form-click-hide";
    return BoxPostForm;
}());
var PostsPage = /** @class */ (function () {
    function PostsPage(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    PostsPage.prototype.init = function () {
        new BoxPostList(this.eventManager);
        new BoxPostForm(this.eventManager);
    };
    return PostsPage;
}());
new PostsPage(new EventManager());
//# sourceMappingURL=posts.js.map