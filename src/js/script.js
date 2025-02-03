const validateForm = document.getElementById('Form')
const campoNumber = document.querySelector('[name="Number"]')

const campos = [
  { name: 'NomeCompleto', message: "campo obrigatório" },
  { name: 'Email', message: "campo obrigatório" },
  { name: 'Number', message: "campo obrigatório" },
  { name: 'Mensagem', message: "campo obrigatório" }
]

validateForm.addEventListener('submit', function (evento) {
  let FormValido = true

  campos.forEach(input => {
    const campoInput = document.querySelector(`[name=${input.name}]`)
    let mensagemErro = campoInput.nextElementSibling

    if (!mensagemErro || !mensagemErro.classList.contains('campo-obrigatorio')) {
      mensagemErro = document.createElement('span')
      mensagemErro.classList.add('campo-obrigatorio')
      mensagemErro.style.color = 'red'
      mensagemErro.style.fontSize = '8px'
      campoInput.insertAdjacentElement('afterend', mensagemErro)
    }

    if (!campoInput.value) {
      campoInput.style.borderColor = 'red'
      mensagemErro.textContent = input.message
      FormValido = false
    } else {
      campoInput.style.borderColor = 'green'
      mensagemErro.textContent = ''
    }

    if(!FormValido){
      evento.preventDefault()
    }
  })
})

campoNumber.addEventListener('input', function() {
 this.value = this.value.replace(/\D/g, '');
})

