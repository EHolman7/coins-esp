console.log("here");
//Function to count coins 
function coinCounter(input) { 
 
 
    //Object to hold coins 
    var changePurse = {}; 
 
    // Convert amount to whole number 
    input = input * 100; 
 
 
    // Determine remainder after quarters. 
    var balanceLessQuarters = input % 25; 
    // subtract that remainder and divide that number by quarters. add the number of quarters to the object (coinPurse) 
    changePurse.quarters = (input - balanceLessQuarters) / 25; 
 
    var balanceLessDimes = balanceLessQuarters % 10; 
    changePurse.dimes = (balanceLessQuarters - balanceLessDimes) / 10; 
 
    var balanceLessNickels = balanceLessDimes % 5 
    changePurse.nickels = (balanceLessDimes - balanceLessNickels) / 5; 
 
 
    //the remainder equals the amount of pennies 
    changePurse.pennies = balanceLessNickels; 
 
 
    //Call function to the completed object (changePurse) 
    return changePurse; 
} 
 
 
var coins = coinCounter(1.67); 
console.log(coins);