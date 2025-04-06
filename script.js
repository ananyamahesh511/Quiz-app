let questionElement = document.querySelector(".question-section");
let optionsElement = document.querySelector(".options-section");
let resultElement = document.querySelector(".result-section");

const questions = [
    ["Which is the longest river in the world?","Amazon","Nile","Yangtze","Mississippi","none",2],
    ["Which planet is known as the Red Planet?","Venus","Mars","Jupyter","Saturn","none",3],
    ["Who wrote the play 'Romeo and Juliet'?","Charles Dickens","William Shakesphere","Mark Twain","Jane Austin","none",2],
    ["What is the chemical symbol for gold?","Ag","Au","Pb","Fe","none",2],
    ["Which country is known as the Land of the Rising Sun?","India","Yemen","China","Japan","none",4],
    ["What is the hardest natural substance on Earth?","Iron","Steel","Diamond","Quartz","none",3],
    ["Which gas do plants absorb from the atmosphere for photosynthesis?","CO2","O2","H2SO4","FeSO4","none",1],
    ["Which is the largest ocean on Earth?","Pacific Ocean","Atlantic Ocean","Bay of Bengal","Indian Ocean","none",1],
    ["How many continents are there on Earth?","5","6","7","8","none",3],
    ["What is the capital of France?","Berlin","Madrid","Paris","Rome","none",3]
];

const levels = [1,2,3,4,5,6,7,8,9,10];
const stake = [1000,2000,3000,5000,7000,9000,10000,12000,14000,15000];
let money = 0;
let i = 0;
//i = current question

function loadQuestion(){
    const question = questions[i];
    questionElement.innerHTML = `<b><h2>Money at stake: ${stake[i]}</b></h2><br><h3>${questions[i][0]} `;
    optionsElement.innerHTML = " ";
    for(let idx = 1; idx<=4; idx++){
        let optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.textContent = question[idx];
        optionsElement.appendChild(optionDiv);
        optionDiv.addEventListener("click",()=>checkAns(questions[i][idx]));
    }
}

function checkAns(selectedOpt){
    const question = questions[i][0];
    const correctOpt = questions[i][6];
    if(selectedOpt == questions[i][correctOpt]){
       const money = stake[i];
       resultElement.innerHTML = `<b>Correct Answer! You earn +${money}points</b>`;
       resultElement.className="correctans";
       i++;
       if(i<questions.length){
        setTimeout(() => {
        resultElement.innerHTML = " ";
        loadQuestion(); 
       }, 2000);

      }
     else{
        let lastPrize = stake[stake.length - 1];
        resultElement.innerHTML = `<b>Congratulations!!!<br>You take Rs${lastPrize} to your home</b>`;
        resultElement.className="the-end";
        setTimeout(() => {
            reset();
        }, 3000);

    }
    }
    else{
        resultElement.innerHTML = `<b>Wrong answer!Reloading from the beginning</b>`;
        resultElement.className="wrongans";
        setTimeout(() => {
            resultElement.innerHTML = " ";
            reset();
        }, 2000);
    }
}

function reset(){
    i = 0;
    let money = stake[i];
    money = 0;
    resultElement.innerHTML = " ";
    loadQuestion();
}

loadQuestion(questions[i][0]); 