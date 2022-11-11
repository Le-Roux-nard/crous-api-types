"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crous = void 0;
class Crous {
    constructor() {
        Object.defineProperty(this, "nom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "restaurants", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "actualites", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "residences", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    getRestaurant(id) {
        return this.restaurants.find((r) => r.id === id);
    }
    getResidence(id) {
        return this.residences.find((r) => r.id === id);
    }
    getActualite(id) {
        return this.actualites.find((r) => r.id === id);
    }
}
exports.Crous = Crous;
//# sourceMappingURL=Crous.js.map