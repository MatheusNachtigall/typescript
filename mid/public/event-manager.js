define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.EventManager = EventManager;
});
//# sourceMappingURL=event-manager.js.map