// JavaScript part
const buttons = document.querySelectorAll('button');
const button9a = buttons[0];
const button9b = buttons[1];
const headsButton = document.querySelector('button:nth-of-type(1)'); const tailsButton = document.querySelector('button:nth-of-type(2)'); const resultParagraph = document.querySelector('p');
const nameInput = document.getElementById('nameInput'); 
const submitBtn = document.getElementById('submitBtn'); 
const displayText = document.getElementById('displayText'); 


function displayMessage() { 
    const text = nameInput.value; 
    displayText.textContent = `Your name is: ${text}`; 
} 
submitBtn.addEventListener('click', displayMessage); 
nameInput.addEventListener('keydown', (event) => {
     if (event.key === 'Enter') { 
        displayMessage(); 
     } 
});
button9b.textContent = '9b done!';
headsButton.addEventListener('click', () => { resultParagraph.textContent = 'You chose: heads'; }); tailsButton.addEventListener('click', () => { resultParagraph.textContent = 'You chose: tails'; });