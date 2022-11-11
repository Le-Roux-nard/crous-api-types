"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pick(obj, ...keys) {
    return keys.reduce((o, k) => ((o[k] = obj[k]), o), {});
}
exports.default = pick;
//# sourceMappingURL=Utils.js.map