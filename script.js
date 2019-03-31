

var columinze = (wrapper, pickSelector) => {
  const grid = document.querySelector(wrapper);

  // find all the images
  const imgElements = [...grid.children].filter(x => x.matches(pickSelector));

  // find all the text
  const txtElements = [...grid.children].filter(x => !x.matches(pickSelector));


  const left = document.createElement('div');
  left.classList.add('left');
  imgElements.forEach(element => {
    left.appendChild(element);
  });

  const right = document.createElement('div');
  right.classList.add('right');
  txtElements.forEach(element => {
    right.appendChild(element);
  });

  grid.appendChild(left);
  grid.appendChild(right);
}

if (document.documentElement.clientWidth >= 600) {
  columinze('.wrapper', 'img');
}