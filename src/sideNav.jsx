import './SideNav.css';
import {useState} from 'react';
import Logo from './Logo'
import MenuBtn from './MenuBtn'
function SideNav(props){
const {navList,pageHandler}=props;
const [isNavVisible, setIsNavVisible]=useState(false);
const [isBarOpen, setIsBarOpen]=useState(false);
function sideNavDisplayHandler(){
  setIsNavVisible(bool=>!bool);
};
function crossBarsHandler(){
    setIsBarOpen(bool=>!bool);
};
function homeBtnFunction(){
    pageHandler(); 
    setIsNavVisible(false);
    setIsBarOpen(false);
}
function navItemFunction(navItem){
    pageHandler(navItem); 
    sideNavDisplayHandler();
    crossBarsHandler();
}

return(
    <ul className={`sideNav sideNav${isNavVisible?"Open":"Closed"}`}>
        <li className= "navItem menu" onClick={sideNavDisplayHandler}>
            <MenuBtn isBarOpen={isBarOpen} crossBarsHandler={crossBarsHandler}/>
        </li>
        <li className= "navItem homepage" onClick={homeBtnFunction}>
            <i className="material-icons homeBtn">home</i>
        </li>
        {navList.map((li,index) => <li key={index} className={ `navItem ${li}`} onClick={()=>{navItemFunction(li)}}>
            <span className="navItemFlex"><Logo logoClass={isNavVisible?"loader":"nav-logo"} logoSize={40}/>{li}</span>
        </li>)}
    </ul>
);   
}
SideNav.defaultProps={
    navList:['About','Services','Clients','Contact'],
    pageHandler:()=>{},
} 
export default SideNav;