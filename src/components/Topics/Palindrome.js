import React, {Component} from 'react'

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: 'Palindrome: '
        }
    }

    updateInput(e) {
        this.setState({userInput: e.target.value});
    }

    solveToy() {
        var nonAlpha = /[^A-Za-z0-9]/g;
        var forward = this.state.userInput.toLowerCase().replace(nonAlpha, "");
        var reverse = forward.split('').reverse().join('');
        
        this.setState({palindrome: 'Palindrome: '+(forward === reverse)})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy()}>Filter</button>
                <span className="resultsBox">{this.state.palindrome }</span>
                                
            </div>

        );
    }
}

export default Palindrome;