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
            _this.eventManager.runEvent("show-box-post-form");
        });
        this.eventManager.addListener("show-box-post-list", function () {
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
            _this.eventManager.runEvent("show-box-post-list");
            //   const boxList = document.getElementById(BoxPostList.boxID);
            //   boxList.removeAttribute("style");
        });
        this.eventManager.addListener("show-box-post-form", function () {
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
    return BoxPostForm;
}());
var eventManager = new EventManager();
new BoxPostForm(eventManager);
new BoxPostList(eventManager);
//# sourceMappingURL=posts.js.map