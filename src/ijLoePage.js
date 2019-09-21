import React from 'react';

//import Flexbox from 'react-svg-flexbox';
//import logo from './logo.svg';
//import './App.css';
import sevenses from './7array';


function Card(props) {
    // let hcPos = [
    //     ["25", "175", "20", "start"],
    //     ["55", "75", "40", "start"],
    //     ["90", "315", "-40", "start"],
    //     ["170", "25", "80", "start"],
    //     ["175", "175", "0", "middle"],
    //     ["300", "80", "-40", "end"],
    //     ["275", "285", "40", "end"],
    //     ["285", "175", "90", "middle"],
    // ];
    let hcPos = [
        ["175", "50", "0", "middle"],
        ["45", "90", "0", "start"],
        ["315", "130", "0", "end"],
        ["15", "170", "0", "start"],
        ["175", "210", "0", "middle"],
        ["325", "250", "0", "end"],
        ["45", "290", "0", "start"],
        ["175", "330", "0", "middle"],
    ];

    let wordDivs = props.words.map((wordPairs, idx) => {
        let p = hcPos[idx];
        let thisword = wordPairs[props.lado()].trim();
        if(thisword.match(' ')) {
            thisword = thisword.split(' ').map((subword, swidx) => {
                return (
                    <tspan key={swidx} x={p[0]} dy={swidx===0 ? "-.5em" : "1em"}>{subword}</tspan>
                );
            })
        }
        return (
            <text key={idx} fontSize="30"
                  x={p[0]} y={p[1]}
                  textAnchor={p[3]}
                  transform={`rotate(${p[2]}, ${p[0]}, ${p[1]})`}>
                {thisword}
            </text>
        );
    });
    //let shift = `translate(${props.pos.x} ${props.pos.y})`;
    return (
        <svg className={(props.breakafter ? "break-after" : "")}
             x={props.pos.x} y={props.pos.y}
             width="45" height="45" viewBox={'0 0 350 350'}>
            <g>

                <circle className={"il-card "+(props.lado() === 1 ? "red-fill" : "blue-fill")}
                        cx="175" cy="175" r="175" />
                {wordDivs}

            </g>
        </svg>
    )
}



export class IlPage extends React.Component {

    constructor(props) {
        super(props);
        let PAGE_MARGIN = 0;
        let CARD_X_OFFSET = 27.5; //2;
        let CARD_Y_OFFSET = 40; //3.25;
        let PAGE_Y_OFFSET = 136.5; //10.22;

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
        let wordPairs = this.props.wordlist.split('\n').map((strPair) => strPair.split(','));
        let cardGroups = sevenses.map((cardWords, cardIdx) => {
            return {
                words: cardWords.map((idx) => wordPairs[idx]),
                pos: {x: this.getX(cardIdx), y: this.getY(cardIdx)},
                lado: this.props.ladoAlg(cardIdx),
                breakafter: (cardIdx % 5 === 4)
            }
        });
        let groupCircles = cardGroups.map((card,idx) => {
            return <Card key={idx} breakafter={card.breakafter} words={card.words} pos={card.pos} lado={card.lado}/>;
        });

        return (
            <div className="ilPage">
                <svg className="page-holder" viewBox={'0 0 100 1600'}>
                    {groupCircles}
                </svg>
            </div>
        );
    }
}
