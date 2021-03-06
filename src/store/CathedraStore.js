import { makeAutoObservable } from "mobx";

export default class CathedraStore {
    constructor() {
        this._cathedras = [];
        this._types = [];
        this._faculties = [];
        this._open = false;
        makeAutoObservable(this);
    }

    setCathedras(cathedras) {
        this._cathedras = cathedras;
    }

    get cathedras() {
        return this._cathedras;
    }

    setTypes(types) {
        this._types = types;
    }

    get types() {
        return this._types;
    }

    setFaculties(faculties) {
        this._faculties = faculties;
    }

    get faculties() {
        return this._faculties;
    }
    setOpen(bool) {
        this._open = bool;
    }

    get open() {
        return this._open;
    }
    
    
}