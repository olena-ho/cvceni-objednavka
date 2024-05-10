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

formEl.addEventListener('submit', handleSubmit);
