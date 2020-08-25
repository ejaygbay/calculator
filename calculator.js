let operators = ['+', '-', '*', '/', '.'];

const displayValue = (event) => {
    document.getElementById('screen').value += event.target.value;
}

const getOperator = (event) => {
    checkLastValue(event.target.value);
}

const checkLastValue = (value) => {
    let value_displayed = document.getElementById('screen').value;
    operators.includes(value_displayed[value_displayed.length - 1]) ? console.log("Last value is an operator") : document.getElementById('screen').value += value;
}

const clearButton = () => {
    document.getElementById('screen').value = "";
}

const deleteButton = () => {
    let value_displayed = document.getElementById('screen').value;

    value_displayed.length > 0 ? value_displayed = value_displayed.slice(0, value_displayed.length - 1) : value_displayed = "";

    document.getElementById('screen').value = value_displayed;
}

const equalButton = () => {
    let equal_value = eval(document.getElementById('screen').value);
    equal_value === Infinity ? document.getElementById('screen').value = "Can't divide a number by 0" : document.getElementById('screen').value = equal_value;
}