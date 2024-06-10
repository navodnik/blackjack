
let startGame = document.getElementById("start-game");
let playerCardsRender = document.getElementById("player-cards-render");
let dealerCardsRender = document.getElementById("dealer-cards-render");
let playerSumRender = document.getElementById("player-sum-render");
let dealerSumRender = document.getElementById("dealer-sum-render");
let hitBtn = document.getElementById("hit-btn");
let standBtn = document.getElementById("stand-btn");
let naratorRender = document.getElementById("narator-render");

let playerCards = [];
let dealerCards = [];

let playerCardsSum = 0;
let dealerCardsSum = 0;

let isAlive = true;
let isBlackjack = false;
let gameOver = false;

let newCard = () => {
    let random = Math.floor(Math.random() * 13) + 1;

    if(random > 10)
    {
        return 10;
    }

    else {
        return random;
    }
}

let startingCards = () => {
    playerCards = [newCard(), newCard()];
    dealerCards = [newCard()];
}

let renderPlayerCards = () => {
    for(let i = 0; i < playerCards.length; i++)
    {   
        playerCardsRender.innerHTML += playerCards[i] + " ";
    }
}

let renderDealerCards = () => {
    for(let i = 0; i  < dealerCards.length; i++)
    {   
        dealerCardsRender.innerHTML += dealerCards[i] + " ";
    }
}

let renderPlayerSum = () => {   
    playerCardsSum = 0;

    for(let i = 0; i < playerCards.length; i++)
    {
        playerCardsSum += playerCards[i];
    }

    playerSumRender.innerHTML = playerCardsSum;
}

let renderDealerSum = () => {
    dealerCardsSum = 0;

    for(let i = 0; i < dealerCards.length; i++)
    {
        dealerCardsSum += dealerCards[i];
    }

    dealerSumRender.innerHTML = dealerCardsSum;
}

let checkWinner = () => {
    if(playerCardsSum > 21)
        {
            return "You lose!"
            isAlive = false;
        } else if (dealerCardsSum > 21 || playerCardsSum > dealerCardsSum) {
            if(playerCardsSum === 21)
            {
                return "You got blackjack!"
            } else {
                return "You won!"
            }
        } else {
            return "You lose!"
            isAlive = false;
    }
}

let renderEverything = () => {
    renderPlayerCards();
    renderDealerCards();
    renderPlayerSum();
    renderDealerSum();
}

let clearCardsRender = () => {
    dealerCardsRender.innerHTML = "";
    playerCardsRender.innerHTML = "";
}

hitBtn.addEventListener("click", () => {
    if(isAlive === true)
    {
        playerCards.push(newCard());

        clearCardsRender();
        renderEverything();
    }
})

standBtn.addEventListener("click", () => {
    if(isAlive === true)
    {
        while(dealerCardsSum <= 17)
        {   
            clearCardsRender();
            dealerCards.push(newCard());
            renderEverything();
        }

        naratorRender.innerHTML = checkWinner();
    }
})

startGame.addEventListener("click", () => {
    startingCards();
    renderEverything();

    naratorRender.innerHTML = "";
    startGame.classList.add("hide");
})

let endGame = () => {
    startGame.classList.remove("hide");
    hitBtn.classList.add("end");
    standBtn.classList.add("end");
}