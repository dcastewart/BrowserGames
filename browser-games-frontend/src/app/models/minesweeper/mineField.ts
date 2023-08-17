import { MSTile } from "./mstile";

export class MineField {

    mineField: Array<Array<MSTile>>

    constructor(width: number, height: number, mineCount: number) {
        this.mineField = Array(width)
        for(let i = 0; i < this.mineField.length; i++) {
            this.mineField[i] = Array(height)
        }

    }
}