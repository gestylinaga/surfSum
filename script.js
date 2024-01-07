// 🌊 surfSum

let sb = false;
let latin = false;
let p = 3;

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
        sentence.push(word.toLowerCase() + ", ")
      }
    } else {
      sentence.push(word.toLowerCase())
    }
  }

  return sentence.join(" ") + ". "
}

function paragraphBuilder() {
  let sentenceCount = Math.floor(Math.random() * 6) + 7;
  let paragraph = [];

  for (let i = 1; i <= sentenceCount; i++) {
    let sentence = sentenceBuilder();
    paragraph.push(sentence);
  }

  return paragraph.join("")
}

function populatePage() {
  if (sb) {
    display.append("Shaka Brah! ")
  }

  for (let i = 1; i <= p; i++) {
    let paragraph = document.createElement("p")
    let rawParagraph = document.createTextNode(paragraphBuilder())
    paragraph.appendChild(rawParagraph)
    display.appendChild(paragraph)
    let linebreak = document.createElement("br")
    display.appendChild(linebreak)
  }
}


//populatePage()
