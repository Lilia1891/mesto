export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._avatarSelector = avatarSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._jobElement = document.querySelector(this._jobSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
    this._profile = { title: "", job: "", avatar: "", id: "" };
  }
  _renderProfile() {
    this._nameElement.textContent = this._profile.title;
    this._jobElement.textContent = this._profile.job;
    this._avatarElement.src = this._profile.avatar;
  }

  setUserInfo(data) {
    this._profile.title = data.title || "";
    this._profile.job = data.job || "";
    this._profile.avatar = data.avatar || "";
    this._profile._id = data._id || "";
    this._renderProfile();
  }

  getUserInfo = () => {
    return this._profile;
  };

  getUserAvatar() {
    return this._profile.avatar;
  }

  getUserId() {
    return this._profile._id;
  }
}
