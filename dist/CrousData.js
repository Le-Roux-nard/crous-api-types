import { __decorate, __metadata } from "tslib";
import "reflect-metadata";
import { pick, keepToJson } from "./Utils.js";
export class CrousData {
    id;
    toJSON() {
        const keys = Reflect.getMetadata("crous:json-keys", this);
        return pick(this, ...keys);
    }
    keys() {
        return Reflect.getMetadata("crous:json-keys", this);
    }
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    keepToJson,
    __metadata("design:type", String)
], CrousData.prototype, "id", void 0);
//# sourceMappingURL=CrousData.js.map