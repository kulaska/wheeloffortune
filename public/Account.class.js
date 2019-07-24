class Account {
    constructor() {
        this.points = getFromStorage('points');
    }

    getPoints() {
        return this.points;
    }

    setPoints() {

    }    
}

let acc = new Account();

export default acc;