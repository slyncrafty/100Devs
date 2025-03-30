//Example fetch using pokemonapi.co


document.querySelector('#deck').addEventListener('click', getADeck)

document.querySelector('#deal').addEventListener('click', getFetch)


function getADeck() {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.deck_id)
      localStorage.setItem('deck_id', data.deck_id);
      localStorage.setItem('remaining_cards', data.remaining);
      document.querySelector('div').innerText = 'You got a deck';
    })
    .catch(err => {
      console.log(`error: ${err}`)
    })
}

function reshuffleDeck() {
  const url = `https://deckofcardsapi.com/api/deck/${localStorage.setItem('deck_id')}/shuffle/`;

}

function getFetch(){
  const deck_id = localStorage.getItem('deck_id')
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        console.log(data.remaining);
        console.log(data.cards[0]);
        console.log(data.cards[1]);
        let player1Val = data.cards[0];
        let player2Val = data.cards[1];
        compareHands(player1Val, player2Val);
        setPlayer(data);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function setPlayer(data){
  const remaining =+ localStorage.getItem('remaining_cards') - 2;
  if(remaining <= 0){
    getADeck();
    document.querySelector('div').innerText = 'Starting a new deck';
  }
  localStorage.setItem('remaining_cards',remaining);
  document.querySelector('#player1').src=data.cards[0].image;
  document.querySelector('#player2').src=data.cards[1].image;
  document.querySelector('div').innerText = `You have ${remaining} cards`;
}

function compareHands(player1, player2){
  player1Val = convertToNum(player1.value);
  player2Val = convertToNum(player2.value);
  if(player1Val > player2Val){
    document.querySelector('h3').innerText = `Player1 Wins`;
  }
  else if(player1Val === player2Val){
    document.querySelector('h3').innerText = 'It is a draw';
    drawHandling(player1, player2);
  }
  else{
    document.querySelector('h3').innerText = 'Player2 Wins';
  }
}

function convertToNum(val) {
  if(val === 'ACE'){
    return 14;
  }
  else if(val === 'KING'){
    return 13;
  }
  else if(val === 'QUEEN'){
    return 12; 
  }
  else if(val === 'JACK'){
    return 11; 
  }
  else{
    return Number(val);
  }
}

function convertSuitToNum(val){
  if(val === 'SPADES'){
    return 5;
  }
  else if(val === 'DIAMONDS'){
    return 4;
  }
  else if(val === 'CLUBS'){
    return 3;
  }
  else if(val === 'HEARTS'){
    return 2;
  }
  else return 1;
}

function drawHandling(player1, player2){
  player1 = convertSuitToNum(player1.suit);
  player2 = convertSuitToNum(player2.suit);
  if(player1 === player2){
    document.querySelector('h3').innerText = 'Indeed it is a Draw';
  }
  else if(player1 > player2){
    document.querySelector('h3').innerText = 'After all, Player 1 WINS';
  }
  else{
    document.querySelector('h3').innerText = 'After all, Player 2 WINS';
  }
}