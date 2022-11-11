"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opening = void 0;
class Opening {
    constructor(txt) {
        Object.defineProperty(this, "matin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "midi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "soir", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (txt.length != 3) {
            throw new Error("Format n'est pas correct");
        }
        txt.charAt(0) == "0" ? (this.matin = false) : (this.matin = true);
        txt.charAt(1) == "0" ? (this.midi = false) : (this.midi = true);
        txt.charAt(2) == "0" ? (this.soir = false) : (this.soir = true);
    }
}
exports.Opening = Opening;
//# sourceMappingURL=Opening.js.map