import initialState from "../initialState";
import { combineReducers } from "redux";

const themeReducer = (state: any = initialState.theme, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: themeReducer,
});

export default allReducers;
