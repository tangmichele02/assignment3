// api code source: https://editor.p5js.org/codingtrain/sketches/J_ZbkTvj2
let temperature = 0;
let weather = "";
// let key = process.env.API_KEY;
let json;

let title = "Clark V 427";
let poem1 = "";
let poem2 = "After the party\nwhen night becomes day\nI wonder,\nwhat have these windows seen before me?\nWhose name came up in firey gossip\nHow was the weather?\nHow did they like their eggs?";
let poem3 = "Before, there was dirt.\nThen dirt became paper\nbecame cement\nbecame walls\nbecame a home.\nFor 93 years, a home.";
let poem4 = "Our walls do not change,\ntheir atoms remain the same\nBut every year, a new setting is created.\n1942: John Doe and a Casablanca poster\n1966: Nancy Sinatra on the Radio\n1970: Apollo 13\n2002: Gilmore Girls filmed on campus!\n2010: cellphones start to ring\n2024: an old whiteboard marked Oct 2023.\n2053: To be determined?";
let poem5 = "These archways covered millions of steps to and from\nDaily schedules filled with class, dining halls, laughter\nOld and new seem more similar than different.\nThe canon is the same (sadly.)\nThe eggs taste the same (sadly?)";
let poem6 = "As I await my final exit from these halls\nand usher in the 94th\nI wonder what of me stuck to these walls\nI leave a gift of dust\nto gather and settle in\nfor future feet that tread instead.\n"

let obs1 = "Do you think they did their reading?";
let obs2 = "Men's campus is so strange";
let obs3 = "This is the door to my room";
let obs4 = "My suitemate's neon light";
let obs5 = "This isn't here anymore";
let obs6 = "I bet they're discussing Plato";
let obs7 = "Quick, I'm running late!";
let obs8 = "This is the back door to my dorm";
let obs9 = "No electric scooters back then?";
let obs10 = "Beautiful fall leaves";

function setup() {
  createCanvas(windowWidth, windowHeight*3);
  img1 = loadImage('assets/0-frontlayered.png');
  img2 = loadImage('assets/1-archlayered.png');
  img3 = loadImage('assets/3-courtyardlayered.png');
  img4 = loadImage('assets/6-aerialcrop.jpg');

  temperature = Math.round(json.main.temp);
  weather = json.weather[0].description;
}

function draw() {
  background('#f0e4bd');
  
  fill('black');
  rect(0, 0, windowWidth, img4.height/5); 

  image(img4,((windowWidth - img4.width / 5)/2), 0, img4.width / 5, img4.height / 5);

  // Box for title
  fill(0,0,0,200);
  rect(windowWidth/2 - 45, 15,130,30);

  // Box for first stanza 
  rect(190,50,525,235);

  // Box for second stanza 
  rect(windowWidth - 600, 290, 420, 275);

  // Box for third stanza 
  rect(190, 470, 275, 210);

  textFont('Forum');
  textSize(26);
  fill('white');

  text(title, windowWidth/2 - 40, 40);

  // First stanza
  textAlign(LEFT);

  poem1 = "My room sits near the corner\nThe corner where the window sees the sidewalk.\nThe sidewalk is always busy with chatter.\nLast night's party meant gossip and jokes about\nthe weather (" + temperature +" degrees in Claremont)\nthe people (the enemies)\ntomorrow's breakfast (eggs and toast).";

  text(poem1, 200, 75);

  // Second stanza
  textAlign(RIGHT);
  text(poem2, windowWidth - 600 , 300, 400);

  // Third stanza
  textAlign(LEFT);
  text(poem3, 200, 500);

  // Collages 
  image(img1, 0, img4.height/5, img1.width / 4, img1.height / 4);
  image(img2, windowWidth - img2.width/5, img4.height/5 + 400, img2.width / 8, img2.height / 8);
  image(img3, 0, (windowHeight*3- img3.height / 4), img3.width / 4, img3.height / 4);

  // Fourth stanza
  fill('black');
  textAlign(RIGHT);
  text(poem4, windowWidth - 50, img4.height/5 + 50);

  // Fifth stanza
  textAlign(LEFT);
  text(poem5, 50, img4.height/5 + 520);

  // Sixth stanza 
  textAlign(RIGHT);
  text(poem6, windowWidth - 50, img4.height/5 + 975);

  // Observations 
  fill('white');
  textAlign(CENTER);
  textSize(10);

  text(obs1, 250, img4.height/5 + 215, 75);
  text(obs2, 190, img4.height/5 + 375, 75);
  text(obs3, 550, img4.height/5 + 190, 75);
  text(obs4, 670, img4.height/5 + 190, 75);
  text(obs5, 600, img4.height/5 + 250, 75);
  text(obs6, 930, img4.height/5 + 780, 75);
  text(obs7, 875, img4.height/5 + 650, 75);
  text(obs8, 570, img4.height/5 + 920, 75);
  text(obs9, 340, img4.height/5 + 920, 75);
  text(obs10, 200, img4.height/5 + 900, 75)

}

// function preload() {
//   let url = "https://api.openweathermap.org/data/2.5/weather?q=Claremont&units=imperial&APPID=" + key;
//   json = loadJSON(url);
// }