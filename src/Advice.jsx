import './Advice.css';
import React, { useState } from 'react';
import Fetch from './Fetch';
import Lib from './Lib';
import Btn from './Btn';
import Select from './Select';


function Advice(props){
    Fetch.getProducts();
    // const {}=props;
    let firstQueryParam = ['type', 'participants'];
    let activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
    const [selectValue,setSelectValue]=useState('type');
    const [selectVisibility,setSelectVisibility]=useState(false);
    function displaySelect(){
        setSelectVisibility(visible=>!visible);
    }
    function getSelectValue(e){
       setSelectValue(e.target.value);
    } 
       return(
           <div className="adviceContainer" >
               <div className={`adviceSelectContainer ${selectVisibility?'visible':'notVisible'}`}>
                   <Select className="mainAdviceSelect" options={firstQueryParam} getSelectValue={getSelectValue}/>
               {selectValue==='type'?
                   <Select className="secondaryAdviceSelect"options={activityTypes} />
                   :<Select className="secondaryAdviceSelect" options={[1,2,3,4,5]} />}
               </div>
               <div className='adviceBtnContainer'>
                    <Btn clickFunction={searchAdvice} value={"boredom killer"} className={'searchAdvice pressedBtn'}/>
                    <Btn clickFunction={displaySelect} value="" className='toggleBtn'/>
               </div>
           </div>
       );    
   }
   // Advice.defaultProps={}
   export default Advice;
async function searchAdvice(e) {
    let advice=e.target.parentElement.parentElement;
    let loader=Lib.newElement(null,'advice result',null);
    loader.setAttribute('src','./ganja.webp');
    let relevantKeys = ['activity', 'type', 'participants', 'link'];
    let typesOfActivities = new Map([
        ["education", 'school'],
        ["recreational", 'local_activity'],
        ["social", 'local_bar'],
        ["diy", 'developer_mode'],
        ["charity", 'local_hospital'],
        ["cooking", 'restaurant'],
        ["relaxation", 'spa'],
        ["music", 'headset'],
        ["busywork", 'business_center']
    ]);
    try {
        if(e.target.parentElement.nextSibling!=null){
            advice.removeChild(advice.childNodes[advice.childNodes.length-1]);
        }
        advice.appendChild(Lib.newElement(null,'advice result',null));
        advice.appendChild(loader);
        await Fetch.getAdvice(e).then((res) => {
            setAdvice(e, relevantKeys, res, typesOfActivities);
        });

    } catch (err) {
        console.error(err);
    } finally {
        advice.removeChild(advice.childNodes[advice.childNodes.length-1]);
    }
}
function setAdvice(e, relevantKeys, response, activities) {
  
    let container=e.target.parentElement.nextSibling;
    relevantKeys.forEach(key => {
        if (response.hasOwnProperty(key)) {
            switch (key) {
                case relevantKeys[0]:{
                    container.appendChild(Lib.newElement(null,'advice',null));
                    container.lastChild.appendChild(Lib.newElement('span',`advice ${key}`,response[key]));
                    break;
                }
                case relevantKeys[1]:{
                    container.appendChild(Lib.newElement('span','advice tooltipContainer',null));
                    container.lastChild.appendChild(Lib.newElement('span','tooltip icon',response[key]));
                    container.lastChild.appendChild(Lib.newElement('i',`material-icons  advice ${key}`, activities.get(response[key])));
                    break;
                }
                case relevantKeys[2]:{
                    container.appendChild(Lib.newElement('span','advice tooltipContainer',null));
                    container.lastChild.appendChild(Lib.newElement('span','tooltip icon',`${response[key]}`));
                    container.lastChild.appendChild(Lib.newElement('i',`material-icons  advice ${key}`,  response[key] < 2 ? 'person' : 'people'));
                    break;
                }
                case relevantKeys[3]:{
                    if (response[key]) {
                        let link=Lib.newElement('a',`advice ${key}`,null);
                        link.setAttribute('href',response[key]);
                        link.setAttribute('target','_blank');
                        link.appendChild(Lib.newElement('i',`material-icons  advice ${key}`,'public'));
                        container.appendChild(Lib.newElement('span','advice tooltipContainer icon',null));
                        container.lastChild.appendChild(Lib.newElement('span','tooltip',response[key]));
                        container.lastChild.appendChild(link);
                    }
                    break;
                }
                default:{}
            }
        }
    });
}