import { CrousData } from "./CrousData.js";
export declare class Menu extends CrousData {
    date: string;
    horaire: string;
    plats: Map<String, string[]>;
    toJSON(): any;
    isToday(): boolean;
}
//# sourceMappingURL=Menu.d.ts.map