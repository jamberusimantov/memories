import * as actionTypes from '../actions/theme.actions';

const { SET_PRIMARY_COLOR, SET_SECONDARY_COLOR, SET_EMPHASIZE_COLOR,
    SET_POLYGON_HEIGHT, SET_POLYGON_WIDTH, SET_POLYGON_OPACITY} = actionTypes;

const reducer = (theme = {}, action: any) => {
    switch (action.type) {
        case SET_PRIMARY_COLOR: return { ...theme, primaryColor: action.payload };
        case SET_SECONDARY_COLOR: return { ...theme, secondaryColor: action.payload };
        case SET_EMPHASIZE_COLOR: return { ...theme, emphasizeColor: action.payload };
        case SET_POLYGON_HEIGHT: return { ...theme, polygonHeight: action.payload };
        case SET_POLYGON_WIDTH: return { ...theme, polygonWidth: action.payload };
        case SET_POLYGON_OPACITY: return { ...theme, polygonOpacity: action.payload };

        default: return theme;
    }
}
export default reducer;