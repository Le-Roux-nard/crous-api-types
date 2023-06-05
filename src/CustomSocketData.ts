import { CustomHolidays } from "./CustomHolidays.js";
import { HolidayZone } from "./HolidayZones.js";

export interface CustomSocketData {
	followingRestaurants?: Array<string>;
	vacancesCustom?: CustomHolidays;
	vacancesZones?: HolidayZone;
}
