function nextId() {
  const foods = readAll();

  const ids = foods.map((food) => food.id);

  const maxId = Math.max(...ids);

  return maxId + 1;
}

function load(newFoods) {
  localStorage.setItem('foods-app:foods', JSON.stringify(newFoods));
}

function create(food) {
  food = { id: nextId(), ...food };

  const foods = readAll();

  const newFoods = [...foods, food];

  load(newFoods);

  return food;
}

function readAll() {
  return JSON.parse(localStorage.getItem('foods-app:foods'));
}

function read(id) {
  const foods = readAll();

  const food = foods.find((food) => food.id === id);

  return food;
}

function update(id, food) {
  const foods = readAll();

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods[index] = { id, ...food };
  }

  load(foods);

  return food;
}

function destroy(id) {
  const foods = readAll();

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods.splice(index, 1);
  }

  load(foods);
}
const itens = [
  {
    imagem:
      'https://images.unsplash.com/flagged/photo-1552938218-ac9ec40c702a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    nome: 'Café',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
    nome: 'Sandwiche',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1598215439218-f79b46925d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    nome: 'Suco',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1005&q=80',
    nome: 'Bolo',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1600431562968-ef337c8733ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    nome: 'Biscoito',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80',
    nome: 'Leite',
    preparo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];
//==acima, um dataset que vai ser usado para montar o cardapio dinamicamente

//==iteracao em cada objeto json presente na lista "itens", para preencher o cardapio dinamicamente com os valores dos seus objetos json valores

for (let item of itens) {
  const view = `<div class="col card mx-1 py-1">
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;

  //==let itensCardapio = document.querySelector('.itens-cardapio');
  let itensCardapio = document.getElementById('itens-cardapio');
  itensCardapio.insertAdjacentHTML('beforeend', view);
  /*==com o objeto document, e usando getElementById, o elemento com a classe "itens-cardapio" vai receber com "insertAdjacentHTML", o conteudo da constante view que por sua vez, sera a adicionado logo antes da tag de fechamento </body> com o
  parametro "beforeend"*/
}
/*
load (itens);

function createCard(f) {
  return `<div class="col card mx-1 py-1">
                  <img src="${f.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${f.nome}</h5>
                    <p class="card-text">${f.preparo}</p>
                    //<p class="card-text">${food.preco}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;
}
for (let ffood of readAll()) {
  const cardDeck = (document.getElementById("itens-cardapio");
  const card = createCard(ffood);
  cardDeck.insertAdjacentHTML('beforeend', card);
}
*/
