import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IlControl} from './ijLoeControl';
import {IlPage} from './ijLoePage';
import initialWordlist from './initial'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.ladoAlgLookup = {
            "Randomized": () => { return () => (Math.floor(Math.random() * 2)); },
            "Printed": (idx) => { return () => (idx < 28 ? 0 : 1); },
            "Online": (idx) => { return () => (idx % 2); }
        };

        this.state = {
            wordlist: initialWordlist.join('\n'),
            ladoAlg: this.ladoAlgLookup["Printed"]
        };
        this.updateWordlist = this.updateWordlist.bind(this);
        this.updateSettings= this.updateSettings.bind(this);
    }

    updateWordlist(evt) {
        this.setState({wordlist: evt.value});
    }

    updateSettings(evt) {
        if(evt.algorithm) {
            this.setState({ladoAlg: this.ladoAlgLookup[evt.algorithm]});
        }
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
                <IlControl updateWordlist={this.updateWordlist}
                           wordlist={this.state.wordlist}
                           updateSettings={this.updateSettings}
                />
                <IlPage wordlist={this.state.wordlist} ladoAlg={this.state.ladoAlg}/>
            </div>
        );
    }
}

export default App;
