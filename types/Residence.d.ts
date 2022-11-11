import { CrousData } from "./DonneesCrous.js";
import { Position } from "./Position.js";
export declare class Residence extends CrousData {
    name: string;
    short_desc?: string;
    position: Position;
    infos: string;
    services: string[];
    contact?: string;
    mail?: string;
    phone?: string;
    websiteUrl?: string;
    appointmentUrl?: string;
    virtualVisitUrl?: string;
    bookingUrl?: string;
    troubleshootingUrl?: string;
    keys(): (keyof this)[];
}
//# sourceMappingURL=Residence.d.ts.map