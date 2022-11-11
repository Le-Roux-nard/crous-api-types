import { CrousData } from "./DonneesCrous.js";
export declare class Menu extends CrousData {
    date: string;
    horaire: string;
    plats: Map<String, string[]>;
    keys(): (keyof this)[];
    toJSON(): any;
    isToday(): boolean;
}
//# sourceMappingURL=Menu.d.ts.map