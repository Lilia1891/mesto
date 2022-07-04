export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  addItem(item) {
    const cardElement = this._renderer(item.name, item.link);
    this._container.prepend(cardElement);
  }

  renderAll() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  }
}
