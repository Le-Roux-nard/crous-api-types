"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(lat = 0, lon = 0, zone = "", localisation = "") {
        Object.defineProperty(this, "lat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "zone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localisation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lat = lat;
        this.lon = lon;
        this.zone = zone;
        this.localisation = localisation;
    }
}
exports.Position = Position;
//# sourceMappingURL=Position.js.map