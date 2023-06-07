import { __decorate, __metadata } from "tslib";
import { CrousData } from "./CrousData.js";
import { keepToJson } from "./Utils.js";
export class Menu extends CrousData {
    date;
    horaire;
    plats;
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
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Menu.prototype, "date", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Menu.prototype, "horaire", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Map)
], Menu.prototype, "plats", void 0);
//# sourceMappingURL=Menu.js.map