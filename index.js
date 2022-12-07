// Code your solutions in this file

function writeCards(thank, event) {
    const finishedCards = [];
    for(let i = 0; i < thank.length; i++) {
       finishedCards.push(`Thank you, ${thank[i]}, for the wonderful ${event} gift!`);
    }
    return finishedCards;
}


function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
    return countDown;
}
