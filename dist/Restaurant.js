"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const DonneesCrous_js_1 = require("./DonneesCrous.js");
class Restaurant extends DonneesCrous_js_1.CrousData {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "nom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "short_desc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "opening", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contact", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "horaires", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moyen_acces", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paiements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "menus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    getTodayMenu() {
        return this.menus?.find((menu) => menu.isToday());
    }
    keys() {
        return ["nom", "short_desc", "opening", "position", "type", "contact", "horaires", "moyen_acces", "paiements", "menus", "getTodayMenu", "keys", "toJSON", "id"].filter((k) => typeof this[k] !== "function");
    }
    toJSON() {
        const jsonifiedThis = super.toJSON();
        jsonifiedThis.menus = this.menus?.map((menu) => menu.toJSON()) ?? [];
        return jsonifiedThis;
    }
}
exports.Restaurant = Restaurant;
//# sourceMappingURL=Restaurant.js.map