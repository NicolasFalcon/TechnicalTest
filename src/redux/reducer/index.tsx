import {combineReducers} from 'redux';
import {SubmitReducer} from './submitReducer';

const rootReducer = combineReducers({
  /**
   * Here taken the reducers from the reducers folder
   */

  submit: SubmitReducer,
});

/**
 * Global state for redux store
 */
export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
