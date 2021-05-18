import { ActionType } from '../actions/actionTypes';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data:[]
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_ESTABLISHMENTS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_ESTABLISHMENTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_ESTABLISHMENTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;