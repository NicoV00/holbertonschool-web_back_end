export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  getLocation() {
    return this._location;
  }

  getSize() {
    return this._size;
  }
}
