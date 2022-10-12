var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("May i know your name ? ")
console.log("Welcome " + userName + " to this quiz")
console.log("lets test how much you know about politics");


console.log("")

function play(question, answer) {
  var userName = readlineSync.question(question);
  if (userName === answer) {
    console.log("you are correct");
    score = score + 1;
  }
  else {
    console.log("you are wrong");
  }
  console.log("Current score : " + score)
  console.log("---------")
}

play('Who is current Prime Minister of India ? ', 'Narendra modi');
play('Who is current finance minister of India ? ', 'Nirmala sitaraman');
play('Who is current defence minister of India ?', 'Rajnath singh');
play('Who is current health minister of India ? ', 'Mansukh');

var ques = "Who is current president of India ? ";
console.log(ques);

var answ = ["1.Droupadi Murmu ", "2.Ramnath Covind ", "3.Pranabh Mukherji"]
for (i = 0; i < answ.length; i++) {
  console.log(answ[i])
}


var userName = readlineSync.question("")
function letsPlay(ans) {

  if (userName === ans) {
    console.log("correct")
    score = score + 1;
  }
  else {
    console.log("wrong")
    console.log("")
    console.log("Current score : " + score)
    console.log("---------")
  }
}
letsPlay('Droupadi Murmu')
var ques = "when did the constitution came into force ? ";
console.log(ques);

var answ = ["1. 26th January, 1949 ", "2. 26th January, 1950 ", "3. 15th August, 1947"]
for (i = 0; i < answ.length; i++) {
  console.log(answ[i])
}


var userName = readlineSync.question("")
function letsPlay(ans) {

  if (userName === ans) {
    console.log("correct")
    score+=1;
  }
  else {
    console.log("wrong")
    console.log("")

  }
  console.log("Current score : " + score)
  console.log("---------")
}
letsPlay('26th January, 1950')
console.log("Final score : " + score)

