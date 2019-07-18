import { observable, action, computed } from "mobx";
import RestClient from "../helpers/RestClient";
class User {
  @observable user = {};

  @action registerUser = user => {
    RestClient.restCall("user​/registerUser", user).then(response => {
      this.user = response;
    }).catch(e => {
      alert(e)
    })
  };

  // @computed get userCount() {
  //   return this.user.length;
  // }
}

export default User;