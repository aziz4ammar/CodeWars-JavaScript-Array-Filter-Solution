function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function(number) {
      return number % 2 === 0;
    });
  }