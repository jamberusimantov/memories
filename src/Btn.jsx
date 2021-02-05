import './Btn.css';
import React from 'react';

function Btn(props){
const {className,clickFunction,value}=props;
return(
    <>
     <button className={`Btn ${className}`} onClick={clickFunction}>{value}</button>
    </>
);    
}
Btn.defaultProps={
    clickFunction:()=>{},
    value:'Click',
    className:'',
}
export default Btn;