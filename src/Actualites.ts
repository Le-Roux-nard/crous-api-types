import { CrousData } from "./CrousData.js";
import { keepToJson } from "./Utils.js";

export class Actualites extends CrousData {
	@keepToJson
	titre!: String;
	@keepToJson
	date!: String;
	@keepToJson
	category!: String;
	@keepToJson
	image!: String;
	@keepToJson
	content!: String;
	@keepToJson
	type!: string;

	declare id: string;
}
