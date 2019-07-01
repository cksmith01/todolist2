import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Error extends Component {
    render() {
        return (
            <div id="container">
                <Navigation pageTitle="Error" />
                <div className="screenHeader">
                    Error: url not supported
                </div>
                <hr />
            </div>
        );
    }
}

export default Error;