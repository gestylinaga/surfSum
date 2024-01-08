// 🌊 surfSum
console.log("Get pitted");
console.log("...so pitted!");

let latin = false;
const display = document.getElementById("display");

function sentenceBuilder() {
  let wordCount = Math.floor(Math.random() * 5) + 7;
  let sentence = [];

  // Pushing first word (Capitalized; always a surf word)
  let word = surfWords();
  sentence.push(word);

  // Pushing lowercase words for remaining word count
  for (let i = 1; i <= wordCount; i++) {
    // Chance to use latin word if latin is chosen
    if (latin && Math.floor(Math.random() * 3) == 1) {
      word = latinWords();
    } else {
      word = surfWords();
    }
    // Random chance to insert commas, except for last word
    if (i % 3 == 0 && i != wordCount) {
      if (Math.floor(Math.random() * 4) == 1) {
        sentence.push(word.toLowerCase() + ", ");
      }
    } else {
      sentence.push(word.toLowerCase());
    }
  }
  return sentence.join(" ") + ". ";
}

function paragraphBuilder() {
  let sentenceCount = Math.floor(Math.random() * 6) + 7;
  let paragraph = [];

  for (let i = 1; i <= sentenceCount; i++) {
    let sentence = sentenceBuilder();
    paragraph.push(sentence);
  }
  return paragraph.join("");
}

function populatePage() {
  const pInput = document.getElementById("paragraph-num").value;
  p = parseInt(pInput);
  // Validates that p input is a number, else defaults to 1
  if (isNaN(p)) {
    p = 1;
  } 

  const radios = document.getElementsByName("type");
  // else in use here to reset bool since page doesn't refresh on button click
  if (radios[1].checked) {
    latin = true;
  } else {
    latin = false;
  }

  const checkbox = document.getElementById("checkbox");

  // Populate display with number of paragraphs
  for (let i = 1; i <= p; i++) {
    let text = paragraphBuilder();

    // Start first paragraph with "Shaka Brah" if "sb" is checked
    if (checkbox.checked && i === 1) {
      text = text.replace(/^/, "Shaka Brah! ");
    }

    // Creating separate p elements for each paragraph
    let rawParagraph = document.createTextNode(text);
    let paragraph = document.createElement("p");
    paragraph.appendChild(rawParagraph);

    // Appending paragraphs to display with a line break
    display.appendChild(paragraph);
    let linebreak = document.createElement("br");
    display.appendChild(linebreak);
  }
}

function handleClick() {
  // Clear display every button click
  while (display.firstChild) {
    display.removeChild(display.lastChild);
  }

  populatePage();

  // Scroll to top after button click
  window.scrollTo(0,0)
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
  handleClick();
})

