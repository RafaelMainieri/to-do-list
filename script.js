const listaTarefas = document.getElementById('listaTarefas');
const inputNovaTarefa = document.getElementById('input');
const botaoNovaTarefa = document.getElementById('botaoAddTarefa')
const botaoFecharJanela = document.getElementById('botaoFecharJanela');
const fundoJanelaEdicao = document.getElementById('fundoJanelaEdicao');
const janelaEdicao = document.getElementById('janelaEdicao');
const textoIdTarefa = document.getElementById('textoIdTarefa');
const inputEdicao = document.getElementById('inputEdicao');
const botaoAtualizarTarefa = document.getElementById('botaoAtualizarTarefa');




inputNovaTarefa.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId(),
    }
    if (tarefa.nome === '') {
      inputNovaTarefa.classList.add('atencao')
      alert('Insira uma tarefa no campo')
    } else {
      // add task ao html
      inputNovaTarefa.classList.remove('atencao')
      adicionarTarefa(tarefa);
    }
  }
})

botaoNovaTarefa.addEventListener('click', function () {
  let tarefa = {
    nome: inputNovaTarefa.value,
    id: gerarId(),
  }
  if (tarefa.nome === '') {
    inputNovaTarefa.classList.add('atencao')
    alert('Insira uma tarefa no campo')
  } else {
    inputNovaTarefa.classList.remove('atencao')
    adicionarTarefa(tarefa);
  }
})

botaoFecharJanela.addEventListener('click', function () {
  fundoJanelaEdicao.style.display = 'none'
  janelaEdicao.style.display = 'none'
})

botaoAtualizarTarefa.addEventListener('click', function (event) {
  let idTarefa = textoIdTarefa.innerHTML.replace('#', '')

  let tarefa = {
    nome: inputEdicao.value,
    id: idTarefa
  }

  let tarefaAtual = document.getElementById(idTarefa)

  let li = criarTarefa(tarefa)
  listaTarefas.replaceChild(li, tarefaAtual)
  fundoJanelaEdicao.style.display = 'none'
  janelaEdicao.style.display = 'none'
})

function adicionarTarefa(tarefa) {
  let li = criarTarefa(tarefa);
  listaTarefas.appendChild(li)
  inputNovaTarefa.value = ''
}

function criarTarefa(tarefa) {
  let li = document.createElement('li'); // criando o li
  li.id = tarefa.id

  let span = document.createElement('span'); // criando o span
  span.classList.add('textoTarefa'); // adicionando a classe textoTarefa
  span.textContent = tarefa.nome; // adicionando o valor escrito no input dentro do span

  let div = document.createElement('div'); // criando a div
  div.classList.add('cx-svg')

  let botaoEditar = document.createElement('button') // criando o botao
  botaoEditar.classList.add('botaoAcao') // adicionando a classe botaoAcao
  botaoEditar.innerHTML = '<i class="fa fa-pencil"></i>' // adicionando o icone de lápis
  botaoEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')') // adicionando o evento onclick="editar(tarefa.id)"

  let botaoExcluir = document.createElement('button'); // criando o botao
  botaoExcluir.classList.add('botaoAcao') // adicionando a classe botaoAcao
  botaoExcluir.innerHTML = '<i class="fa fa-trash"></i>' // adicionando o icone de lixeira
  botaoExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')') // adicionando o evento onclick="editar(tarefa.id)"

  // Adicionando elementos dentro do li
  div.appendChild(botaoEditar);
  div.appendChild(botaoExcluir);

  li.appendChild(span);
  li.appendChild(div);

  return li
}

function editar(idTarefa) {
  let li = document.getElementById(idTarefa)
  fundoJanelaEdicao.style.display = 'flex'
  janelaEdicao.style.display = 'block'
  textoIdTarefa.textContent = '#' + idTarefa
  inputEdicao.value = li.innerText;
}

function excluir(idTarefa) {
  let confirmacao = window.confirm('Tem certeza que deseja excluir?')
  if (confirmacao) {
    let li = document.getElementById(idTarefa)
    listaTarefas.removeChild(li)
  }
  // alert(idTarefa)
}

id = 0;
function gerarId() {
  return id += 1;
}