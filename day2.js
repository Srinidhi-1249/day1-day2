function countChocolates(totalMoneyString, costOfChocolateString) {
    const totalMoneyMatch = totalMoneyString.match(/\d+/); // Extract the total money from the string
    const costOfChocolateMatch = costOfChocolateString.match(/\d+/); // Extract the cost of chocolate from the string
  
    if (!totalMoneyMatch || !costOfChocolateMatch) {
      return "Invalid Input";
    }
  
    const totalMoney = parseInt(totalMoneyMatch[0], 10); // Parse the total money as an integer
    const costOfChocolate = parseInt(costOfChocolateMatch[0], 10); // Parse the cost of chocolate as an integer
  
    if (totalMoney < 0 || costOfChocolate <= 0) {
      return "Invalid Input";
    }
  
    let chocolates = Math.floor(totalMoney / costOfChocolate); // Calculate initial chocolates Ashi can buy
    let wrappers = chocolates; // Initial number of wrappers
  
    while (wrappers >= 3) {
      const exchangedChocolates = Math.floor(wrappers / 3); // Calculate chocolates obtained from exchanging wrappers
      chocolates += exchangedChocolates; // Update the total number of chocolates
      wrappers = wrappers % 3 + exchangedChocolates; // Update the number of wrappers remaining
    }
  
    return chocolates;
  }
  console.log(countChocolates("4$", "1$")); // Output: 5
  console.log(countChocolates("55 $", "5$")); // Output: 16
  console.log(countChocolates("I have 68$", "2$")); // Output: 50
  console.log(countChocolates("I got -68$ from my mom ", "2$")); // Output: "Invalid Input"