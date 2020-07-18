import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <Navigation></Navigation>
            </header>
        );
    }
}

export default Header;