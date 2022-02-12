var readlineSync = require("readline-sync");

var questions = [{
  question: "\n1.Whose apartment did Ross sublet?\nA.Gunther   B.Ugly Naked Guy   C.Mr. Treeger   D.Co-worker\nAnswer : ",
  answer: "B"},
{
  question: "\n2.What was Joey's favorite sandwich?\nA.Salami   B.Ham & Cheese   C.Grilled Cheese   D.Meatball Sub\nAnswer : ",
  answer: "D"},
{
  question: "\n3.What was the wedding gift that made Rachel walk out on Barry?\nA.Gravy Boat   B.Coffee Pot   C.Linens   D.A Ladle\nAnswer : ",
  answer: "A"},
{
  question: "\n4.How many pages long was Rachel's letter to Ross?\nA.8   B.15   C.16   D.18\nAnswer : ",
  answer: "D"},
{
  question: "\n5.What did Monica and Chandler name their twins?\nA.Jack & Erica   B.Jack & Judy   C.Chandler & Judy   D.Chandler & Erica\nAnswer : ",
  answer: "A"},
{
  question: "\n6.Who was the last friend to find out about Monica and Chandler?\nA.Rachel   B.Phoebe   C.Ross   D.Joey\nAnswer : ",
  answer: "C"},
{
  question: "\n7.What fake name does Joey go by?\nA.Ted Phalange   B.John Tribbiani   C.Ken Adams   D.Sam Adams\nAnswer : ",
  answer: "C"},
{
  question: "\n8.What name does Rachel’s sister Amy keep mistakenly calling Emma?\nA.Ellie   B.Ella   C.Emmy   D.Erica\nAnswer : ",
  answer: "B"},
{
  question: "\n9.Where does Chandler tell Janice he is moving?\nA.Russia   B.Yukon   C.Yemen   D.Switzerlan\nAnswer : ",
  answer: "C"},
{
  question: "\n10.What’s the name of the grumpy man who lived below Monica’s apartment?\nA.Mr.Heckler   B.Mr.Fickles   C.Mr.Finches   D.Mr.Heckles\nAnswer : ",
  answer: "D"},
];

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right!");
    score++;
  } 
  else {
    console.log("You are Wrong!");
  }
}

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("How you Doin' ;) "+ userName + "\nLet's see if you possess the Unagi!\nNOTE: Only Enter the Option Code");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("\nWe finally come to the end of this Gameshow...\nAnd your final Score is : ", score + "/10");
  if(score === 10)
    console.log("\nWOW! Could you beee a Bigger fan of Friends! Congratulations!!!");
  else if(score > 6)
    console.log("\nLooks like you have watched the show a couple of times! You are a True Friend Fan Congratulations!");
  else
    console.log("\nI'm sorry but you are not a Friend Fan yet:(\nTry again soon!");
}

welcome();
game();
showScores();