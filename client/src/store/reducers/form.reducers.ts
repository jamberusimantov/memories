import { mockPost } from '../../components/Post/utils'
import * as actionTypes from '../actions/form.actions';

const { SET_MAIN_FORM_DATA, SET_MAIN_FORM_METHOD } = actionTypes;

const reducer = (form = { formData: mockPost, method: 1 }, action: any) => {
    switch (action.type) {
        case SET_MAIN_FORM_DATA: return { ...form, formData: action.payload };
        case SET_MAIN_FORM_METHOD: return { ...form, method: action.payload };

        default: return form;
    }
}
export default reducer;