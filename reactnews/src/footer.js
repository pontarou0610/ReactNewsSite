import React, { Component } from 'react';
import logo from "./logo.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img src={logo} className="footer-logo" alt="logo" />
                <p className="footer-discription">React News by RemoteWorkChannel</p>
            </footer>
        )
    }
}
export default Footer