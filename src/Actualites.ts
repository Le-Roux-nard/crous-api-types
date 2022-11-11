import { CrousData } from "./DonneesCrous.js";
import { keys } from "ts-transformer-keys";

export class Actualites extends CrousData {
	titre!: String;
	date!: String;
	category!: String;
	image!: String;
	content!: String;
	type!: string;

	keys() {
		return keys<typeof this>().filter((k) => typeof this[k as keyof typeof this] !== "function");
	}
}
