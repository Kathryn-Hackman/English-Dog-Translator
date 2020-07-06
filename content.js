var originalWord = [
  "heck",
  "dog",
  "pup",
  "puppy",
  "bark",
  "woof",
  "angry",
  "roof",
  "good",
  "yes",
  "best",
  "corgi",
  "samayed",
  "terrier",
  "split",
  "fall",
  "little puppy",
  "hello",
  "scary",
  "friend",
  "human",
  "snake",
  "shiba",
  "small",
  "tounge",
  "paws",
  "big dog",
  "fluffy dog",
  "touch",
  "thick",
  "boy",
  "bad",
  "sleep",
  "nap",
  "hug",
  "run",
  "upset",
  "update",
  "protect",
  "attack",
  "lick"
];
var newWord = [
  "h*ck",
  "doggo",
  "pupper",
  "pupper",
  "bork",
  "WOOF",
  "A N G E R Y",
  "boof",
  "GUD",
  "YIS",
  "goodest",
  "loaf",
  "cloud",
  "Rhett",
  "sploot",
  "roll",
  "pupperino",
  "HENLO",
  "S C A R E Y",
  "fren",
  "HOOMAN",
  "snek",
  "doge",
  "smol",
  "blep",
  "pawsicles",
  "woofer",
  "floofer",
  "boop",
  "thicc",
  "boi",
  "good",
  "slep",
  "snoozle",
  "snug",
  "zoomie",
  "pupset",
  "pupdate",
  "protecc",
  "atacc",
  "mlem"
];
for (var z = 0; z < originalWord.length; z++) {
  var elements = document.getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(
          new RegExp(originalWord[z], "gi"),
          newWord[z]
        );
        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}
