import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    pets: [
      { id: 0, text: "Cat", completed: true },
      { id: 1, text: "Dog", completed: true },
      { id: 2, text: "Mouse", completed: false },
      { id: 3, text: "Cat Two", completed: false },
      { id: 4, text: "Dog Two", completed: false },
    ],
    filters: {
        sell: "sell",
        lostFound: "lost/found",
        inGoodHands: "inGoodHands",
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    return state;
  };

  const enhancer = devToolsEnhancer();
  export const store = createStore(rootReducer, enhancer);