import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function Wordlist(props) {
    let handleUpdate = (evt) => {
        props.updateWordlist({value: evt.target.value})
    };
    return (
        <div className="wordlist-panel">
        <div className="panel-header">
            <h2 className="tight-header">Word List</h2>
        </div>
            <textarea className="wordlist-area" onChange={handleUpdate} value={props.wordlist}/>
        </div>
    )
}

function AlgOption(props) {
    let myValue = props.label.split(' ')[0];
    return (
        <div className="radio">
            <label>
                <input type="radio" value={myValue} checked={props.alg === myValue} onChange={props.updateAlg} />
                { props.label }
            </label>
        </div>
    );
}

class SettingsOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedAlg: "Separated"};
        this.handleAlg = this.handleAlg.bind(this);
    }

    handleAlg(evt) {
        this.setState({selectedAlg: evt.target.value});
        this.props.update({algorithm: evt.target.value});
    }

    render() {
        return (
            <div>
                <AlgOption label={'Random (Mixed language words on each card )'}
                           alg={this.state.selectedAlg}
                           updateAlg={this.handleAlg}
                />
                <AlgOption label={'Separated ( All language 1 cards, then all language 2 cards (Best for printing) )'}
                           alg={this.state.selectedAlg}
                           updateAlg={this.handleAlg}
                />
                <AlgOption label={'Alternate ( Interlace language 1 and language 2 cards )'}
                           alg={this.state.selectedAlg}
                           updateAlg={this.handleAlg}
                />
            </div>
        )
    }
}

function Settings(props) {
    return (
        <div className="settings-panel">
        <div className="panel-header">
            <h2 className="tight-header">Settings</h2>
        </div>
            <SettingsOptions update={props.updateSettings}/>
        </div>
    )
}

export function IlControl(props) {

    return (
        <div className="ilControl">
            <Wordlist updateWordlist={props.updateWordlist} wordlist={props.wordlist} />
            <Settings updateSettings={props.updateSettings}/>
        </div>
    );
}
