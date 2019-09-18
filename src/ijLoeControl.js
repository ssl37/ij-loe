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

function SettingsOptions() {
    return <div>The Setting Options</div>
}

function Settings() {
    return (
        <div className="settings-panel">
        <div className="panel-header">
            <h2 className="tight-header">Settings</h2>
        </div>
            <SettingsOptions />
        </div>
    )
}

export function IlControl(props) {

    return (
        <div className="ilControl">
            <Wordlist updateWordlist={props.updateWordlist} wordlist={props.wordlist} />
            <Settings />
        </div>
    );
}
