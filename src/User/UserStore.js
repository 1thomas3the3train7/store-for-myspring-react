import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        console.log("sett")
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    getisAuth(){
        return this._isAuth
    }
    getuser(){
        return this._user
    }
}