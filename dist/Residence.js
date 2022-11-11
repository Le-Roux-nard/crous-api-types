"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
const DonneesCrous_js_1 = require("./DonneesCrous.js");
class Residence extends DonneesCrous_js_1.CrousData {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
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
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "services", {
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
        Object.defineProperty(this, "mail", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "phone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "websiteUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "appointmentUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "virtualVisitUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bookingUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "troubleshootingUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    keys() {
        return ["name", "short_desc", "position", "infos", "services", "contact", "mail", "phone", "websiteUrl", "appointmentUrl", "virtualVisitUrl", "bookingUrl", "troubleshootingUrl", "keys", "id", "toJSON"].filter((k) => typeof this[k] !== "function");
    }
}
exports.Residence = Residence;
//# sourceMappingURL=Residence.js.map