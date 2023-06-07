var CrousNames;
(function (CrousNames) {
    CrousNames["AIX_MARSEILLE"] = "aix.marseille";
    CrousNames["AMIENS"] = "amiens";
    CrousNames["ANTILLES_GUYANE"] = "antilles.guyane";
    CrousNames["BOURGOGNE_FRANCHE_COMTE"] = "bfc";
    CrousNames["BORDEAUX"] = "bordeaux";
    CrousNames["CLERMONT_FERRAND"] = "clermont.ferrand";
    CrousNames["CORTE"] = "corte";
    CrousNames["CRETEIL"] = "creteil";
    CrousNames["GRENOBLE"] = "grenoble";
    CrousNames["LILLE"] = "lille";
    CrousNames["LIMOGES"] = "limoges";
    CrousNames["LYON"] = "lyon";
    CrousNames["MONTPELLIER"] = "montpellier";
    CrousNames["NANCY_METZ"] = "nancy.metz";
    CrousNames["NANTES"] = "nantes";
    CrousNames["NICE"] = "nice";
    CrousNames["NORMANDIE"] = "normandie";
    CrousNames["ORLEANS_TOURS"] = "orleans.tours";
    CrousNames["PARIS"] = "paris";
    CrousNames["POITIERS"] = "poitiers";
    CrousNames["REIMS"] = "reims";
    CrousNames["RENNES"] = "rennes";
    CrousNames["REUNION"] = "reunion";
    CrousNames["STRASBOURG"] = "strasbourg";
    CrousNames["TOULOUSE"] = "toulouse";
    CrousNames["VERSAILLES"] = "versailles";
})(CrousNames || (CrousNames = {}));
export function isCrousName(value) {
    return Object.values(CrousNames).includes(value);
}
//# sourceMappingURL=Crous.js.map