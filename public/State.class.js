const storage = window.localStorage;

class State {
    constructor() {    
      this.data =  this.getFromStorage();     
    }
    
    setData(newData) {
      this.data = Object.assign(this.data, newData);
      this.saveToStorage();
    }
    
    saveToStorage() {
      storage.setItem('casinoDataWinner', this.data.winner);
      storage.setItem('casinoDataRotation', this.data.rotation);

      console.log(this.data);
    }
  
    getFromStorage() {
      let data = { winner: storage.getItem('casinoDataWinner'), rotation: storage.getItem('casinoDataRotation') } || {rotation: 36, winner: "none"};
      return data;
    }

    getWinner() {
      return this.data.winner;
    }

    getRotation() {
      return this.data.rotation;
    }
  }

  export default new State();

