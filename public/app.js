const toCurrency = price => {
  return new Intl.NumberFormat('ru-RU', {
    currency: 'rub',
    style: 'currency',
  }).format(price)
}

// Formatting each car price
document.querySelectorAll('.price').forEach(node => {
  node.textContent = toCurrency(node.textContent);
})

// $ jq or html
const $basket = document.querySelector('#basket');
if ($basket) {
  $basket.addEventListener('click', event => {
    if (event.target.classList.contains('js-remove')) {
      const id = event.target.dataset.id;
      fetch('/basket/remove/' + id, {
        method: 'delete',
      })
      .then(res => res.json())
      .then(basket => {
        if (basket.cars.length) {
          const html = basket.cars.map(el => {
            return `
              <tr>
                <td>${el.model}</td>
                <td>${el.count}</td>
                <td>
                  <button class="btn btn-small js-remove" data-id="${el.id}">Delete</button>
                </td>
              </tr>
              `
          }).join('')
          $basket.querySelector('tbody').innerHTML = html;
          $basket.querySelector('.price').textContent = toCurrency(basket.price);
          return
        }
        $basket.innerHTML = '<p>Basket is empty</p>'
      });
    }
  })
}