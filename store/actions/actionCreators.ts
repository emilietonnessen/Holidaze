import axios from 'axios';
import { ActionType } from './actionTypes';
import { Action } from './index';
import { Dispatch } from 'redux';
 
export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.SEARCH_ESTABLISHMENTS,
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            );

            const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                    type: ActionType.SEARCH_ESTABLISHMENTS_SUCCESS,
                    payload: names,
            });
        } catch (err) {
            dispatch({
                    type: ActionType.SEARCH_ESTABLISHMENTS_ERROR,
                    payload: err.message,
            });
        }
    };
};
