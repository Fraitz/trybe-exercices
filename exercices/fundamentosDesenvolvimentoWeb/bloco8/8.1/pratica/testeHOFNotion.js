const action = (numberAction) => {
  if (numberAction % 2 === 0) {
    console.log(numberAction, 'is even');
  }
};

const repeat = (numberRepeat) => {
  for (let count = 0; count <= numberRepeat; count += 1) {
// função usada como parâmetro na função repeat
    action(count)
  }
};