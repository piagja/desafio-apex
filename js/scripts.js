// login.html efeitos da linha dos campos expandindo

const input = document.querySelectorAll('.input')

function focusFunction() {
  let parent = this.parentNode.parentNode
  parent.classList.add('focus')
}

function blurFunction() {
  let parent = this.parentNode.parentNode
  if(this.value == "") {
    parent.classList.remove('focus')
  }
}

input.forEach(input => {
  input.addEventListener('focus', focusFunction)
  input.addEventListener('blur', blurFunction)
})

// fim do código do efeito para o login.html

// index.html efeitos do menu ativo


// pegando elementos com arrow function
const element = (el) => document.querySelector(el)

/* abrindo */
element('.open').addEventListener('click', () => {
  element('.nav-list').classList.add('active')
})


/* fechando */
element('.close').addEventListener('click', () => {
  element('.nav-list').classList.remove('active')
})
