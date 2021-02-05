import './Home.css';
import React from 'react';
import Logo from './Logo'

function Home(props){
const {appTitle,appSubTitle}=props;
return(
    <div className="home">
        <Logo logoClass={"App-logo loader"}/>
        <h1>{appTitle}</h1>
        <p>{appSubTitle}</p>
    </div>
);    
}
Home.defaultProps={
    appTitle:"app title",
    appSubTitle:"app sub-title",
}
export default Home;