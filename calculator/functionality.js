alert("Calculator by smgz")
let displayArea = document.querySelector("#display-area")
let sum = difference = division = multiplication = modulo = percent = 0
let firstNumberPressed = secondNumberPressed = ''
let previousResult = 0
let operator = ''
let pressedPrint = false

function add(){
  operator = '+'
  }

function subtract(){
  operator = '-'
 }

function multiply(){
  operator = 'x'
}

function divide(){
  operator = '/'
}

function moduloArithmetic(){
  operator = "mod"
}

function percentage(){
  percent = previousResult * 100
  displayArea.textContent = percent + '%'
  secondNumberPressed = ''
}

function processingNumber(number){
  if (previousResult != 0){
    firstNumberPressed = previousResult
  }
  if (operator == ''){
    firstNumberPressed += number
  }
  else{
    secondNumberPressed += number
    displayArea.textContent = firstNumberPressed + " " + operator + " " + secondNumberPressed
  }
}

function printResult(){
  if (operator == '+'){
    sum = Number(firstNumberPressed) + Number(secondNumberPressed)
    displayArea.textContent = sum
    secondNumberPressed = ''
    previousResult = sum
    operator = ''
  }

  else if ( operator == '-'){
    difference = Number(firstNumberPressed) - Number(secondNumberPressed)
    displayArea.textContent = difference
    secondNumberPressed = ''
    previousResult = difference
    operator = ''
  }

  else if(operator == '/'){
    division = Number(firstNumberPressed) / Number(secondNumberPressed)
    displayArea.textContent = division
    secondNumberPressed = ''
    previousResult = division
    operator = ''
  }

  else if (operator == 'x'){
    multiplication = Number(firstNumberPressed) * Number(secondNumberPressed)
    displayArea.textContent = multiplication
    secondNumberPressed = ''
    previousResult = multiplication
    operator = ''
  }

  else if (operator == "mod"){
    modulo = firstNumberPressed % secondNumberPressed
    displayArea.textContent = modulo
    secondNumberPressed = ''
    previousResult = modulo 
    operator = ''
  }

  else if (operator == ''){
    displayArea.textContent = 0
  }
}

function reset(){
  displayArea.textContent = 0
  firstNumberPressed = ''
  secondNumberPressed = ''
  previousResult = 0
  operator = ''
}
