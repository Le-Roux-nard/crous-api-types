import { CrousData } from "./CrousData.js";

export default abstract class ResourceManager<T extends CrousData> {
	get(id: string | number): Promise<T | undefined> {
		return new Promise<T | undefined>((resolve, reject) => {
			for (const item of this.list) {
				if (item.id == id) {
					resolve(item);
					return;
				}
			}
			reject(`Resource not found for id '${id}'`);
		});
	}

	/**
	 *  Search every item in the list for a partial match of the id.
	 * @param id
	 * @returns A list of items that match the id. If an exact match is found it will be the first item of the list.
	 */
	searchById(id: string | number): Promise<T[]> {
		return new Promise<T[]>((resolve) => {
			let possibleItems = this.list.filter((item) => item.id == id || item.id?.includes(id.toString()));
			let exactItemIdx = possibleItems.findIndex((item) => item.id == id);
			if (exactItemIdx != -1) {
				let exactItem = possibleItems.splice(exactItemIdx, 1)[0];
				exactItem && possibleItems.unshift(exactItem);
			}
			resolve(possibleItems);
		});
	}
	abstract searchByName(name: string): Promise<T[]>;
	
	abstract add(item: any): void;

	addSome(items: any[]): void {
		for (const item of items) {
			this.add(item);
		}
	}
	
	remove(id: string | number): void {
		let idx = this.list.findIndex((item) => item.id == id);
		if (idx != -1) {
			this.list.splice(idx, 1);
		}
	}

	removeAll(): void {
		this.list = new Array<T>();
	}

	list: T[] = new Array<T>();

	toJSON(): any[] {
		return this.list.map((item) => item.toJSON());
	}
}
