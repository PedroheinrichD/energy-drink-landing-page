// Dados dos produtos
const produtos = [
  {
    flavor: "Citrus Shock",
    title: "Lemon Lime",
    desc: "A zesty explosion of natural lemon and lime that wakes you up instantly",
    img: "assets/images/energyDrink png.png",
    flavorColor: "#00ff88",
    cartColor: "",
    badges: ["Zero Sugar", "Metabolism Boost", "Natural Flavours", "Vitamin Rich"]
  },
  {
    flavor: "Orange Charge",
    title: "Orange Flavour",
    desc: "A refreshing burst of natural orange flavour that keeps you energized and focused.",
    img: "assets/images/orangeFlavor/energyDrinkOrange.png",
    flavorColor: "#eb9217",
    cartColor: "#eb9217",
    badges: ["Zero Sugar", "Vitamin C Boost", "Natural Orange Flavours", "Energy Support"]
  }
]

let indexAtual = 0
let card = document.querySelector('.card')

function renderCard(produto) {
  card.innerHTML = `
    <div class="img_Product_card_PC">
      <img src="${produto.img}" alt="${produto.title}">
    </div>
    <div class="text_Product_card">
      <h3 id="flavor" style="color: ${produto.flavorColor}">${produto.flavor}</h3>
      <h2 id="titleProduct">${produto.title}</h2>
      <p id="descProduct">${produto.desc}</p>
      <div class="img_Product_card_MOBILE">
        <img src="${produto.img}" alt="${produto.title}">
      </div>
      <ul>
        ${produto.badges.map((b, i) => `<li class="badges${i + 1}">${b}</li>`).join('')}
      </ul>
      <div class="containerButtonCart">
        <button class="arrow-btn left mobileBTN">‹</button>
        <div class="buttonCart" style="background-color: ${produto.cartColor}">
          <a href="#">Add to Cart</a>
        </div>
        <button class="arrow-btn right mobileBTN">›</button>
      </div>
    </div>
  `

  card.querySelector('.mobileBTN.left').addEventListener('click', irEsquerda)
  card.querySelector('.mobileBTN.right').addEventListener('click', irDireita)
}

function irDireita() {
  indexAtual = (indexAtual + 1) % produtos.length
  renderCard(produtos[indexAtual])
}

function irEsquerda() {
  indexAtual = (indexAtual - 1 + produtos.length) % produtos.length
  renderCard(produtos[indexAtual])
}

// Botões PC
document.querySelector('.pcBTN.right').addEventListener('click', irDireita)
document.querySelector('.pcBTN.left').addEventListener('click', irEsquerda)

// Botões Mobile — primeira vez
card.querySelector('.mobileBTN.right').addEventListener('click', irDireita)
card.querySelector('.mobileBTN.left').addEventListener('click', irEsquerda)