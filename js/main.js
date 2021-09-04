'use strict'

{
  const dts = document.querySelectorAll('dt');
  console.log('dts')

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    });
  });
}

