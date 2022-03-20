const quizDB = [
    {
        question:"Q.1: In what figures you like us to pay you ?",
        a:"5",
        b:"It purely depends upon your skills and talent,one should know how much he worth and how did he earn that and what is he doing to increase that figure",
        ans:"ans3"
    },
     {
        question:"Q.2: what are the things you would like to tell interviewer about yourself",
        a:"work experience,education and growing environment",
        b:"The interviewer is not actually looking for an answer he is looking for your confidence, you can describe any ",
        ans:"ans1"
    },
     {
        question:"Q.3: What are your strengths?",
        a:"I pay attention to every details,I plan and then execute",
        b:"Be positive about your self and be professional while giving this answer according to your job like: For a job that requires detailed work mention that you pay very attention to small details",
        ans:"ans1"
    },
     {
        question:"Q.4: What are your weaknesses?",
        a:"I want every thing to be perfect and every detail to be done neatly that i run out of time and submit my projects after deadline",
        b:"Try to put your weaknesses in a positive way that you respect every detail and want everything to be perfect, you ran out of time is negative but this will make sure the judges that you want perfect in every project you do ",
        ans:"ans2"
    },
    {
        question:"Q.5: Where do you see yourself in five years?",
        a:"I see my self in a good situation and till than i like to gain experience and learn new things and eventually become the manager",
        b:"The interviewer want to see how Commited you will be with the company anf about your long term and short term goals ",
        ans:"ans1"
    },
     {
        question:"Q.6: what do you know about our company?",
        a:"History,Products,Working Environment",
        b:"Interviewer wants to see if you are serious about this job or this is just a random interview for a random job you found",
        ans:"ans1"
    },
     {
        question:"Q.7:  How well do you handle change?",
        a:"By telling about your past experience with sudden changes",
        b:"Philosophy behind this is to know would you be able to cop-up with the change because companies come up with different strategies for different clients ",
        ans:"ans1"
    },
     {
        question:"Q.8: Do you work well under pressure?",
        a:"working under pressure and working under no pressure works same for me and sharing work experience you done before under pressure",
        b:"Interviewer wants to know if you get stressed out while working under pressure because companies now-days want their employees to work in different situations as well as under great pressure",
        ans:"ans2"
    },
     {
        question:"Q.9: How do you make important decisions?",
        a:"1making decisions is hard but i will riley on my experience by looking on both sides of coin like pros and cons",
        b:"The interviewer wants to if he/she is hiring you for an crucial position so when you have to make how are you going to make them  ",
        ans:"ans2"
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
             <h3> LET'S TRY AGAIN !!! </h3>
         <button class="btn" onClick="location.reload()">SHOW REASONS</button>
         <button class="btn"><a  href="Power%20-Up-Hack.html" class="hover">PLAY AGAIN</a></button>
         `;
         ShowScore.classList.remove('scorearea');
     }


 });


