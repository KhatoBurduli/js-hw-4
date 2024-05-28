// Exercise 1
console.log("Exercise 1");

function customReplace(string, valueToReplace, valueToReplaceWith) {
  return string.split(valueToReplace).join(valueToReplaceWith);
}

let originalString = "Hello stranger";
let modifiedString = customReplace(originalString, "stranger", "friend");
console.log(modifiedString);

// Exercise 2
console.log("Exercise 2");

function toUpperCaseSentence(sentence) {
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    let upperChar = sentence[i].toUpperCase();
    result += upperChar;
  }
  return result;
}

let originalSentence = "Hello Friend";
let upperCaseSentence = toUpperCaseSentence(originalSentence);
console.log(upperCaseSentence);

// Exercise 3
console.log("Exercise 3");

function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }
  
  let users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 }
  ];
  
  let sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);
  