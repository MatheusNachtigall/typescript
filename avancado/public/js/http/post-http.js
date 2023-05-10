define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.url = "https://jsonplaceholder.typicode.com/posts";
            this.http = new http_1.Http();
        }
        PostHttp.prototype.query = function () {
            return this.http.get(this.url).then(function (response) {
                return JSON.parse(response.body);
            });
        };
        PostHttp.prototype.save = function () { };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map