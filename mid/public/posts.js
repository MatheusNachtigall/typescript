var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.buttonListSelector = "#" + BoxPostList.boxID + ">button[type=button]";
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener("click", function () {
            _this.hideBox();
            var boxForm = document.getElementById(BoxPostForm.boxID);
            boxForm.removeAttribute("style");
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
    function BoxPostForm() {
        this.buttonFormSelector = "#" + BoxPostForm.boxID + ">button[type=button]";
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener("click", function () {
            _this.hideBox();
            var boxList = document.getElementById(BoxPostList.boxID);
            boxList.removeAttribute("style");
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
new BoxPostForm();
new BoxPostList();
//# sourceMappingURL=posts.js.map