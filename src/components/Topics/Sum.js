import React, {Component} from 'react'

class Sum extends Component {

    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput1 (e) {
        this.setState({number1: e.target.value});
    }

    updateInput2 (e) {
        this.setState({number2: e.target.value});
    }

    solveToy() {
        this.setState({sum: 1*this.state.number1 + 1*this.state.number2});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.updateInput1(e)}></input>
                <input className="inputLine" onChange={(e) => this.updateInput2(e)}></input>                
                <button className="confirmationButton" onClick={() => this.solveToy()}>Filter</button>
                <span className="resultsBox">{this.state.sum}</span>
                                
            </div>
        );
    }
}

export default Sum;