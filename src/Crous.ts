import { Actualites } from "./Actualites.js";
import { Residence } from "./Residence.js";
import { Restaurant } from "./Restaurant.js";

export class Crous {
	nom = "";
	id = "";
	restaurants: Restaurant[] = [];
	actualites: Actualites[] = [];
	residences: Residence[] = [];

	getRestaurant(id: string): Restaurant | undefined {
		return this.restaurants.find((r) => r.id === id);
	}

	getResidence(id: string): Residence | undefined {
		return this.residences.find((r) => r.id === id);
	}

	getActualite(id: string): Actualites | undefined {
		return this.actualites.find((r) => r.id === id);
	}
}
