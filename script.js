var i = 0;
var headerEl = document.querySelector('header');
var images = [];
var time = 7000;
images[0] = 'dicebk';
images[1] = 'joybk';
images[2] = 'f1bk';

function changeImg() {
    headerEl.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.664),rgb(0, 0, 0)), url(${images[i]}.jpg)`;
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.showModal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {

        modal.classList.remove('hidden');


    })
}
const closeModal = function () {
    modal.classList.add('hidden');

}
btnCloseModal.addEventListener('click', closeModal);


document.addEventListener('keydown', function (event) {
    if (event.key == "Escape") {
        if (!modal.classList.contains('hidden')
        )
            closeModal();
    }

})

const ticEl = document.querySelectorAll('.tic');
const guessEl = document.querySelectorAll('.guess');
const diceEl = document.querySelectorAll('.dice');
const modelheading = document.getElementById('namePreview');
const modelText = document.getElementById('instruction');
const modelLink = document.getElementById('play');
for (let i = 0; i < ticEl.length; i++) {
ticEl[i].addEventListener('click',function(){
   modelheading.textContent = "Tic Tac Toe ❌⭕  "
   modelText.innerHTML= "1. The game is played on a grid that's 3 squares by 3 squares <br><br> 2. You and Your friend can choose between X and O. Players take turns putting their marks in empty squares. <br><br> 3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. <br><br> 4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."
   modelLink.href = "tic.html"
    
})
}
for (let i = 0; i < guessEl.length; i++) {
guessEl[i].addEventListener('click',function(){
    modelheading.textContent = "Guess My Number 🤔  "
    modelText.innerHTML= "1. A Random number will be generated. Player is required to guess it in lowest possible trial <br><br> 2. You will be given Score of '20'. With each wrong guess -1 will be deducted. <br><br> 3. <b>'Too High'</b> will be shown if your number is higher than the generated number and <b>'Too Low'</b> will be shown if your number is lower than the generated number. <br><br> 4. High Score of 20 will be considered as SuperWin."
    modelLink.href = "guess.html"
     
 })
}
for (let i = 0; i < diceEl.length; i++) {
 diceEl[i].addEventListener('click',function(){
    modelheading.textContent = "Pig (Roll the Dice) 🎲  "
    modelText.innerHTML= "1. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to 'hold'.<br><br> 2. If the player rolls a 1, they score nothing and it becomes the next player's turn. <br><br> 3. If the player rolls any other number, it is added to their turn total and the player's turn continues. <br><br> 4. If a player chooses to 'hold', their turn total is added to their score, and it becomes the next player's turn. <br><br> 5.The Player having score of 50 or more wins."
    modelLink.href = "pig.html"
     
 })
}
 

function sendMessage(){
    document.getElementById('name').value ="";
    document.getElementById('email').value ="";
    document.getElementById('number').value ="";
    document.getElementById('Message').value="";
    alert("✔ Your Message has been Successfully Sent")
    
}



