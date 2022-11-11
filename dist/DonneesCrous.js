"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrousData = void 0;
const tslib_1 = require("tslib");
const Utils_js_1 = tslib_1.__importDefault(require("./Utils.js"));
class CrousData {
    constructor(id) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
    }
    toJSON() {
        return (0, Utils_js_1.default)(this, ...this.keys());
    }
}
exports.CrousData = CrousData;
//# sourceMappingURL=DonneesCrous.js.map