export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	return keys.reduce((o, k) => ((o[k] = obj[k]), o), {} as Pick<T, K>);
}

export function keepToJson(target: any, propertyKey: string) {
	let keys: string[] = Reflect.getMetadata("crous:json-keys", target);

	if (keys) {
		keys.push(propertyKey);
	} else {
		keys = [propertyKey];
		Reflect.defineMetadata("crous:json-keys", keys, target);
	}
}