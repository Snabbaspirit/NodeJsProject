
// Formatting each car price
document.querySelectorAll('.price').forEach(node => {
  node.textContent = new Intl.NumberFormat('ru-RU', {
    currency: 'rub',
    style: 'currency',
  }).format(node.textContent)
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
      .then(basket => console.log('basket', basket));
    }
  })
}