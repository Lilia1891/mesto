export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.prepend(cardElement);
  }

  renderAll(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
}
