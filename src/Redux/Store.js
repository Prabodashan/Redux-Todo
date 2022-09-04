import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todoReducer } from "./Reducers";

export const store = createStore(todoReducer, composeWithDevTools());
