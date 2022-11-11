"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actualites = void 0;
const DonneesCrous_js_1 = require("./DonneesCrous.js");
class Actualites extends DonneesCrous_js_1.CrousData {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "titre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "category", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "image", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content", {
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
    }
    keys() {
        return ["titre", "date", "category", "image", "content", "type", "keys", "id", "toJSON"].filter((k) => typeof this[k] !== "function");
    }
}
exports.Actualites = Actualites;
//# sourceMappingURL=Actualites.js.map