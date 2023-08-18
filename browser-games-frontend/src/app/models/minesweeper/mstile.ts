export class MSTile {

    isFlagged: boolean;
    isMine: boolean;
    isPressed: boolean;
    surroundingMines: number;


    constructor(isMine: boolean) {
        this.isFlagged = false
        this.isMine = isMine
        this.isPressed = false
        this.surroundingMines = -1
    }
}