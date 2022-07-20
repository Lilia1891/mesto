export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.prepend(cardElement);
  }

  setItems(items) {
    this._items = items;
  }

  renderAll() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  }
}
