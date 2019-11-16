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
        this.state = {selectedAlg: "Printed"};
        this.handleAlg = this.handleAlg.bind(this);
    }

    handleAlg(evt) {
        this.setState({selectedAlg: evt.target.value});
        this.props.update({algorithm: evt.target.value});
    }

    render() {
        return (
            <div className="setting-options">
                <AlgOption label={'Randomized'}
                           alg={this.state.selectedAlg}
                           updateAlg={this.handleAlg}
                />
                <AlgOption label={'Printed Playing Cards'}
                           alg={this.state.selectedAlg}
                           updateAlg={this.handleAlg}
                />
                <AlgOption label={'Online Flash Cards'}
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
        <div className="panel-header">
            <h2 className="tight-header">About</h2>
        </div>
            <AboutText />
        </div>
    )
}

function AboutText() {
    return (
        <div className="about-panel">
            <div>
                Ij-loe is intended to be a multi-lingual spot-it clone. Instead of
                pictures, each card has words from two different languages. To set
                your word list, copy and paste a comma separated word list into the
                Word List text area at the left. Feel free to leave the default
                english-spanish animal list at the end, as only the first 58 lines
                are used to populate the cards. Once populated, any two cards will
                share exactly one match.
            </div>
            <div>
                Once satisfied with the word list, you can play in one of three ways.
                'Randomized' mixes the two languages on each card. 'Printed Playing Cards'
                is optimized for printing, where all the first language cards are
                printed prior to the second language, and there is a page break,
                allowing you to print in two colors, so that you can sort by your
                two languages, and always find the match between language 1 and 2.
                'Online Flash Cards' also separates the languages on each card, but
                displays them side by side in the view screen so that a match between
                the two languages can be found each time you click play. In this mode,
                clicking on a word from each card will highlight if the match is found.
            </div>
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
