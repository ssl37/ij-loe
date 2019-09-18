import React from 'react';
import ReactDOM from "react-dom";
//import Flexbox from 'react-svg-flexbox';
//import logo from './logo.svg';
//import './App.css';
import sevenses from './7array';


function Card(props) {
    //let shift = `translate(${props.pos.x} ${props.pos.y})`;
    return (
        <svg x={props.pos.x+'in'} y={props.pos.y+'in'}>
        <g>
            <circle className="il-card" cx="1.75in" cy="1.75in" r="1.75in" />
            <text fontSize="45" x="1.75in" y="1.75in">
                {(props.words[0] ? props.words[0][0] : 'Nope')}
            </text>
        </g>
        </svg>
    )
}

export class IlPage extends React.Component {
    state = {
        contentWidth: 500,
        contentHeight: 20000,
    };

    measureElement = (element) => {
        const DOMNode = ReactDOM.findDOMNode(element);
        return {
            contentWidth: DOMNode.clientWidth,
            contentHeight: DOMNode.clientHeight,
        };
    };


    // Let's suppose <CardContent /> will not change in size so
    // we don't have to be aware of its possible changes
    componentDidMount() {
        this.content && this.setState( this.measureElement(this.content) );
        console.log('calling did mount', this.state, this.content);
    }

    // render() {
    //     return(
    //         <div>
    //             <CardContent  content={this.props.cardContent} />
    //             {this.isThereRoomForImage() ? <BottomImage /> : null}
    //         </div>
    //     );
    // };
    //

    calculateOffsets() {
        let PAGE_MARGIN = 0;
        let CARD_X_OFFSET = 2;
        let CARD_Y_OFFSET = 3.25;
        let PAGE_Y_OFFSET = 10.22;

        this.getY = (idx) => {
            let cardspot = Math.floor( 2.0 * (idx % 5) / 3 );
            return PAGE_MARGIN + (CARD_Y_OFFSET * cardspot) + (PAGE_Y_OFFSET * Math.floor(idx / 5));
        };
        this.getX = (idx) => {
            let cardspot = ( 2 * (idx % 5) ) % 3;
            return (PAGE_MARGIN + CARD_X_OFFSET * cardspot);
        };
    }

    render() {
        console.log('calling render');
        this.calculateOffsets();
        let wordPairs = this.props.wordlist.split('\n').map((strPair) => strPair.split(','));
        let cardGroups = sevenses.map((cardWords, cardIdx) => {
            return {
                words: cardWords.map((idx) => wordPairs[idx]),
                pos: {x: this.getX(cardIdx), y: this.getY(cardIdx)}
            }
        });
        let groupCircles = cardGroups.map((card,idx) => {
            return <Card key={idx} words={card.words} pos={card.pos} />;
        });

        return (
            <div className="ilPage">
                <svg ref={(r) => {console.log('in the ref', r); this.content = r}} height='123in' width='7.5in'>
                    {groupCircles}
                </svg>
            </div>
        );
    }
}
