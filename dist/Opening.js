export class Opening {
    matin;
    midi;
    soir;
    constructor(txt) {
        if (txt.length != 3) {
            throw new Error("Format n'est pas correct");
        }
        txt.charAt(0) == "0" ? (this.matin = false) : (this.matin = true);
        txt.charAt(1) == "0" ? (this.midi = false) : (this.midi = true);
        txt.charAt(2) == "0" ? (this.soir = false) : (this.soir = true);
    }
}
//# sourceMappingURL=Opening.js.map