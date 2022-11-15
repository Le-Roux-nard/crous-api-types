import { CustomHolidays } from "./CustomHolidays";
import { HolidayZone } from "./HolidayZones";

export interface CustomSocketData {
	followingRestaurants?: Array<string>;
	vacancesCustom?: CustomHolidays;
	vacancesZones?: HolidayZone;
}
