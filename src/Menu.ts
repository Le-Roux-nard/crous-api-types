import { CrousData } from "./CrousData.js";
import { keepToJson } from "./Utils.js";

export class Menu extends CrousData {
	@keepToJson
	date!: string;
	@keepToJson
	horaire!: string;
	@keepToJson
	plats!: Map<String, string[]>;
	
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
