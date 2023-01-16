// Code your solutions in this file
let messages = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
       messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--);
    }
}