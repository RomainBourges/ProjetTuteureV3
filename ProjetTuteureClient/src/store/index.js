import { createStore } from "redux";

import reducer from "../reducers"

const initialState = {
    lists: "",
    tasks: "",
    steps: ""
  }

const store = createStore(reducer, initialState); 

export default store;