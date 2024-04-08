const title = document.querySelector('h1')
const form = document.getElementById('order')
const submit = document.getElementById('submit')

const afterSubmit = (event) => {
  event.preventDefault();
  title.textContent = 'Hotovo'
  form.textContent = 'Objednávka odeslána ke zpracování.'
}

form.addEventListener('submit', afterSubmit)

