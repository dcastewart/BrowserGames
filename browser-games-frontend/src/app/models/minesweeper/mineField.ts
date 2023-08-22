import { MSTile } from "./mstile";

export class MineField {

    mineField: Array<Array<MSTile>>

    constructor(width: number, height: number, mineCount: number) {
        this.mineField = Array(width)
        //create empty array
        for(let i = 0; i < this.mineField.length; i++) {
            this.mineField[i] = Array(height)
        }

        //populate mines using generatedLocations
        let generatedLocations = this.generateLocations(width, height, mineCount)
        generatedLocations.forEach( (mineLocation) => {
            this.mineField[Math.floor(mineLocation/width)][mineLocation % width] = new MSTile(true)
        })

        //populate emtpy tiles
        for(let x = 0; x < this.mineField.length; x++) {
            for(let y = 0; y < this.mineField[x].length; y++){
                if(this.mineField[x][y] == null) this.mineField[x][y] = new MSTile(false)
            }
        }

        //calculate surrounding mines counts
        let surroundingMines = 0
        let neighbors = [[-1,0], [-1,-1], [-1,1], [0,1], [0,-1], [1,-1], [1,0], [1,1]]
        for(let x = 0; x < this.mineField.length; x++) {
            for(let y = 0; y < this.mineField[x].length; y++){
                surroundingMines = 0
                neighbors.forEach( neighbor => {
                    if( x + neighbor[0] >= 0 && x + neighbor[0] < this.mineField.length && y + neighbor[1] >= 0 && y + neighbor[1] < this.mineField[x].length) {
                        if(this.mineField[x+neighbor[0]][y+neighbor[1]].isMine) {
                            surroundingMines++
                        }
                    }
                })
                this.mineField[x][y].surroundingMines = surroundingMines
            }
        }
    }

    private generateLocations(width: number, height: number, mineCount: number): Array<number> {

        //create array of indexes from 0 -> total tile count
        let possibleValues = Array()
        for(let i = 0; i < width*height; i++){
            possibleValues.push(i)
        }

        //choose random index and swap with the last element
        //run again ignoring the last element moved to the end until the last mineCount elements have been selected
        for(let i = 0; i < mineCount; i++){
            let indexToAdd = Math.floor(Math.random() * (possibleValues.length - i - 1))

            let temp = possibleValues[indexToAdd]
            possibleValues[indexToAdd] = possibleValues[possibleValues.length - i - 1]
            possibleValues[possibleValues.length - i - 1] = temp
        }

        //return the last mineCount elements of array as random list
        return possibleValues.slice(-mineCount)
    }
}