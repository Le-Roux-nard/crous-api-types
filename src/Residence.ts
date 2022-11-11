import { CrousData } from "./DonneesCrous.js";
import { Position } from "./Position.js";
import { keys } from "ts-transformer-keys";

export class Residence extends CrousData {
	name!: string;
	short_desc?: string;
	position!: Position;
	infos!: string;
	services!: string[];
	contact?: string;
	mail?: string;
	phone?: string;
	websiteUrl?: string;
	appointmentUrl?: string;
	virtualVisitUrl?: string;
	bookingUrl?: string;
	troubleshootingUrl?: string;

	keys() {
		return keys<typeof this>().filter((k) => typeof this[k as keyof typeof this] !== "function");
	}
}
