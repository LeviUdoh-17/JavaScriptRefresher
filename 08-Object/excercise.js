let basketball = {
    price: 2095
}
console.log(basketball.price);

basketball['price'] += 500;
console.log(basketball.price);

basketball['delivery-time'] = '3days';

function comparePrices(prod1, prod2){
    if (prod1.price < prod2.price){
        console.log(`${prod1.name} has a lesser price`);
    } else{
        console.log(`${prod2.name} has a lesser price`);

    }
}

let bev1 = {
    name: 'Milo',
    price: 150
}

let bev2 = {
    name: 'Cadbry 3-in-1',
    price: 200
}

comparePrices(bev1, bev2);

function isSameProduct(product1, product2) {
    return product1.name === product2.name && product1.price === product2.price;
}

const product1 = { name: 'Apple', price: 100 };
const product2 = { name: 'Apple', price: 100 };
const product3 = { name: 'Orange', price: 50 };

console.log(isSameProduct(product1, product2)); 
console.log(isSameProduct(product1, product3)); 

const greeting = 'Good Morning';
const lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting); 

function updateCalculation(newCalculation) {
    // Update the calculation logic here
    localStorage.setItem('calculation', newCalculation);
}

function loadCalculation() {
    const savedCalculation = localStorage.getItem('calculation') || '';
    return savedCalculation;
}


document.addEventListener('DOMContentLoaded', () => {
    const currentCalculation = loadCalculation();
});


