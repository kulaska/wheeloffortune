export class Storage {
    constructor() {
        this.storage = window.localStorage;
    }

    getFromStorage(queries) {
        const response = {};
        console.log(queries)
        queries.forEach(item => {
            response[item] = this.storage.getItem(item);
        });

        return Object.entries(response).length === 0 ? null : response;       
    }

    // map with tuples name: value 
    sendToStorage(map) {
        map.forEach((value, key) => {
            this.storage.setItem(key, value);
        });
    }
}

export default new Storage();