// assignments for markOne and markTwo
// quiz app topic 
 // "type": "module", -> to use es6 module eg import chalk
 import chalk from 'chalk';
 // var message = "Radhe Radhe";
 // console.log(chalk.yellow.bgYellow.italic(message));
 
 // console.log(chalk.blue('This is blue text.'));
 // console.log(chalk.red.bold('This is bold red text.'));
 // var str = "Hello People";
 // console.log(chalk.cyan(str));
 // var log = console.log;
 // log(chalk.red("Maa Durga"));
 
 
 
 var score =0;
 var quiz = [
   {
     que:"What HTML tag is used to create a hyperlink?",
     ans:"c",
    options:["a.<link>",
              "b.href",
              "c.<a>",
              "d.<hlink> \n" ] 
   },
   {
     que:"Which HTML tag is used to create an ordered list?",
     ans:"b",
    options:
      ["a.<ul>",
      "b.<ol>",
      "c.<li>",
      "d.<dl \n" ]
     
   },
   {
     que:"What is the purpose of the <meta> tag in HTML?",
     ans:"b",
     options:["a.It defines a section of the document",
     "b.It specifies the character encoding of the document",
     "c.It creates a horizontal rule(line)",
     "d.It adds a clickable link to another webpage \n"
       ]
   },
   {
     que:"What does CSS stand for?",
     ans:"a",
     options:["a.Cascading Style sheet",
     "b.Computer stylesheet",
     "c.Creative Style Sheet",
     "d.Colorful Style Sheet \n"
   ]
   },
   {
     que:"How can you select an HTML element with the id attribute header in CSS?",
       ans:"a",
       options:["a.#header",
                "b..header",
               "c.element(header)",
               "d.header \n",
                ]
   },
   {
     que:"Is java pure OOPS language",
     ans:"b",
     options:["a.yes",
     "b.no",
     "c.maybe",
     "d.can't say \n" ]
   },
   {
     que:"What is the full form of SEO?",
     ans:"a",
     options:["a.Search Engine Optimisation",
     "b.Secure Email operation",
     "c.Site enhancement opportuniy",
     "d.Social Engagement outreach \n",
       ]
     
   },
   {
     que:"What is the purpose of a web browser's cache?",
     ans:"c", 
     options:["a.To store user passwords securely",
     "b.To track user browsing history",
     "c.To speed up loading of frequently visited web pages",
     "d.To block access to certain websites \n",
      ]
   },
   {
     que:"What does URL stand for in the context of the web?",
     ans:"a",
     options:["a.Universal Resource Locator",
     "b. Uniform Routing Language",
     "c.Unique Redirect Link",
     "d.Universal Reference List \n"
       ]
         
   },
 {
   que:"What is the correct HTML tag for creating an image?",
     ans:"b",
     options:["a.<image>",
      "b.<img>",
      "c.<picture>",
      "d.<link> \n ",
      ]
 }
   
 ]
 
   
 
 // var readLineSync = require("readline-sync");
 import readLineSync from "readline-sync";
 function playQuiz(question,answer,options){
   console.log(chalk.black(question));
   chalk.black(options);
   var userAns = readLineSync.question(options);
 
   if(userAns === answer){
     score++;
     console.log(chalk.green("Correct"));
     if(score==5){
       console.log(chalk.yellow("You cleared level 1"));
     }else if(score==10){
       console.log(chalk.green("You cleared both the levels!! Keep it up!!"));
     }
   }else{
     console.log(chalk.red("Incorrect " + "The correct answer is " + answer ));
   }
   
 }
 
 
 for(var i=0;i<quiz.length;i++){
   var currentQue = quiz[i];
   playQuiz(currentQue.que,currentQue.ans,currentQue.options);
   
   
 }
 
 var highScorer={
   name:"ivar",
   score:10
 }
 console.log();
 console.log(chalk.yellow("Highest scorer " + highScorer.name + " With score " + highScorer.score ));
 console.log();
 if(score === quiz.length){
   console.log(chalk.blue("You scored full marks " + "Nice Keep it up!!" + "Send me the screenshot of score I will add in highest scorer "))
 }else{
   console.log("Your score is " + score + " Play again to score more");
 }
 
 
 