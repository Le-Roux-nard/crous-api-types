"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCrousName = void 0;
const CROUS_NAMES = [
    "aix.marseille",
    "amiens",
    "antilles.guyane",
    "bfc",
    "bordeaux",
    "clermont.ferrand",
    "corte",
    "creteil",
    "grenoble",
    "lille",
    "limoges",
    "lyon",
    "montpellier",
    "nancy.metz",
    "nantes",
    "nice",
    "normandie",
    "orleans.tours",
    "paris",
    "poitiers",
    "reims",
    "rennes",
    "reunion",
    "strasbourg",
    "toulouse",
    "versailles",
];
function isValidCrousName(maybeCrousName) {
    return CROUS_NAMES.includes(maybeCrousName);
}
exports.isValidCrousName = isValidCrousName;
//# sourceMappingURL=CrousShortName.js.map