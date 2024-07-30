let questionOne = document.getElementById("q1");
let questionTwo = document.getElementById("q2");
let questionThree = document.getElementById("q3");



/*1*/ function conversionMlToCups(cups) {
    C = cups * 250;
    return C;
}

/*2*/function determineCups() 
{
    let cupsAmount = Number(prompt("Enter amount of cups:"));
    let trueValue1 = conversionMlToCups(cupsAmount);
    alert(cupsAmount + " cups is " + trueValue1 + " mL.");
    questionOne.textContent = cupsAmount + " cups is " + trueValue1 + " mL."
};






/*3*/function tipConversion(T)
{
    tipDecimal = T / 100;
    mealTip = tipDecimal * mealPrice
    totalValue = (mealTip) + (mealPrice)
    return totalValue;
}

/*4*/function calculateTip() 
{
    mealPrice = Number(prompt("How much is your meal?"));
    let tipAmount = Number(prompt("How much would you like to tip as a percent?"));
    let totalAmount = tipConversion(tipAmount);
    message = "Your meal costs " + mealPrice + "$ and you tipped " + tipAmount + "$. So you are paying " + totalAmount + "$ all together."
    alert(message)
    questionTwo.textContent = message



}






/*5*/function lastThreeOfLastName(lastName) 
{
    let lastThree = "";
    lastThree = lastThree + lastName.charAt(lastName.length - 3);
    lastThree = lastThree + lastName.charAt(lastName.length - 2);
    lastThree = lastThree + lastName.charAt(lastName.length - 1);

    lastThree = lastThree.toUpperCase()
    return lastThree

}

/*6*/function last2Numbers(firstName, lastName) 
{
    sum = Number(firstName.length) + Number(lastName.length)
    return sum
}

/*7*/function formString() 
{
    firstName = prompt("Enter your first name:")
    lastName = prompt("Enter your last name:")
    firstThree = firstName.substring(0, 3);
    firstThree = firstThree.toLowerCase()
    finalThree = lastThreeOfLastName(lastName)
    lastTwoNum = last2Numbers(firstName, lastName)
    let userName = firstThree + finalThree + lastTwoNum
    alert(userName)
    questionThree.textContent = userName
}






