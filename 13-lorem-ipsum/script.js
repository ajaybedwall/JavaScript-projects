const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function generateLoremIpsum(numParagraphs) {
  let result = "";
  for (let i = 0; i < numParagraphs; i++) {
    result += `<p>${loremIpsumText}</p>`;
  }
  return result;
}

const generateButton = document.getElementById("generate");
const outputDiv = document.getElementById("output");
const numParagraphsInput = document.getElementById("paragraphs");

generateButton.addEventListener("click", () => {
  const numParagraphs = parseInt(numParagraphsInput.value);
  const loremIpsumText = generateLoremIpsum(numParagraphs);
  outputDiv.innerHTML = loremIpsumText;
});