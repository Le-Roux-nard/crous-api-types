import { CrousData } from "./CrousData.js";
export default abstract class ResourceManager<T extends CrousData> {
    get(id: string | number): Promise<T | undefined>;
    /**
     *  Search every item in the list for a partial match of the id.
     * @param id
     * @returns A list of items that match the id. If an exact match is found it will be the first item of the list.
     */
    searchById(id: string | number): Promise<T[]>;
    abstract searchByName(name: string): Promise<T[]>;
    abstract add(item: any): void;
    addSome(items: any[]): void;
    remove(id: string | number): void;
    removeAll(): void;
    list: T[];
    toJSON(): any[];
}
//# sourceMappingURL=ResourceManager.d.ts.map