import { CrousData } from "./CrousData.js";
import { Position } from "./Position.js";
import { keepToJson } from "./Utils.js";

export class Residence extends CrousData {
	@keepToJson
	name!: string;
	@keepToJson
	short_desc?: string;
	@keepToJson
	position!: Position;
	@keepToJson
	infos!: string;
	@keepToJson
	services!: string[];
	@keepToJson
	contact?: string;
	@keepToJson
	mail?: string;
	@keepToJson
	phone?: string;
	@keepToJson
	websiteUrl?: string;
	@keepToJson
	appointmentUrl?: string;
	@keepToJson
	virtualVisitUrl?: string;
	@keepToJson
	bookingUrl?: string;
	@keepToJson
	troubleshootingUrl?: string;

	declare id:string;
}
