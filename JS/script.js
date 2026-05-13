const produtos = [
    {
      flavor: 'Citrus Shock',
      titleProduct: 'Lemon Lime',
      descProduct: 'A zesty explosion of natural lemon and lime that wakes you up instantly',
      img_Product_card_PC: 'assets/images/energyDrink png.png',
      img_Product_card_MOBILE: 'assets/images/energyDrink png.png',
      badges: ['Zero Sugar', 'Metabolism Boost', 'Natural Flavour', 'Vitamin Rich'],
      color: '#b6e074;'
    },
  {
    flavor: 'Orange Charge',
    titleProduct: 'Orange Blast',
    descProduct: 'A refreshing burst of natural orange flavour that keeps you energized and focused.',
    img_Product_card_PC: 'assets/images/orangeFlavor/energyDrinkOrange.png',
    img_Product_card_MOBILE: 'assets/images/orangeFlavor/energyDrinkOrange.png',
    badges: ['Zero Sugar', 'Vitamin C Boost', 'Natural Orange Flavour', 'Energy Support'],
    color: '#FFA114'
  }

];


let indexAtual = 0
function irDireta(){
    if (indexAtual === 0) {
        indexAtual = 1
        renderCard()
    }else if (indexAtual === 1) {
        indexAtual = 0
        renderCard()
    }
}
function irEsquerda(){
     if (indexAtual === 1) {
        indexAtual = 0
        renderCard()
    }else if (indexAtual === 0) {
        indexAtual = 1
        renderCard()
    }
}

let card = document.querySelector('.card');

function renderCard(){

card.innerHTML = `
            <div class="img_Product_card_PC animate__fadeIn animate__animated">
                <img src="${produtos[indexAtual].img_Product_card_PC}" alt="">
            </div>

            <div class="text_Product_card animate__bounceInRight animate__animated">
                <h3 id="flavor" style="color:${produtos[indexAtual].color}"'>${produtos[indexAtual].flavor}</h3>
                <h2 id="titleProduct">${produtos[indexAtual].titleProduct}</h2>
                <p id="descProduct">${produtos[indexAtual].descProduct}</p>

                <div class="img_Product_card_MOBILE animate__fadeIn animate__animated">
                    <img src="${produtos[indexAtual].img_Product_card_MOBILE}" alt="">
                </div>

                <ul>
                    <li class="badges1">${produtos[indexAtual].badges[0]}</li>
                    <li class="badges2">${produtos[indexAtual].badges[1]}</li>
                    <li class="badges3">${produtos[indexAtual].badges[2]}</li>
                    <li class="badges4">${produtos[indexAtual].badges[3]}</li>
                </ul>

                <div class="containerButtonCart">
                    <button class="arrow-btn left mobileBTN">‹</button>
                    <div class="buttonCart" style="background-color:${produtos[indexAtual].color}"><a href="#">Add to Cart</a></div>
                    <button class="arrow-btn right mobileBTN">›</button>
                </div>
            </div>
`
const buttonLeftmobile = document.querySelector('.left.mobileBTN');
buttonLeftmobile.addEventListener('click', irEsquerda);

const buttonRightmobile = document.querySelector('.right.mobileBTN');
buttonRightmobile.addEventListener('click', irDireta);
}
renderCard()



let buttonLeftPC = document.querySelector('.left.pcBTN');
buttonLeftPC.addEventListener('click', irEsquerda);

let buttonRightPC = document.querySelector('.right.pcBTN');
buttonRightPC.addEventListener('click', irDireta);




