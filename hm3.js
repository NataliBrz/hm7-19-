const aInput = document.querySelector('#a')
const bInput = document.querySelector('#b')
const sumBtn = document.querySelector('#summ')
const restBtn = document.querySelector('#rest')
const multBtn = document.querySelector('#mult')
const delBtn = document.querySelector('#del')
const result = document.querySelector('#result')



class Calculation {
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    static sum() {
        let summ = Action.numberOne + Action.numberTwo;
        return summ;

    }

}

let Action = new Calculation()
Action.sum()

sumBtn.onclick = function () {
    Action.numberOne = aInput.value;
    Action.numberTwo = bInput.value;
}






