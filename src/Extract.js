const iElements = document.querySelectorAll("code > div > span > i");

let extractedCharacters = "";

iElements.forEach((iElement) => {
  const charValue = iElement.getAttribute("value");
  extractedCharacters += charValue;
});

console.log(extractedCharacters);

//https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e6b

//Ran the above code on the console of https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge
