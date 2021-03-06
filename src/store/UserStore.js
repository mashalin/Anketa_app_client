import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._isUserAuth = false;
        this._user = {};
        this._users = [];
        this._admins = [];
        this._dateUsers = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setIsUserAuth(bool) {
        this._isUserAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get isUserAuth() {
        return this._isUserAuth;
    }

    get user() {
        return this._user;
    }

    get users() {
        return this._users;
    }

    setUsers(users) {
        this._users = users;
    }

    get admins() {
        return this._admins;
    }

    setAdmins(admins) {
        this._admins = admins;
    }

    get dateUsers() {
        return this._dateUsers;
    }

    setDateUsers(user) {
        this._dateUsers = user;
    }

}