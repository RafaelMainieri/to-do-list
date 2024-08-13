const inputNovaTarefa = document.getElementById('input');
const botaoNovaTarefa = document.getElementById('botaoAddTarefa')
const listaTarefas = document.getElementById('listaTarefas');

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

  let botaoExcluir = document.createElement('button'); // criando o botao
  botaoExcluir.classList.add('botaoAcao') // adicionando a classe botaoAcao
  botaoExcluir.innerHTML = '<i class="fa fa-trash"></i>' // adicionando o icone de lixeira

  // Adicionando elementos dentro do li
  div.appendChild(botaoEditar);
  div.appendChild(botaoExcluir);

  li.appendChild(span);
  li.appendChild(div);

  return li
}

id = 0;
function gerarId() {
  return id += 1;
}