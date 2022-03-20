const quizDB = [
    {
        question:"Q.1: In what figures you like us to pay you ?",
        a:"4",
        b:"7",
        c:"5",
        d:"6",
        ans:"ans3"
    },
     {
        question:"Q.2: what are the things you would like to tell interviewer about yourself",
        a:"Growing environment",
        b:"education",
        c:"work experience",
        d:"ALL of the Above",
        ans:"ans4"
    },
     {
        question:"Q.3: What are your strengths?",
        a:"Social Friendly",
        b:"I pay attention to every details",
        c:"I plan and then execute",
        d:"Both b and c",
        ans:"ans4"
    },
     {
        question:"Q.4: What are your weaknesses?",
        a:"I am very impatient",
        b:"I got irritated very easily",
        c:"I want every thing to be perfect and every detail to be done neatly that i run out of time and submit my projects after deadline",
        d:"I don't have a weakness",
        ans:"ans3"
    },
    {
        question:"Q.5: Where do you see yourself in five years ?",
        a:"I see myself to become the ceo of this company",
        b:"I like to own a airlines",
        c:"I see my self in a good situation and till than i like to gain experience and learn new things and eventually become the manager",
        d:"On your chair",
        ans:"ans3"
    },
     {
        question:"Q.6: what do you know about our company?",
        a:"History",
        b:"Products",
        c:"Working Environment",
        d:"All of the above",
        ans:"ans4"
    },
     {
        question:"Q.7: How well do you handle change?",
        a:"By telling about your past experience with sudden changes ",
        b:"I am good at handling changes",
        c:"I can't handle it",
        d:"I will give my best to handle such changes",
        ans:"ans1"
    },
     {
        question:"Q.8: Do you work well under pressure?",
        a:"working under pressure and working under no pressure works same for me",
        b:"Sharing work experience you done before under pressure",
        c:"I can't handle it",
        d:"both a and b",
        ans:"ans4"
    },
    {
        question:"Q.9: How do you make important decisions?",
        a:"I have never dealt with such situations",
        b:"making decisions is hard but i will riley on my experience",
        c:"by looking on both sides of coin like pros and cons",
        d:"both b and c",
        ans:"ans4"
    }
  ];

const question=document.querySelector('.questions');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');

const ShowScore=document.querySelector('#showscore')

let questionCount=0;
let score=0;


 const loadQuestion=()=> {
     const questionlist=quizDB[questionCount]
     question.innerText=questionlist.question;
     option1.innerText=questionlist.a;
     option2.innerText=questionlist.b;
     option3.innerText=questionlist.c;
     option4.innerText=questionlist.d;

 }

loadQuestion();

 const getcheckAnswer = () => {
     let answer;

     answers.forEach((curAnsElements) => {
        if(curAnsElements.checked){
            answer=curAnsElements.id;
        }
     });
     return answer;
 };


 const deselectall = ()=> {
     answers.forEach((curAnsElements) => curAnsElements.checked =false );
 }

 submit.addEventListener('click',() => {
     const checkedAnswer = getcheckAnswer();
     console.log(checkedAnswer);
     if(checkedAnswer == quizDB[questionCount].ans){
         score++;
     };
     questionCount++;

     deselectall();

     if (questionCount < quizDB.length){
         loadQuestion();
     }else{

         ShowScore.innerHTML =`
             <h3> YOU SCORED ${score}/${quizDB.length} !!! </h3>
         <button class="btn" onClick="location.reload()">PLAY AGAIN</button>
         <button class="btn"><a  href="reasons.html" class="hover">ANSWERS/REASONS</a></button>
         `;
         ShowScore.classList.remove('scorearea');
     }


 });


