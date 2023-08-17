export class MSTile {

    isFlagged: boolean;
    isMine: boolean;
    isPressed: boolean;


    constructor(isMine: boolean) {
        this.isFlagged = false
        this.isMine = isMine
        this.isPressed = false
    }
}