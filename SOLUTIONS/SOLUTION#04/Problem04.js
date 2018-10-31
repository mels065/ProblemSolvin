const findOperations = (value) => {
  if (value === 0){
    return ':(';
  }

  let operations = '+-*/';
 
  const valueGreaterThanFour = () => {
    let roundedQuotient = Math.floor(value / 4);
    let remainder = value % 4;

   	for (let i = 1; i < roundedQuotient; i ++){
      operations += operations;
    }

    return operations + operations.substring(0,remainder);
  }

  return value <= 4
    ? operations.substring(0, value)
    : valueGreaterThanFour();
};
