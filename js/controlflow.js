let temperature = 37.4


if(temperature >= 37.5){
    console.log('high fever')
}else if(temperature<37.5 && temperature>=37){
    console.log('mild fever')
}else{
    console.log('healthy')
}


//switch
function calculate(number1, operator, number2){
    let result
    switch(operator){
        case '+':
            result = number1+number2
            break
        case '-':
            result = number1-number2
            break
        case '*':
            result = number1*number2
            break
        case '/':
            result = number1/number2
            break
        default:
            console.log('not implemented')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))


//throw  
function sayMyName(name = ''){
    if(name === ''){
        throw 'Name is required'
    }

    console.log('after the error')
}

//try...catch
try{
    sayMyName()
}catch(e){
    console.log(e)
}

console.log('before try/catch')
