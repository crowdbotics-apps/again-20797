import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2114729Reducer from '../features/SignIn2114729/redux/reducers'
import SignIn2114715Reducer from '../features/SignIn2114715/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2114729: SignIn2114729Reducer,
SignIn2114715: SignIn2114715Reducer,

});