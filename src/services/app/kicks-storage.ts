import { EnumKicksStorage } from "../../models/enuns/app/enum-kicks-storage"

export const usekicksStorage = () => {

    const getStorage = (key: EnumKicksStorage) => {
        return JSON.parse(localStorage.getItem(EnumKicksStorage[key].toString()) || '{}');
    } 

    const setStorage = (key: EnumKicksStorage, object: any) => {
        return localStorage.setItem(EnumKicksStorage[key].toString(), JSON.stringify(object))
    }

    const removeStorage = (key: EnumKicksStorage) => {
        return localStorage.removeItem(EnumKicksStorage[key].toString())
    }

    return {
        getStorage,
        setStorage,
        removeStorage,
    }
}