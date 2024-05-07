export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessag');
    }
    this._sqft = sqft
  }

  get sqft() {
    return this._sqft;
  }
}
