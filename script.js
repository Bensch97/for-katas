const destination = document.body

function printAnswer(answer) {
    let div = document.createElement('div');
    div.textContent = answer;
    destination.appendChild(div)
}

function add(a, b) {
    return a + b
};
printAnswer('Q1:' + ' ' + add(2,4));


function multi(c, d) {
    let result = 0
    for (let i = 0; i < d; i = add(i, 1)) {
        //    result += add(c, c);
        result = add(result, c);
    }
    return result
}
printAnswer('Q2:' + ' ' + multi(6, 8));


function power(x, n) {
    let result = x;
    for (let i = 0; i < add(n, -1); i = add(i, 1)) {
        result = multi(result, x)
    }
    return result
}
printAnswer('Q3:' + ' ' + power(2,8))

function factorial(f) {
    let result = 1
    for (let i = 1; i<=f; i = add(i, 1)) {
        result = multi(result, i)
    }
    return result
}
printAnswer('Q4:' + ' ' + factorial(4))

function fibonacci(n) {
    let secondLastVal = 0;
    let lastVal = 1;
    let fibon = 0;
    for (let i = 0; i < (n - 2); i = add(i, 1)) {
        fibon = add(secondLastVal, lastVal);
        secondLastVal = lastVal;
        lastVal = fibon;
    }
    return fibon
}
printAnswer('Q5:' + ' ' + fibonacci(8))