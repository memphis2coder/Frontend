import React, {Component } from 'react';

// header styles
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="jumbotron jumbotron--custom">
                        <div className="container">
                            <h1>title</h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};

export default Header;