import React, {Component} from 'react'

class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: ['the ring -- destroyed', 'the diary -- destroyed', 'the locket -- known, not found', 
                             'the cup -- known, not found', "something of Ravenclaw's or Gryffindor's (?) -- not found", 'Nagini (?) --not found'],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(e) {
        this.setState({userInput: e.target.value});
    }

    solveToy() {
        var input = this.state.userInput;
        this.setState({ filteredArray: this.state.unFilteredArray.filter(function(value) {
            return value.indexOf(input) !== -1;
        }) });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy()}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray) }</span>
                                
            </div>
        );
    }
}

export default FilterString;