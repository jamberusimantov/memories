import './MenuBtn.css';
import React from 'react';

function MenuBtn(props){
const {isBarOpen,crossBarsHandler}=props;
return(
<span className={'hamburger closeBtn'} onClick={crossBarsHandler}>
    <span className={`burger bar1  ${isBarOpen? "bar1Open": ""}`}></span>
    <span className={`burger bar2  ${isBarOpen? "bar2Open": ""}`}></span>
    <span className={`burger bar3  ${isBarOpen? "bar3Open": ""}`}></span>
</span>
);   
}
MenuBtn.defaultProps={
    crossBarsHandler:()=>{},
    isBarOpen:false
} 
export default MenuBtn;