import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: [ 
                {
                    species: 'Elves',
                    magicRings: 3,
                    /*corrupted: false,
                    bearers: ['Galadriel', 'Elrond', 'Gandalf'],*/
                    hasCrystals: true,
                    flattensCastles: true
                },
                {
                    species: 'Dwarves',
                    magicRings: 7,
                    /*corrupted: true,
                    bearers: ['Dwarf Lord 1', 'Dwarf Lord 2', 'Dwarf Lord 3', 'Dwarf Lord 4', 'Dwarf Lord 5', 'Dwarf Lord 6', 'Dwarf Lord 7'],*/
                    hasCrystals: true,
                    usedForEvil: true
                },
                {
                    species: 'Mortal Men',
                    magicRings: 9,
                   /*corrupted: true,
                    bearers: ['Witch-King of Angmar', 'bunch of a-holes'],*/
                    makesInvisible: true,
                    usedForEvil: true
                },
                {
                    species: 'Maiar',
                    magicRings: 1,
                    /*corrupted: true,
                    bearers: ['Dark Lord Sauron'],*/
                    makesInvisible: true,
                    usedForEvil: true,
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(e) {
        this.setState({userInput: e.target.value});
    }

    solveToy() {
        var filterKey = this.state.userInput;
        
        for (let i = 0; i < this.state.unFilteredArray.length; i++) {

            let prop = this.state.unFilteredArray[i];
            
            if(prop.hasOwnProperty(filterKey)) {
                
                this.state.filteredArray.push(prop);
                console.log(this.state.filteredArray);
            }
        }
        this.setState({filteredArray: this.state.filteredArray});
    }

    stringThis(array) {
        var str = '';
        for (var i = 0; i < array.length; i++) {
            for (let prop in array[i]) {
                str += (prop + ': ' + array[i][prop] + '. ');
            }
            str += '\n';
        }
        return str;
    }


    render() {
        return ( 
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={() => this.solveToy()}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray) }</span>
                                
            </div>
        );
    }
}

export default FilterObject;