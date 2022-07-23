export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      headers: this.headers,
    }).then(this._getResponseData);
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this.headers,
    }).then(this._getResponseData);
  }

  editProfile(data) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.title,
        about: data.job,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(item) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: item.place,
        link: item.link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._getResponseData);
  }

  toggleLike(cardId, isLiked) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes", {
      method: isLiked ? "DELETE" : "PUT",
      headers: this.headers,
    }).then(this._getResponseData);
  }

  changeAvatar(item) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: item.avatar,
      }),
    }).then(this._getResponseData);
  }

  // другие методы работы с API
}
