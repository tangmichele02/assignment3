// api code source: https://editor.p5js.org/codingtrain/sketches/J_ZbkTvj2
let temperature = 0;
let weather = "";
let json;
let year;
let pop;

let title = "Clark V 427";
poem1 =
"My room sits near the corner.\nThe corner where the window sees the sidewalk.\nThe sidewalk is always busy with chatter.\nLast night's party meant gossip and jokes about\nthe weather (raining in Claremont),\nthe people (the enemies),\ntomorrow's breakfast (eggs and toast).";
let poem2 =
  "After the party\nwhen night becomes day\nI wonder,\nwhat have these windows seen before me?\nWhose name came up in firey gossip\nHow was the weather?\nHow did they like their eggs?";
let poem3 =
  "This place started as dirt.\nThen dirt became paper,\nbecame cement,\nbecame walls,\nfilled with echos,\nfor 93 years.";
let poem4 = "";
let poem5 =
  "These archways covered millions of steps to and from\nDaily schedules filled with class, dining halls, laughter!\nOld and new seem more similar than different:\nThe canon is the same (sadly.).\nThe eggs taste the same (sadly?).";
let poem6 = 
  "In a courtyard where many have gathered,\nwords have bounced off lines of ivy,\ntrees have reached heights unseen before.\nI try to trace the footsteps of those before me.";
let poem7 =
  "As I await my final exit from these halls\nand usher in the 94th,\nI wonder what these walls remember of me.\nBut too soon, it's onto the next.\n\nHow will the they change the surroundings?\nWill they know me as John Doe?\nI leave a gift of dust\nto gather and settle in\nfor future feet to tread over.\n";

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
let obs11 = "Me and my suitemates!";

let mainWidth;
let mainHeight = 2000;

function setup() {
  createCanvas(windowWidth, mainHeight*1.25);
  img1 = loadImage("assets/0-frontlayeredcomp.png");
  img2 = loadImage("assets/1-archlayeredcomp.png");
  img3 = loadImage("assets/3-courtyardlayeredcomp.png");
  img4 = loadImage("assets/6-aerialcropcomp.jpg");
  img5 = loadImage("assets/roommates.jpg");

  // temperature = Math.round(json.main.temp);
  year = json["data"]["0"]["Year"];
  pop = json["data"]["0"]["Population"];

}

function draw() {
  background("#f0e4bd");

  fill("black");
  rect(0, 0, windowWidth, img4.height / 2.5);

  img4.resize(0, mainHeight);
  image(
    img4,
    (windowWidth - img4.width / 2.5) / 2,
    0,
    img4.width / 2.5,
    img4.height / 2.5
  );

  // Box for title
  fill(0, 0, 0, 200);
  rect(windowWidth/2.5 + 55, 15,130,30);

  // Box for first stanza
  rect(190, 50, 525, 235);

  // Box for second stanza
  rect(windowWidth - 600, 290, 420, 275);

  // Box for third stanza
  rect(190, 470, 275, 210);

  textFont("Forum");
  textSize(26);
  fill("white");

  text(title, windowWidth/2.5 + 120, 40);

  // First stanza
  textAlign(LEFT);

  text(poem1, 200, 75);

  // Second stanza
  textAlign(RIGHT);
  text(poem2, windowWidth - 600, 300, 400);

  // Third stanza
  textAlign(LEFT);
  text(poem3, 200, 500);

  // Collages
  image(img1, 0, img4.height / 2.5, img1.width / 4, img1.height / 4);
  image(
    img2,
    windowWidth - img2.width / 5,
    img4.height / 2.5 + 400,
    img2.width / 8,
    img2.height / 8
  );
  image(
    img3,
    0,
    mainHeight - img3.height / 4,
    img3.width / 4,
    img3.height / 4
  );
  image(
    img5,
    windowWidth - img5.width/4,
    mainHeight * 1.25 - img5.height / 4,
    img5.width / 4,
    img5.height / 4
  );

  // Box for fourth stanza 
  fill(255, 255, 255, 150);
  noStroke();
  rect(windowWidth - 500, (img4.height / 2.5 + 20), 475, 375);
  
  // Fourth stanza
  fill("black");
  textAlign(RIGHT);
  poem4 =   "Our walls do not change,\ntheir atoms remain the same\nBut every year, a new setting is created.\n1942: John Doe and a Casablanca poster\n1966: Nancy Sinatra on the Radio\n1970: Apollo 13\n2002: Gilmore Girls filmed on campus!\n2010: cellphones start to ring\n" + year + ": " + "population " + pop + "\n2024: an old whiteboard marked Oct 2023\n2053: To be determined?";
  text(poem4, windowWidth - 50, img4.height / 2.5 + 50);

  // Box for fifth stanza 
  fill(255, 255, 255, 150);
  rect(40, (img4.height / 2.5 + 515), 580, 170);
  
  // Fifth stanza
  fill("black");
  textAlign(LEFT);
  text(poem5, 50, img4.height / 2.5 + 540);

  // Box for sixth stanza 
  fill(255, 255, 255, 150);
  rect(windowWidth - 540, img4.height / 2.5 + 960, 500, 150);

  // Sixth stanza
  fill("black");
  textAlign(RIGHT);
  text(poem6, windowWidth - 50, img4.height / 2.5 + 990);
    
  // Box for seventh stanza 
  fill(255, 255, 255, 150);
  rect(40, img4.height / 2.5 + 1270, 480, 345);

  // Seventh stanza
  fill("black");
  textAlign(LEFT);
  text(poem7, 50, img4.height / 2.5 + 1300);

  // Observations
  fill("white");
  textAlign(CENTER);
  textSize(16);

  text(obs1, 230, img4.height / 2.5 + 200, 90);
  text(obs2, 170, img4.height / 2.5 + 375, 90);
  text(obs3, 540, img4.height / 2.5 + 170, 90);
  text(obs4, 670, img4.height / 2.5 + 160, 90);
  text(obs5, 600, img4.height / 2.5 + 230, 90);
  text(obs6, 950, img4.height / 2.5 + 770, 90);
  text(obs7, 960, img4.height / 2.5 + 650, 90);
  text(obs8, 570, img4.height / 2.5 + 950, 90);
  text(obs9, 320, img4.height / 2.5 + 940, 90);
  text(obs10, 170, img4.height / 2.5 + 900, 90);
  text(obs11, 850, img4.height / 2.5 + 1400, 90);

}

function preload() {
  let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest";
  json = loadJSON(url);
}