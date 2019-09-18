import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IlControl} from './ijLoeControl';
import {IlPage} from './ijLoePage';
import initialWordlist from './initial'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {wordlist: initialWordlist.join('\n')};
        this.updateWordlist = this.updateWordlist.bind(this)
    }

    updateWordlist(evt) {
        this.setState({wordlist: evt.value});
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="tight-header">
                        Ij-loe
                    </h1>
                </header>
                <IlControl updateWordlist={this.updateWordlist} wordlist={this.state.wordlist}/>
                <IlPage wordlist={this.state.wordlist}/>
            </div>
        );
    }
}

export default App;
