var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector("#box-post-list>button[type=button]");
        buttonList.addEventListener("click", function () {
            _this.hideBox();
            var boxForm = document.getElementById("box-post-form");
            boxForm.removeAttribute("style");
        });
    };
    BoxPostList.prototype.hideBox = function () {
        var boxList = document.getElementById("box-post-list");
        boxList.style.display = "none";
    };
    BoxPostList.prototype.showBox = function () {
        var boxList = document.getElementById("box-post-list");
        boxList.removeAttribute("style");
    };
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm() {
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector("#box-post-form>button[type=button]");
        buttonForm.addEventListener("click", function () {
            _this.hideBox();
            var boxList = document.getElementById("box-post-list");
            boxList.removeAttribute("style");
        });
    };
    BoxPostForm.prototype.hideBox = function () {
        var boxList = document.getElementById("box-post-form");
        boxList.style.display = "none";
    };
    BoxPostForm.prototype.showBox = function () {
        var boxList = document.getElementById("box-post-form");
        boxList.removeAttribute("style");
    };
    return BoxPostForm;
}());
new BoxPostForm();
new BoxPostList();
//# sourceMappingURL=posts.js.map