declare const CROUS_NAMES: readonly ["aix.marseille", "amiens", "antilles.guyane", "bfc", "bordeaux", "clermont.ferrand", "corte", "creteil", "grenoble", "lille", "limoges", "lyon", "montpellier", "nancy.metz", "nantes", "nice", "normandie", "orleans.tours", "paris", "poitiers", "reims", "rennes", "reunion", "strasbourg", "toulouse", "versailles"];
declare type CROUS_NAMES_TYPE = typeof CROUS_NAMES;
export declare type CROUS_NAME = CROUS_NAMES_TYPE[number];
export declare function isValidCrousName(maybeCrousName: unknown): maybeCrousName is CROUS_NAME;
export {};
//# sourceMappingURL=CrousShortName.d.ts.map