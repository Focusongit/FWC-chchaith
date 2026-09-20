$('#calculator').on('submit', function (event) {

    event.preventDefault();

    const num1 = Number($('#left').val());
    const operator = $('#operator').val();
    const num2 = Number($('#right').val());

    if (
        !Number.isInteger(num1) ||
        num1 < 0 ||
        !Number.isInteger(num2) ||
        num2 < 0
    ) {
        alert('Error :(');
        return;
    }

    if (
        (operator === '/' || operator === '%') &&
        num2 === 0
    ) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    }

    alert(result);
    console.log(result);
});


setInterval(function () {
    alert('Please, use me...');
}, 30000);