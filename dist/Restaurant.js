import { __decorate, __metadata } from "tslib";
import { CrousData } from "./CrousData.js";
import { Position } from "./Position.js";
import { keepToJson } from "./Utils.js";
export class Restaurant extends CrousData {
    nom;
    short_desc;
    opening;
    position;
    type;
    contact;
    horaires;
    moyen_acces;
    paiements;
    menus;
    getTodayMenu() {
        return this.menus?.find((menu) => menu.isToday());
    }
    toJSON() {
        const jsonifiedThis = super.toJSON();
        jsonifiedThis.menus = this.menus?.map((menu) => menu.toJSON()) ?? [];
        return jsonifiedThis;
    }
}
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Restaurant.prototype, "nom", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Restaurant.prototype, "short_desc", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Array)
], Restaurant.prototype, "opening", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Position)
], Restaurant.prototype, "position", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Restaurant.prototype, "type", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Object)
], Restaurant.prototype, "contact", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Restaurant.prototype, "horaires", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Restaurant.prototype, "moyen_acces", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Array)
], Restaurant.prototype, "paiements", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Array)
], Restaurant.prototype, "menus", void 0);
//# sourceMappingURL=Restaurant.js.map