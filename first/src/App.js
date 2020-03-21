import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialods";
import {BrowserRouter,Route} from 'react-router-dom'

let App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                </div>
        </BrowserRouter>
    );
}

export default App;
