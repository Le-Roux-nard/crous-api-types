import { Actualites } from "./Actualites.js";
import { Residence } from "./Residence.js";
import { Restaurant } from "./Restaurant.js";
export declare class Crous {
    nom: string;
    id: string;
    restaurants: Restaurant[];
    actualites: Actualites[];
    residences: Residence[];
    getRestaurant(id: string): Restaurant | undefined;
    getResidence(id: string): Residence | undefined;
    getActualite(id: string): Actualites | undefined;
}
//# sourceMappingURL=Crous.d.ts.map