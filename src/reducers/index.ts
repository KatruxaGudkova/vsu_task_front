import { combineReducers } from '@reduxjs/toolkit';
import { default as analyzeTextSlice } from '../slices/analyzeTextSlice';

const rootReducer = combineReducers({
  analyzeText: analyzeTextSlice,
  // user: userSlice,
});

export { rootReducer };
