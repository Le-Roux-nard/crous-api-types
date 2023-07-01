import { CrousData } from "./CrousData.js";
import { Menu } from "./Menu.js";
import { Opening } from "./Opening.js";
import { Position } from "./Position.js";
import { Contact } from "./Contact.js";
import { keepToJson } from "./Utils.js";

export class Restaurant extends CrousData {
	@keepToJson
	nom!: String;
	@keepToJson
	short_desc!: String;
	@keepToJson
	opening!: Opening[];
	@keepToJson
	position!: Position;
	@keepToJson
	type!: String;
	@keepToJson
	contact?: Contact;
	@keepToJson
	horaires?: String;
	@keepToJson
	moyen_acces?: String;
	@keepToJson
	paiements?: String[];
	@keepToJson
	menus?: Menu[];

	declare id: string;

	getTodayMenu(): Menu | undefined {
		return this.menus?.find((menu) => menu.isToday());
	}

	override toJSON() {
		const jsonifiedThis = super.toJSON();
		jsonifiedThis.menus = this.menus?.map((menu) => menu.toJSON()) ?? [];
		return jsonifiedThis;
	}
}
