// /*
// QUESTION ONE
// */

// //  Create a variable called 'hour' and save the current hour of the day (Using the 24hour format)
// // Save your name in name variable and add a greeting based on the time of the day
// let hour = new Date().getHours();
// let myName = 'Udoh Ukaraobong Levi';
// if (6 <= hour && hour <= 12){
//     console.log(`Good Morning ${myName}!`);
// } else if (13<= hour && hour <= 17){
//     console.log(`Good Afternoon ${myName}!`);
// } else{
//     console.log(`Good Evening ${myName}!`);
// }

// // ====================================================================================================
// // QUESTION 2
// //Imagine an amusement park that has a discount for children (6 years and younger) and seniors (65 years and older).
// let age = 5;
// let isHoliday = false
// if ((age <= 6 || age >= 65) && isHoliday){
//     console.log('You get a discount!');
// } else{
//     console.log('No discount!');
// }

// // =======================================================================================================
// // QUESTION 3
// let num = .4
// let result
// if (num <= .5){
//     // console.log('Head');
//     result = 'Head';
// } else{
//     // console.log('Tail');
//     result = 'Tail';
// }
// let guess = prompt("What's your guess? 'Head' or 'Tail'?");
// // if (guess == result){
// //     alert('You Win');
// // } else{
// //     alert('You Lose')
// // }
// alert(`${(guess == result) ? 'You Win' : 'You Lose'}`);

let cartQuantity = 0;
const showQuantity = document.querySelector('button');
const addToCart = document.querySelectorAll('button')[1];
const addTwo = document.querySelectorAll('button')[2];
const addThree = document.querySelectorAll('button')[3];
const subtractTwo = document.querySelectorAll('button')[4];
const subtractThree = document.querySelectorAll('button')[5];
const resetCart = document.querySelectorAll('button')[6];

showQuantity.addEventListener('click', () => {
    console.log(`Cart Quantity: ${cartQuantity}`);
});
addToCart.addEventListener('click', () => {
    if (cartQuantity > 10){
        alert('Cart is full')
    } else{
        cartQuantity++;
        console.log(`cartQuantity: ${cartQuantity}`);
    }
});

addTwo.addEventListener('click', () => {
    if (cartQuantity > 10){
        alert('Cart is full')
    } else{
        cartQuantity+=2;
        console.log(`cartQuantity: ${cartQuantity}`);
    }
});

addThree.addEventListener('click', () => {
    if (cartQuantity > 10){
        alert('Cart is full')
    } else{
        cartQuantity+=3;
        console.log(`cartQuantity: ${cartQuantity}`);
    }
});
subtractTwo.addEventListener('click', () => {
    if (cartQuantity <= 0){
        alert('Not enough items in the cart');
    }else{
        cartQuantity-=2;
        console.log(`Cart Quantity: ${cartQuantity}`)
    }
})
subtractThree.addEventListener('click', () => {
    if (cartQuantity <= 0){
        alert('Not enough items in the cart');
    }else{
        cartQuantity-=3;
        console.log(`Cart Quantity: ${cartQuantity}`)
    }
})

resetCart.addEventListener('click', () => {
    cartQuantity = 0;
    console.log(`Cart Quantity: ${cartQuantity}`);
});