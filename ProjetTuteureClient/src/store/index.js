import { createStore } from "redux";

import reducer from "../reducers"

const initialState = {
    list: "",
    task: ""
  }

const store = createStore(reducer, initialState); 

export default store;