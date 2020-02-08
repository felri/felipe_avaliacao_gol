import { combineReducers } from "redux";
import citiesSearch from "./citiesSearch";
import favorite from "./favorite";
import weatherData from "./weatherData";


export default combineReducers({
  citiesSearch,
  favorite,
  weatherData,
});