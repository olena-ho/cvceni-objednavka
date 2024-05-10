const formEl = document.querySelector('.order-form');

const creditCard = document.querySelector('#credit-card');

const doprava = document.querySelector('#doprava');


const handleSubmit = (e) => {
  e.preventDefault();
  formEl.innerHTML = `
  <h1>Hotovo</h1>
  <p>Objednávka odeslána ke zpracování.</p>
  `
  console.log(creditCard.value, doprava.value)
}

const checkCardValueLength = () =>
  {
    const cardAlert = document.querySelector('.card-alert');

    if (creditCard.value.length < 16) {
      cardAlert.classList.remove('invisibility');
      cardAlert.innerHTML = `Číslo karty je příliš krátké. Chybí ${16 - Number(creditCard.value.length)} číslic`
    } else if (creditCard.value.length > 16) {
      cardAlert.classList.remove('invisibility');
      cardAlert.innerHTML = `Číslo karty je moc dlouhé. Přebývá ${Number(creditCard.value.length) - 16} číslic`
    } else if (creditCard.value.length === 16) {
      cardAlert.classList.add('invisibility');
    }
  }


creditCard.addEventListener('change', checkCardValueLength);

formEl.addEventListener('submit', handleSubmit);

