import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const customLoader = {
    LoaderSmall: (props: any) => <Loader 
    type='Puff' 
    color={props.color ||"#00BFFF"} 
    height='100' 
    width='100' 
    timeout={props.timeout || 15000} />,

    LoaderMedium: (props: any) => <Loader 
    type='Puff' 
    color="#00BFFF" 
    height='200' 
    width='200' 
    timeout={props.timeout || 15000} />,

    LoaderLarge: (props: any) => <Loader 
    type='Puff' 
    color="#00BFFF" 
    height='300' 
    width='300' 
    timeout={props.timeout || 15000} />,
}
export default customLoader