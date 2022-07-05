export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._jobElement = document.querySelector(this._jobSelector);
    this._profile = { name: "", job: "" };
  }
  _renderProfile() {
    this._nameElement.textContent = this._profile.name;
    this._jobElement.textContent = this._profile.job;
  }

  setUserInfo(data) {
    this._profile.name = data.name || "";
    this._profile.job = data.job || "";
    this._renderProfile();
  }

  getUserInfo = () => {
    return this._profile;
  };
}
