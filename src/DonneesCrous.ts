import pick from "./Utils.js";

export abstract class CrousData {
	id: string;
	toJSON(): any {
		return pick(this, ...this.keys());
	}
	constructor(id: string) {
		this.id = id;
	}
	abstract keys(): Array<keyof this>;
}
