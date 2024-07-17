const Gcon = document.getElementById("Gcon");
const imgcon = document.getElementById("imgcon");
const body = document.getElementById("body");
const pause = document.getElementById("pause");
const play = document.getElementById("play");
const gover = document.getElementById("gover");
const newg = document.getElementById("newg");
const wonCards=[];
let message = "";
let run = false;
const mesage = document.getElementById("mesage");
let Gscore = document.getElementById("Gscore");
menu.addEventListener("click",()=>{
    location.assign("starter.html")
});

pause.addEventListener("click" ,()=>{
    
    play.style.visibility="visible";
    pause.style.visibility="hidden";
    pauseFun();
});

play.addEventListener("click" ,()=>{
    play.style.visibility="hidden";
    pause.style.visibility="visible";
    pauseFun();
});


var selectedId=[];
var selectedImg=[];

let Gtime = 60;
let count;
const cards=[
    {
        name:"pip1",
        img:"1.jpg"
    },
    {
        name:"pip2",
        img:"2.jpg"
    },
    {
        name:"pip3",
        img:"3.jpg"
    },
    {
        name:"pip4",
        img:"4.jpg"
    },
    
    {
        name:"pip5",
        img:"5.jpg"
    },
    {
        name:"pip6",
        img:"6.jpg"
    } ,
       {
        name:"pip1",
        img:"1.jpg"
    },
    {
        name:"pip2",
        img:"2.jpg"
    },
    {
        name:"pip3",
        img:"3.jpg"
    },
    {
        name:"pip4",
        img:"4.jpg"
    },
    
    {
        name:"pip5",
        img:"5.jpg"
    },
    {
        name:"pip6",
        img:"6.jpg"
    }
];
cards.sort(()=>0.5-Math.random());
startGame();
function startGame(){
     clearBord();
     counter();
    
    
    }
   


function clearBord() {
    var card;
    let i=0;
 
    cards.forEach(card=>{
         card =document.createElement("img");
        card.setAttribute('src','back3.jpg');
        card.setAttribute('img_id',i);
        imgcon.appendChild(card);
        
        card.addEventListener("click",flipCard);
            
        card.style.margin = 5+"px";
        card.style.width = 150+"px";
        card.style.height = 150+"px";
        card.style.borderRadius = 20+"px";
        i++;
    })
  
}

function flipCard() {
    if(run==true){
        let dgree=1;
        let imgN = this.getAttribute('img_id');
        selectedImg.push(cards[imgN].name);
        selectedId.push(imgN);
        
        this.setAttribute('src',cards[imgN].img);
           let rot = setInterval(()=>{
                dgree+=1;
                if(dgree!=170){
                    this.style.transform = "rotateY("+dgree+"deg)";
                }
                else{
                    clearInterval(rot);
                }
               
            })
           
    
        if(selectedImg.length==2){
           
            setTimeout(chack,700);
           
           
        }
    }
   
}

function chack(){
   
    
    const allImg = document.querySelectorAll('img');
    if(allImg[selectedId[0]]==allImg[selectedId[1]]){
        allImg[selectedId[0]].setAttribute('src','back3.jpg');
        allImg[selectedId[1]].setAttribute('src','back3.jpg');
        
        selectedImg=[];
        selectedId=[];
    }
   
    if(selectedImg[0]==selectedImg[1]){
    
        if(allImg[selectedId[0]]!=allImg[selectedId[1]]){
            wonCards.push(selectedImg);
            
            allImg[selectedId[0]].setAttribute('src','winBack.jpg');
            allImg[selectedId[1]].setAttribute('src','winBack.jpg');
            allImg[selectedId[0]].removeEventListener('click',flipCard);
            allImg[selectedId[1]].removeEventListener('click',flipCard);
            if(wonCards.length==6){
                win();
            }
        }
        
    }
    else{
        allImg[selectedId[0]].setAttribute('src','back3.jpg');
        allImg[selectedId[1]].setAttribute('src','back3.jpg');
        
    }
    
   
   
    selectedImg=[];
    selectedId=[];
    console.log(wonCards.length)
}

function win(){
    clearInterval(count);
    gover.textContent="wow you get them 😀";
    mesage.style.visibility="visible";
    mesage.textContent="wow you have amezed me you get all of them congragulation you win the game😃😃😃";

 
    gameOverFun();
}


function counter(){
   
     count=setInterval(()=>{
        if(run==true){
         Gtime-=1;
         
         if(Gtime<10){
            Gscore.textContent = "0"+Gtime;
         }
         else{
            Gscore.textContent = Gtime;
         }
         if(Gtime<0){
            Gtime-=0;
            clearInterval(count);
           gameOverFun();
         }
        }
        else{
            Gtime+=0;
        }
        if(Gtime==59){
            mesage.style.visibility="visible";
            message = 'Helo Sir Welcome I waited you so long Time But i Am Very Happy To See U Now Go And Get All Them😃😃😃';
            mesage.textContent=message;
        }
        else if(Gtime==54){
            mesage.style.visibility="hidden";
        }
        else if(Gtime==46){
            mesage.style.visibility="visible";
            message = 'i think you can`t get them easly you wana my help but i can`t i am a judge here😃😃😃';
            mesage.textContent=message;
            }
            
            else if(Gtime==35){
                    mesage.style.visibility="hidden";
                    }
    
                    else if(Gtime==35){
                        mesage.style.visibility="visible";
                         message = "oooh sir you look tired you can't get my frends easly they play this game so much>🙄🙄🙄🙄";
                         mesage.textContent=message;
                        }
                        else if(Gtime==25){
                            mesage.style.visibility="hidden";
                            }
                            else if(Gtime==23){
                                mesage.style.visibility="visible";
                                message = 'sir try to be fast the time is almost deid please get them 😮😮😮😮😮😮';
                                mesage.textContent=message;
                                }
                                else if(Gtime==15){
                                    mesage.style.visibility="hidden";
                                    }
                                    else if(Gtime==10){
                                        mesage.style.visibility="visible";
                                        message = 'so sir it looks you  have lose but don`t upset we  get them in next game';
                                        mesage.textContent=message;
                                        }

    },1000);
   
}

function pauseFun(){

    if(run==true){
       
        play.style.visibility="visible";
        pause.style.visibility="hidden";
        run=false;
        flipCard() 
       
    }
    else if(run==false){
        play.style.visibility="hidden";
        pause.style.visibility="visible";
        run=true;
        flipCard();
       
    }

}
function gameOverFun(){
    
    gover.style.visibility="visible";
    pauseFun();
}