import React, {createContext} from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable, observable, makeObservable } from "mobx"
import axios from "axios";
import { observer } from "mobx-react-lite";


    export class AppStore {
    Api_data = null;
    constructor () {
        makeAutoObservable(this)
    }

             fetchData = async () => {
            const api_url = "https://www.cbr-xml-daily.ru/daily_json.js";
            const response = await axios.get(api_url);
            this.Api_data = response.data; 
    }
          
 }
 export const store = new AppStore();
 export const StoreContext = createContext(store);