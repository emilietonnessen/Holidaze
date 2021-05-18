import { combineReducers } from 'redux';
import establishmentReducers from './establishmentReducers';

const reducers = combineReducers({
    establishments: establishmentReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;