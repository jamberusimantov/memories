import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const customLoader ={
    LoaderSmall: () => <Loader type='Puff' color="#00BFFF" height='100' width='100' />,
    LoaderMedium: () => <Loader type='Puff' color="#00BFFF" height='200' width='200'/>,
    LoaderLarge: () => <Loader type='Puff' color="#00BFFF" height='300' width='300' timeout={30000} />,
}
export default customLoader