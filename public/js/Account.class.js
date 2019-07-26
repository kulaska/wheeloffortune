import storage from './Storage.class.js';

class Account {
    constructor() {        
        this.points = storage.getFromStorage(['points'])['points'] || 50000;
    }

    getPoints() {        
        return this.points;
    }

    setPoints(newPoints) {
        this.points = newPoints;
        storage.sendToStorage(new Map([['points', this.points]]));
    }    
}

let acc = new Account();

export default acc;