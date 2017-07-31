import React, {Component} from 'react'

class RecursiveArrayFlatten extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: [1, 2, [4, 5, [8, 9, [10, 11, 12, 13], 14, 15, [16, 17, [18, 19], [20, 21], 22], 23], 24, 25], 26, [27, 28]],
            filteredArray: [],
            userInput: '[1, 2, [4, 5, [8, 9, [10, 11, 12, 13], 14, 15, [16, 17, [18, 19], [20, 21], 22], 23], 24, 25], 26, [27, 28]]'
        }
    }

    updateInput(e) {
        console.log(Array.from(userInput));
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Recursively Flatten a Nested Array</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy()}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray) }</span>
                                
            </div>
        );
    }
}

export default RecursiveArrayFlatten;