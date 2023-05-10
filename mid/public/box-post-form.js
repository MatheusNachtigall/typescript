define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                _this.eventManager.runEvent(box_post_list_1.BoxPostList.EVENT_CLICK_HIDE_BOX_LIST);
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
    exports.BoxPostForm = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map