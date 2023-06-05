import { Actualites } from "./Actualites.js";
import { Residence } from "./Residence.js";
import ResourceManager from "./ResourceManager.js";
import { Restaurant } from "./Restaurant.js";

export interface Crous {
	nom: string;
	id: string;
	restaurants: ResourceManager<Restaurant>;
	actualites: ResourceManager<Actualites>;
	residences: ResourceManager<Residence>;
}

enum CrousNames {
	AIX_MARSEILLE = "aix.marseille",
	AMIENS = "amiens",
	ANTILLES_GUYANE = "antilles.guyane",
	BOURGOGNE_FRANCHE_COMTE = "bfc",
	BORDEAUX = "bordeaux",
	CLERMONT_FERRAND = "clermont.ferrand",
	CORTE = "corte",
	CRETEIL = "creteil",
	GRENOBLE = "grenoble",
	LILLE = "lille",
	LIMOGES = "limoges",
	LYON = "lyon",
	MONTPELLIER = "montpellier",
	NANCY_METZ = "nancy.metz",
	NANTES = "nantes",
	NICE = "nice",
	NORMANDIE = "normandie",
	ORLEANS_TOURS = "orleans.tours",
	PARIS = "paris",
	POITIERS = "poitiers",
	REIMS = "reims",
	RENNES = "rennes",
	REUNION = "reunion",
	STRASBOURG = "strasbourg",
	TOULOUSE = "toulouse",
	VERSAILLES = "versailles",
}

type CrousName = (typeof CrousNames)[keyof typeof CrousNames];

export function isCrousName(value: string): value is CrousName {
	return Object.values(CrousNames).includes(value as CrousName);
}
