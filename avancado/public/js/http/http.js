define(["require", "exports", "./response"], function (require, exports, response_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
        HttpVerbs["PUT"] = "PUT";
        HttpVerbs["DELETE"] = "DELETE";
    })(HttpVerbs || (HttpVerbs = {}));
    var Http = /** @class */ (function () {
        function Http() {
        }
        Http.prototype.get = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhttp = _this.createXHttpRequest(HttpVerbs.GET, url);
                _this.configureCallback(xhttp, resolve, reject);
                xhttp.send();
            });
        };
        Http.prototype.post = function (url, data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhttp = _this.createXHttpRequest(HttpVerbs.POST, url);
                _this.configureCallback(xhttp, resolve, reject);
                xhttp.send(JSON.stringify(data));
            });
        };
        Http.prototype.createXHttpRequest = function (method, url) {
            var xhttp = new XMLHttpRequest();
            xhttp.open(method, url, true);
            return xhttp;
        };
        Http.prototype.configureCallback = function (xhttp, resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    var response = new response_1.default(this.responseText, this.status);
                    if (this.status.toString().startsWith("20")) {
                        resolve(response);
                    }
                    else {
                        if (this.status.toString().startsWith("40") ||
                            this.status.toString().startsWith("50")) {
                            //Erro
                            reject(this.responseText);
                        }
                    }
                }
            };
        };
        return Http;
    }());
    exports.Http = Http;
});
//# sourceMappingURL=http.js.map