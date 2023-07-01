import { __decorate, __metadata } from "tslib";
import { CrousData } from "./CrousData.js";
import { Position } from "./Position.js";
import { keepToJson } from "./Utils.js";
export class Residence extends CrousData {
    name;
    short_desc;
    position;
    infos;
    services;
    contact;
    mail;
    phone;
    websiteUrl;
    appointmentUrl;
    virtualVisitUrl;
    bookingUrl;
    troubleshootingUrl;
}
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "name", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "short_desc", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Position)
], Residence.prototype, "position", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "infos", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", Array)
], Residence.prototype, "services", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "contact", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "mail", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "phone", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "websiteUrl", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "appointmentUrl", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "virtualVisitUrl", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "bookingUrl", void 0);
__decorate([
    keepToJson,
    __metadata("design:type", String)
], Residence.prototype, "troubleshootingUrl", void 0);
//# sourceMappingURL=Residence.js.map