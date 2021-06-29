import { IPost } from '../../components/Post/utils'

export const SET_MAIN_FORM_DATA = 'SET_MAIN_FORM_DATA';
export const SET_MAIN_FORM_METHOD = 'SET_MAIN_FORM_METHOD';

export const setMainFormData = (formData: IPost) => (dispatch: any) => dispatch({ type: SET_MAIN_FORM_DATA, payload: formData });
export const setMainFormMethod = (method:number) => (dispatch: any) => dispatch({ type: SET_MAIN_FORM_METHOD, payload: method });
