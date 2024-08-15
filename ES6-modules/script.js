const expression = document.getElementById('expression')
const result = document.getElementById('result')
const button = document.getElementById('button')

import performOperation from "./operations.js"

button.addEventListener('click',generalFunction)


function generalFunction() {
    
    result.innerHTML = performOperation(expression.value)
}
