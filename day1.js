function numbersthenCharacters(arr) {
    const numbers = [];
    const characters = [];

    for (let subArr of arr) {
      const numbersSubArr = [];
      const charactersSubArr = [];

      for (let item of subArr) {
        if (typeof item === 'number') {
          numbersSubArr.push(item);
        } else {
          charactersSubArr.push(item);
        }
      }

      numbers.push(numbersSubArr.sort((a, b) => a - b));
      characters.push(charactersSubArr.sort());
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const mergedSubArr = numbers[i].concat(characters[i]);
      result.push(mergedSubArr);
    }

    return result;
  }
  const arr = [
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45],
    [67, "d"],
    ["f", "e", 78]
  ];

  const sortedArr = numbersthenCharacters(arr);
  console.log(sortedArr);