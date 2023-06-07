export function pick(obj, ...keys) {
    return keys.reduce((o, k) => ((o[k] = obj[k]), o), {});
}
export function keepToJson(target, propertyKey) {
    let keys = Reflect.getMetadata("crous:json-keys", target);
    if (keys) {
        keys.push(propertyKey);
    }
    else {
        keys = [propertyKey];
        Reflect.defineMetadata("crous:json-keys", keys, target);
    }
}
//# sourceMappingURL=Utils.js.map