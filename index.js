var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question("May I know your Good name? \n");

console.log(chalk.bold.blue("Welcome to GK Quiz " + chalk.underline.bold.green(userName)) + "\n" + "Lets test your knowledge📘!!\n");

var score = 0;

const highScores = [
  {
    name: "Mragank",
    score: "16",
  },
  {
    name: "Nishtha",
    score: "13",
  },
];
//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer) {
    score = score + 2;
    console.log(chalk.green("Yay😉!! I Know this answer: ") + chalk.white(score));

  } else {
    score = score - 1;
    console.log(chalk.red("oops😕!! I need to study in detail about this topic : ") + chalk.white(score));
  }
}

var questions = [
  {
    question: "1. Grand Central Terminal, Park Avenue, New York is the world's\n\n A. largest railway station \n B. highest railway station \n C. longest railway station \n",
    answer: "A"
  },
  {
    question: "2. Entomology is the science that studies\n\n A. Behavior of human beings\n B. Insects \n C. The formation of rocks\n",
    answer: "B"
  },
  {
    question: "3. Garampani sanctuary is located at\n\n A. Junagarh, Gujarat\n B. Diphu, Assam\n C. Gangtok, Sikkim\n",
    answer: "B"
  },
  {
    question: "4. For which of the following disciplines is Nobel Prize awarded?\n\n A. Physics and Chemistry is\n B. Physiology or Medicine\n C. All of above\n",
    answer: "C"
  },
  {
    question: "5. Which of the following is a non metal that remains liquid at room temperature? \n\n A. Phosphorous\n B. Bromine\n C. Chlorine\n",
    answer: "B"
  },
  {
    question: "6. Which of the following metals forms an amalgam with other metals?\n\n A. Tin\n B. Mercury\n C. Lead\n",
    answer: "B"
  },
  {
    question: "7. Monazite is an ore of\n\n A. thorium\n B. titanium\n C. Iron\n",
    answer: "A"
  },
  {
    question: "8. Carbon, diamond and graphite are together called\n\n A. allotropes\n B. isomorphs\n C. isomers\n",
    answer: "A"
  }
];

function game() {
  for (i = 0; i < questions.length; i++) {
    var newQuestion = questions[i];
    play(newQuestion.question, newQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it\n");
  highScores.map(score => console.log(chalk.cyan(score.name), " : ", chalk.magenta(score.score)))
}

game();

showScores();
console.log("\n");
console.log(chalk.underline.yellow("Hurrah😁!! You score is"), score)






