import React from 'react';

function Select(props){
 const {options,getSelectValue, className}=props;
 return(
    <>{options?
        <select className={`select ${className}`} onClick={getSelectValue}>
            {options.map((element,index) => <option className="option" key={index} value={element}>{element}</option>)} 
        </select>
        :
        <select className={`select ${className}`} onClick={getSelectValue}>
            <option className="option"></option>
        </select>
    }</>
);    
}
Select.defaultProps={
    options:[''],
    getSelectValue:()=>{},
    className:'',
}
export default Select;