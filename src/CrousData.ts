import "reflect-metadata";
import { pick, keepToJson } from "./Utils.js";

export abstract class CrousData {
	@keepToJson
	id?: string;

	toJSON(): any {
		const keys: (keyof this)[] = Reflect.getMetadata("crous:json-keys", this);
		return pick(this, ...keys);
	}

	keys(): string[] {
		return Reflect.getMetadata("crous:json-keys", this);
	}

	constructor(id: string) {
		this.id = id;
	}
}
