const storage = window.localStorage;

class State {
    constructor() {    
      this.data = {};
      this.getFromStorage();
    }
    
    setData(newData) {
      this.data = Object.assign(this.data, newData);
      this.saveToStorage();
    }
    
    saveToStorage() {
      storage.setItem('casinoData', this.data);
    }
  
    getFromStorage() {
      let data = storage.getItem('casinoData') || {rotation: 36, winner: "none"};
      this.setData(data);
    }
  }

  export default new State();

