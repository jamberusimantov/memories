import * as api from '../../api';

export const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
export const SET_SECONDARY_COLOR = 'SET_SECONDARY_COLOR';
export const SET_EMPHASIZE_COLOR = 'SET_EMPHASIZE_COLOR';
export const SET_POLYGON_WIDTH = 'SET_POLYGON_WIDTH';
export const SET_POLYGON_HEIGHT = 'SET_POLYGON_HEIGHT';
export const SET_POLYGON_OPACITY = 'SET_POLYGON_OPACITY';
export const SET_USER_THEME = 'SET_USER_THEME';
export const SET_FONT_COLOR = 'SET_FONT_COLOR';


export const setPrimaryColor = (color: string) => (dispatch: any) =>
    dispatch({ type: SET_PRIMARY_COLOR, payload: color });
export const setSecondaryColor = (color: string) => (dispatch: any) =>
    dispatch({ type: SET_SECONDARY_COLOR, payload: color });
export const setEmphasizeColor = (color: string) => (dispatch: any) =>
    dispatch({ type: SET_EMPHASIZE_COLOR, payload: color });

export const setPolygonWidth = (width: number) => (dispatch: any) =>
    dispatch({ type: SET_POLYGON_WIDTH, payload: width });
export const setPolygonHeight = (height: number) => (dispatch: any) =>
    dispatch({ type: SET_POLYGON_HEIGHT, payload: height });
export const setPolygonOpacity = (opacity: number) => (dispatch: any) =>
    dispatch({ type: SET_POLYGON_OPACITY, payload: opacity });
export const setFontColor = (color: string) => (dispatch: any) =>
    dispatch({ type: SET_FONT_COLOR, payload: color });


export const setUserTheme = (theme: any, message?: (data: string) => void) => async (dispatch: any) => {

    try {
        const res = await api.users.updateUserTheme({theme})
        if (res.success) {
            const msg = 'success set a theme'
            message ? message(msg) : console.log(msg);
            return dispatch({ type: SET_USER_THEME, payload: res.data.theme });
        }
        console.log(res);
    } catch (error) {
        console.error(error.message)
    } finally { }
}


