export default class ResourceManager {
    get(id) {
        return new Promise((resolve, reject) => {
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
    searchById(id) {
        return new Promise((resolve) => {
            let possibleItems = this.list.filter((item) => item.id == id || item.id?.includes(id.toString()));
            let exactItemIdx = possibleItems.findIndex((item) => item.id == id);
            if (exactItemIdx != -1) {
                let exactItem = possibleItems.splice(exactItemIdx, 1)[0];
                exactItem && possibleItems.unshift(exactItem);
            }
            resolve(possibleItems);
        });
    }
    addSome(items) {
        for (const item of items) {
            this.add(item);
        }
    }
    remove(id) {
        let idx = this.list.findIndex((item) => item.id == id);
        if (idx != -1) {
            this.list.splice(idx, 1);
        }
    }
    removeAll() {
        this.list = new Array();
    }
    list = new Array();
    toJSON() {
        return this.list.map((item) => item.toJSON());
    }
}
//# sourceMappingURL=ResourceManager.js.map