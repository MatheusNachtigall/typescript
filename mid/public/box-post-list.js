define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                _this.eventManager.runEvent(box_post_form_1.BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM);
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
    exports.BoxPostList = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map