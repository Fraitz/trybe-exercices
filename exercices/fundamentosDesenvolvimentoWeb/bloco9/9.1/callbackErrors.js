const printErrorMessage = (error) => console.log(`Error getting car: ${error}`);

const printSucessMessage = (carro) => console.log(`Returned car is ${carro.brand} ${carro.model}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getCar = (onSuccess, onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const car = {
        brand: "BMW",
        model: "M5",
      };
      onSuccess(car);
    }
    else {
      const errorMessage = "Car could not be found";
      onError(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned car is BMW M5" no sucesso, ou "Error getting car: Car could not be found" em falha
getCar(printSucessMessage, printErrorMessage);