import { CrousData } from "./DonneesCrous.js";
import { Menu } from "./Menu.js";
import { Opening } from "./Opening.js";
import { Position } from "./Position.js";
import { Contact } from "./Contact.js";
import { keys } from "ts-transformer-keys";

export class Restaurant extends CrousData {
	nom!: String;
	short_desc!: String;
	opening!: Opening[];
	position!: Position;
	type!: String;
	contact?: Contact;
	horaires?: String;
	moyen_acces?: String;
	paiements?: String[];
	menus?: Menu[];

	getTodayMenu(): Menu | undefined {
		return this.menus?.find((menu) => menu.isToday());
	}

	keys() {
		return keys<typeof this>().filter((k) => typeof this[k as keyof typeof this] !== "function");
	}

	override toJSON() {
		const jsonifiedThis = super.toJSON();
		jsonifiedThis.menus = this.menus?.map((menu) => menu.toJSON()) ?? [];
		return jsonifiedThis;
	}
}
