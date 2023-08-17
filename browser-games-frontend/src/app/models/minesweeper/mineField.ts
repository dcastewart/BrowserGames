import { MSTile } from "./mstile";

export class MineField {

    mineField: Array<Array<MSTile>>

    constructor(width: number, height: number, mineCount: number) {
        this.mineField = Array(width)
        for(let i = 0; i < this.mineField.length; i++) {
            this.mineField[i] = Array(height)
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
            let indexToAdd = Math.random() * (possibleValues.length - i - 1)

            let temp = possibleValues[indexToAdd]
            possibleValues[indexToAdd] = possibleValues[possibleValues.length - i - 1]
            possibleValues[possibleValues.length - i - 1] = temp
        }

        //return the last mineCount elements of array as random list
        return possibleValues.slice(-mineCount)

    }
}