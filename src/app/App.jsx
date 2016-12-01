import React from 'react';

import { connect } from 'react-redux';

import SayHelloWorld from '../UniversalMessage/SayHelloWorld';
import UniversalMessageContainer from '../UniversalMessage/UniversalMessageContainer';

class App extends React.Component {
    componentDidMount() {
        this.myH1.style.backgroundColor = 'red';
    }

    render() {
        return (
            <div>
                <h1 ref={elem => { this.myH1 = elem; }}>App Component</h1>
                <h2><UniversalMessageContainer /></h2>

                <hr />

                <SayHelloWorld />
            </div>
        );
    }
}

export default App;