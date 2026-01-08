// Problem 8: Capitalize First Letter of Each Word

const input = "hello world";

function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizedArray = [];

  for (const word of words) {
    const newWord = word[0].toUpperCase() + word.slice(1);

    capitalizedArray.push(newWord);
  }

  return capitalizedArray.join(" ");
}

console.log(capitalizeWords(input));
