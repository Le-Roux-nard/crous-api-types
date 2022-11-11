import { CrousData } from "./DonneesCrous.js";
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
    getTodayMenu(): Menu | undefined;
    keys(): (keyof this)[];
    toJSON(): any;
}
//# sourceMappingURL=Restaurant.d.ts.map