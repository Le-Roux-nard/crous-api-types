enum HolidaysZones {
	"Zone A",
  "Zone B",
  "Zone C",
  "Polynésie",
}

export type HolidayZone = keyof typeof HolidaysZones;