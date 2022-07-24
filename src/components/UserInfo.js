export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._avatarSelector = avatarSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._jobElement = document.querySelector(this._jobSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name || "";
    this._jobElement.textContent = data.about || "";
    this._avatarElement.src = data.avatar || "";
    this._profile_id = data._id || "";
  }

  getUserInfo = () => {
    return {
      title: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
      id: this._profile_id,
    };
  };

  getUserAvatar() {
    return this._avatarElement.src;
  }

  getUserId() {
    return this._profile_id;
  }
}
