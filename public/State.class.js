import storage from "./Storage.class.js";

class State {
  constructor() {
    this.data = storage.getFromStorage(["rotation", "winner"]);
  }

  setData(newData) {
    this.data = Object.assign(this.data, newData);
    console.log(this.data);
    storage.sendToStorage(new Map(Object.entries(this.data)));
  }

  getWinner() {
    return this.data.winner;
  }

  getRotation() {
    return this.data.rotation;
  }
}

export default new State();
