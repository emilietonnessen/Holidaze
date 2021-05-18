import { ActionType } from './actionTypes';

interface SearchEstablishmentsAction {
  type: ActionType.SEARCH_ESTABLISHMENTS;
}

interface SearchEstablishmentsSuccessAction {
  type: ActionType.SEARCH_ESTABLISHMENTS_SUCCESS;
  payload: string[];
}

interface SearchEstablishmentsErrorAction {
  type: ActionType.SEARCH_ESTABLISHMENTS_ERROR;
  payload: string;
} 

export type Action =
    | SearchEstablishmentsAction
    | SearchEstablishmentsSuccessAction
    | SearchEstablishmentsErrorAction;