import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import SideNav from './sideNav';
import Contact from './Contact';
import Clients from './Clients';
import Services from './Services';
import About from './About';


function App() {
    let title = "Jamber ganja";
    let subTitle = "recreational and medicinal solutions";
    const [page, setPage] = useState('home');
    const pages = ["About", "Services", "Clients", "Contact"];

    function pageHandler(requestedPage) {
        setPage(requestedPage);
    }

    function getPage(page) {
        switch (page) {
            case 'About':
                return ( < About / > )
            case 'Services':
                return ( < Services / > )
            case 'Clients':
                return ( < Clients / > )
            case 'Contact':
                return ( < Contact / > )
            default:
                return ( <
                    Home appTitle = { title }
                    appSubTitle = { subTitle }
                    />);
                }
        }
        return ( <
            div className = "App" >
            <
            header > < SideNav pageHandler = { pageHandler }
            navList = { pages }
            /></header >
            <
            main > { getPage(page) } < /main>    <
            footer > < /footer>  <
            /div>
        );
    }
    export default App;