let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

let startbtn = document.querySelector(".start"); 
startbtn.addEventListener("click",function(){        
    if(started == false){
        console.log("game is started");
        started = true;   
        startbtn.innerText = "End"; 
        startbtn.style.backgroundColor = "red"   
        levelUp();
        
               
    }else{
        startbtn.style.backgroundColor = "blue"   
        startbtn.innerText = "Start";
    
        reset()
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random button choose
    let randIdx =Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); 
    console.log(gameSeq);
    gameflash(randbtn);
}
let currlevel=0;
function checkAns(idx){
      if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(() => levelUp(), 1000);
        }
      }else{
        h2.innerHTML=`game over!Your score was <b>${level}</b><br> Press Start Button To Start`;
        document.querySelector("body").style.backgroundColor="black";
        startbtn.style.backgroundColor = "blue";   
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#DF9A57";
        },150);
        reset();
      }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(const btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    startbtn.innerText = "Start"
}
