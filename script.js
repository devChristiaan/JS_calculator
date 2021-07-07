

///Place Buttons in varibales
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")

///Place display text in variables
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

//Construct the calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//Listen to all button inputs

numberButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})