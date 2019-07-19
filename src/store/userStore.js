import { observable, computed, action, decorate } from "mobx";
// import { persist } from "mobx-persist";
class User {
  users = [];

  addUser = user => {
    this.users.push(user);
  };

  // get userCount() {
  //   return this.users.length;
  // }
}
decorate(User, {
  users: observable,
  // userCount: computed,
  addUser: action
});
export default User;