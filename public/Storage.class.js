export class Storage {
    constructor() {
        this.storage = window.localStorage;
    }

    getFromStorage(queries) {
        const response = {};
        queries.forEach(item => {
            response[item] = this.storage.getItem(item);
        });

        return Object.entries(response).length === 0 ? {rotation: 36, winner: "none"} : response;       
    }

    // map with tuples name: value 
    sendToStorage(map) {
        map.forEach((value, key) => {
            this.storage.setItem(key, value);
        });
    }
}

export default new Storage();