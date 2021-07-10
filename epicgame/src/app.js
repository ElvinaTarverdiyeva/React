import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './sass/style.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Store from './components/Store'
import News from './components/News'
import Faq from './components/Faq'
import Help from './components/Help'
import Footer from './components/Footer';
import UnrealEngine from './components/UnrealEngine'




const App = () => (
    <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Store}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/help" component={Help}></Route>
        <Route path="/unrealengine" component={UnrealEngine}></Route>
        <Footer/>
    </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));