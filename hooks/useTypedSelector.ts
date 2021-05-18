import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;