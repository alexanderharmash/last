import Decimal from 'decimal.js';

import './index.css';

const form = document.querySelector('body');
form.insertAdjacentHTML('beforeend', '<input type="text" id="first_operand"  name="fname"><br>');
form.insertAdjacentHTML('beforeend', '<input type="text" id="second_operand" name="fname2"><br>');
form.insertAdjacentHTML('beforeend', '<button type="button">Посчитать!</button>');

const button = form.querySelector('button');
button.addEventListener('click', () => {
  const divs = document.body.querySelectorAll('div');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].remove();
  }
  const [fOp, sOp] = form.querySelectorAll('input');
  let correct = true;
  if (fOp.value === '' || isNaN(Number(fOp.value))) {
    correct = false;
    fOp.insertAdjacentHTML(
      'afterEnd',
      `<div class="error-message">
      <h1>Это не число</h1>
    </div>`
    );
  }
  if (sOp.value === '' || isNaN(Number(sOp.value))) {
    correct = false;
    sOp.insertAdjacentHTML(
      'afterEnd',
      `<div class="error-message">
      <h1>Это не число</h1>
    </div>`
    );
  }
  if (correct) {
    const result = new Decimal(+fOp.value).plus(+sOp.value);
    form.querySelector('button').insertAdjacentHTML(
      'afterEnd',
      `<div class="result">
            <h1>${result}</h1>
        </div>`
    );
  }
});
