// 🌊 surfSum

async function wordLists() {
  const url = "./wordLists.json";
  const request = new Request(url);

  const response = await fetch(request);
  const wordLists = await response.json();

  const surfList = wordLists["surf"];
  const latinList = wordLists["latin"];

  let surfWord = surfList[Math.floor(Math.random() * surfList.length)]
  let latinWord = latinList[Math.floor(Math.random() * latinList.length)]

  console.log(surfWord);
  console.log(latinWord);
}

wordLists();
