import React, { Component } from 'react';
import logo from "./logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <h1 className="header-title">React News</h1>
                    <p className="header-discription">Powerd by NewsApi</p>
                </div>
            </header>
        )
    }
}
export default Header