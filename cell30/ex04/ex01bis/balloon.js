let size = 200;
let colorIndex = 0;

const colors = ['red', 'green', 'blue'];

$('.balloon').on('click', function () {

    size += 10;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % 3;
    }

    $(this).css({
        width: size + 'px',
        height: size + 'px',
        'background-color': colors[colorIndex]
    });
});


$('.balloon').on('mouseleave', function () {

    size = Math.max(200, size - 5);

    colorIndex = (colorIndex - 1 + 3) % 3;

    $(this).css({
        width: size + 'px',
        height: size + 'px',
        'background-color': colors[colorIndex]
    });
});