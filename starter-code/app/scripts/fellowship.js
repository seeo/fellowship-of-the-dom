console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
console.log(lands);

// Part 1


function makeMiddleEarth() {
  // 1.1 create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.id = "middle-earth";
  console.log(middleEarth);
  document.body.appendChild(middleEarth);
  // 1.2 add each land as an article tag
  // 1.3 inside each article tag include an h1 with the name of the land
  // 1.4 append middle-earth to your document body
  for(var i=0; i<lands.length;i++){
    var article= document.createElement("article");
    var h1 = document.createElement("h1");
    h1.innerText = lands[i];
    article.appendChild(h1);
    middleEarth.appendChild(article);
  }
}
//console.log("end of makeMiddleEarth function");
makeMiddleEarth();
//console.log("call makeMiddleEarth function");

// Part 2
function makeHobbits() {
  // 2.1 display an unordered list of hobbits in the shire (the article tag)
  var theShire = document.querySelectorAll('article')[0];
  console.log(theShire);
  var ulShire = document.createElement("ul");
  theShire.appendChild(ulShire);

  for (i=0; i<hobbits.length; i++){
    var li = document.createElement("li");
// give each hobbit a class of hobbit
    li.class = "hobbit";
    li.innerText = hobbits[i];
    ulShire.appendChild(li);
  }

}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
