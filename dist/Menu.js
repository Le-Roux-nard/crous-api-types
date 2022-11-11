"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const DonneesCrous_js_1 = require("./DonneesCrous.js");
class Menu extends DonneesCrous_js_1.CrousData {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "horaire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "plats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    keys() {
        return ["date", "horaire", "plats", "keys", "toJSON", "isToday", "id"].filter((k) => typeof this[k] !== "function" && k !== "id");
    }
    toJSON() {
        const jsonifiedThis = super.toJSON();
        for (const key of Object.keys(jsonifiedThis)) {
            if (jsonifiedThis[key] instanceof Map) {
                jsonifiedThis[key] = Object.fromEntries(jsonifiedThis[key]);
            }
        }
        return jsonifiedThis;
    }
    isToday() {
        return new Date().toISOString().split("T")[0] === this.date;
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map