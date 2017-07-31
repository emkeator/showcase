import React, {Component} from 'react'

class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    updateInput(e) {
        this.setState({userInput: e.target.value});
    }

    solveToy() {
        var inputs = this.state.userInput.split(',')
        for (let i = 0; i < inputs.length; i++) {
            
            var cur = Number(inputs[i].replace(/ /g,''))
            
            if (cur) {

                cur % 2 === 0 ? this.state.evenArray.push(cur) : this.state.oddArray.push(cur);


            } else {
                alert('THIS IS FOR NUMBERS ONLY, STUPID FAT HOBBITSES!');
            }
        }
        this.setState({evenArray: this.state.evenArray});
        this.setState({oddArray: this.state.oddArray});
        
    }

    render() {
        return ( 
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy()}>Split</button>
                <span className="resultsBox">{this.state.evenArray.join(', ')}</span>
                <span className="resultsBox">{this.state.oddArray.join(', ')}</span>                
                
            </div>
        );
    }
}

export default EvenAndOdd;