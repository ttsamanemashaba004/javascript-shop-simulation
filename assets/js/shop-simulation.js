let productNames = ['apples', 'bananas', 'oranges'];
let prices = [6, 9, 7];

let listOfQuantityAndProduct = [];

function displayProductAndPrice(){
    console.log('These are our products and their corresponding prices:');
    for(let i = 0; i < productNames.length; i++){
        console.log(`${i + 1}. ${productNames[i]} for R${prices[i]} each.`);
    }
}

function placeProductsInChart(){
    let quantityAndProductInput;
    let selectionDone;
    for(let y = 0; y < productNames.length; y++){
        if(selectionDone != 'yes'){
            quantityAndProductInput = prompt(`Please enter the product and quantity for the product, then press OK. (e.g 2 bananas, write positive quantity and write product exactly like on the list with place between the quantity and product.)`);
            listOfQuantityAndProduct.push(quantityAndProductInput);
            selectionDone = prompt('Are you done? yes/no.')
        }
        else{
            break;
        }
    }
    
}

function calculation() {
    let total = 0;
    let inputBudget = parseFloat(prompt('Please enter the amount you have.'));
    let n = 0;
    for (let x = 0; x < listOfQuantityAndProduct.length; x++) {
        let product = listOfQuantityAndProduct[x];
        let splitted = product.split(' ');
        let quantity = parseFloat(splitted[0]);
        let productName = splitted[1];
        
        let found = false; // Flag to check if the product is found

        for (let z = 0; z < productNames.length; z++) {
            if (productName === productNames[z]) {
                total += prices[z] * quantity;
                found = true;
                break;
            }
        }

        if (!found) {
            console.log('Sorry one of the products you entered is not on our list. Please try again.');
            n += 1;
            listOfQuantityAndProduct = [];
            break; // Exit the outer loop if a product is not found
        }
    }

    
    if(n > 0){
        console.log('----------------------------------------------------------');
        console.log('NEW ENTRY')
        n = 0;
        displayProductAndPrice();
        placeProductsInChart();
        calculation();
    }
    else{        
        let change = inputBudget - total;
        console.log('----------------------------------------------------------');
        console.log(`Your change is: R${change.toFixed(2)}`);
    }
    
}


displayProductAndPrice();
placeProductsInChart();
calculation();







