import './style/style.scss';

const CURRENCY = 'UAH';

const pizzaListEl = document.querySelector('.pizza-list');
pizzaListEl.innerHTML = 'Loading...';

Promise.all([
  fetch('/pizza-list').then((resp) => resp.json()),
  fetch('/pizza-sizes').then((resp) => resp.json()),
])
  .then(([pizzaList, pizzaSizes]) => renderPizzaList(pizzaList, pizzaSizes));

function renderPizzaList(pizzaList, pizzaSizes) {
  debugger
  pizzaListEl.innerHTML = '';

  pizzaList.forEach(({ id, title, url, price, isAvaible }) => {
    const pizzaItemEl = creatPizzaEl({ isAvaible, title, url, price });
    appendPizzaSizes(pizzaItemEl, id, pizzaSizes);
    appendAddBtn(pizzaItemEl);
    pizzaListEl.append(pizzaItemEl);
  });
}

function creatPizzaEl({ isAvaible, title, url, price }) {
  const pizzaItemEl = document.createElement('li');
  pizzaItemEl.className = 'pizza-item' + (isAvaible ? '' : ' inactive');
  pizzaItemEl.innerHTML = `
        <h3 class="pizza-name">${title}</h3>
        <img src="${url}"
        alt="Pizza">
        <div class="price"><span>Price: </span><span>${price} ${CURRENCY}</span></div>
        <div class="sizes"></div>`;

  return pizzaItemEl;
}

function appendPizzaSizes(pizzaItemEl, pizzaId, pizzaSizes) {
  const pizzaSizeConteiner = pizzaItemEl.querySelector('.sizes');

  pizzaSizes.forEach(({ id: sizeID, title }, index) => {
    const sizeEl = document.createElement('div');
    sizeEl.innerHTML = `
        <input type="radio" name="pizza-size${pizzaId}" id="${sizeID}${pizzaId}" ${
      !index ? 'checked' : ''
    }>
        <label for="${sizeID}${pizzaId}">${title}</label>
        `;
    pizzaSizeConteiner.append(sizeEl);
  });
}

function appendAddBtn(pizzaItemEl) {
  const pizzSizeConteiner = pizzaItemEl.querySelector('.sizes');

  const btnEl = document.createElement('button');
  btnEl.className = 'add-btn';
  btnEl.textContent = 'Add';
  pizzSizeConteiner.append(btnEl);
}
