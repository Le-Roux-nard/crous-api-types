import { CrousData } from "./CrousData.js";
import { Menu } from "./Menu.js";
import { Opening } from "./Opening.js";
import { Position } from "./Position.js";
import { Contact } from "./Contact.js";
export declare class Restaurant extends CrousData {
    nom: String;
    short_desc: String;
    opening: Opening[];
    position: Position;
    type: String;
    contact?: Contact;
    horaires?: String;
    moyen_acces?: String;
    paiements?: String[];
    menus?: Menu[];
    id: string;
    getTodayMenu(): Menu | undefined;
    toJSON(): any;
}
//# sourceMappingURL=Restaurant.d.ts.map