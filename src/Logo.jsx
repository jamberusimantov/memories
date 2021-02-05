import './Logo.css';
import React from 'react';

function Logo(props){
const {logoSize, logoClass}=props;
const logoImgSrc="./ganja.webp";
let style= typeof(logoSize)=="number"? { height:`${logoSize}px`,}:{height:Logo.defaultProps.logoSize,};

return(
        <img src={logoImgSrc} className={`logo ${logoClass}`} style={style} alt="logo" />
);   
}
Logo.defaultProps={
    logoSize: '40vmin',
    logoClass:'',
} 
export default Logo;