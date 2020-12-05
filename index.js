const readLineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
const bold = chalk.bold;

var score = 0;

log(bold.bgMagenta("Welcome to Avinesh's quiz on National Identity Elements\n"));

log(bold.bgMagenta("Rules"),"\n1) Quiz has 6 questions in total\n2) For every right answer you will get 5 points\n3) For every wrong answer 2.5 points will be deducted\n");

/**
 * Below is an array of objects
 * that contains players on the leaderboard
 */
const leaderBoard = [
  {
    name: "Priya",
    score: 30
  },
  {
    name: "Benhur",
    score: 30
  },
  {
    name: "Ajay",
    score: 30
  }
];

log(bold.bgMagenta("Leaderboard"));
log(chalk.keyword('cornflowerblue').bold.underline("Name\t\t\tScore"));

/**
 * Displaying players on leaderboard
 */
for(let i=0; i<leaderBoard.length; i++){
  log(chalk.keyword('cornflowerblue')(leaderBoard[i].name+"\t\t\t"+leaderBoard[i].score));
}

/**
 * Below is an array of objects
 * that contains question for the quiz
 */
const questions = [
  {
    question: `
    National bird of India
    a) Parrot
    b) Peacock
    c) Sparrow
    d) Nightingale\n`,
    answer: "b"
  },
  {
    question: `
    National flower of India
    a) Rose 
    b) Dahlia 
    c) Lotus 
    d) Sunflower\n`,
    answer: "c"
  },
  {
    question: `
    National tree of India
    a) Ashoka 
    b) Gulmohar 
    c) Peepal
    d) Banyan\n`,
    answer: "d"
  },
  {
    question: `
    National animal of India
    a) Lion 
    b) Tiger 
    c) Gaur
    d) Elephant\n`,
    answer: "b"
  },
  {
    question: `
    National sport of India
    a) Hockey 
    b) Cricket 
    c) Chess
    d) Kabaddi\n`,
    answer: "a"
  },
  {
    question: `
    National fruit of India
    a) Apple 
    b) Orange 
    c) Mango
    d) Banana\n`,
    answer: "c"
  }
];

/**
 * play() function matches the 
 * user answers with answers in the questions array
 */
function play(question, answer){
  var userAnswer = readLineSync.question(chalk.keyword('orange')(question));
  log("You answered:",userAnswer);

  if(userAnswer != ""){
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
    log(chalk.keyword('green').bold("right!"));
    score += 5;
    log("Your score:",score);
  }
    else{
    log(chalk.keyword('red').bold("wrong"));
    score -= 2.5;
    log("Your score:",score)
  }
  }
  else{
    log("Answer should not be blank");
    play(question,answer);
  }

}

for(let i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

/**
 * Checks whether a user as beaten
 * or equalized someone on the leaderboard
 */
for(let i=0; i<leaderBoard.length; i++){
  if(score==leaderBoard[i].score){
    log(chalk.keyword('cornflowerblue').bold("\nWow! You have equalized competitors on the leaderboard"));
    break;
  }
  else if(score<leaderBoard[leaderBoard.length-1].score){
    log(chalk.keyword('cornflowerblue').bold("\nTry again to equalize someone on the leaderboard"));
    break;
  }
}

log("\nThanks for taking the quiz");