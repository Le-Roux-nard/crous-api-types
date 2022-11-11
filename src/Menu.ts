import { CrousData } from "./DonneesCrous.js";
import { keys } from "ts-transformer-keys";

export class Menu extends CrousData {
	date!: string;
	horaire!: string;
	plats!: Map<String, string[]>;

	keys(): (keyof this)[] {
		return keys<typeof this>().filter((k) => typeof this[k as keyof typeof this] !== "function" && k !== "id");
	}

	
	override toJSON() {
		const jsonifiedThis = super.toJSON();
		for (const key of Object.keys(jsonifiedThis)) {
			if (jsonifiedThis[key] instanceof Map) {
				jsonifiedThis[key] = Object.fromEntries(jsonifiedThis[key]);
			}
		}
		return jsonifiedThis;
	}

	isToday(): boolean {
		return new Date().toISOString().split("T")[0] === this.date;
	}
}
