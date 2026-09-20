let size = 200;
let color = 0;

const balloon = document.querySelector('.balloon');

balloon.addEventListener('click', function () {
  size += 10;
  color = (color + 1) % 3;

  if (size > 420) {
    size = 200;
    color = 0;
  }

  balloon.style.width = size + 'px';
  balloon.style.height = size + 'px';
  balloon.style.backgroundColor = colors[color];
});

const colors = ['red', 'green', 'blue'];

balloon.addEventListener('mouseleave', function () {
  size -= 5;
  color = (color -1 + 3) % 3;

  if (size < 200) {
    size = 200;
  }

  balloon.style.width = size + 'px';
  balloon.style.height = size + 'px';
  balloon.style.backgroundColor = colors[color];
});