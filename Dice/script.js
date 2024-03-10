const dice=document.getElementById("dice");
const btn=document.getElementById("run");
const list=document.getElementById("result");

let historyList=[];

function roll(){
    const num=Math.floor(Math.random()*6)+1;
    const res=display(num);
    dice.innerHTML=res;
    historyList.push(num);
    updateHistory();
}

function updateHistory(){
    list.innerHTML="";
    for(let i=0;i<historyList.length;i++){
        const item=document.createElement("li");
        if(display(historyList[i])==="&#9861;"){
            item.innerHTML=`Roll ${i+1}: <h4>You Win</h4> <span>${display(historyList[i])}</span>`;
        } else{

            item.innerHTML=`Roll ${i+1}: <span>${display(historyList[i])}</span>`;
        }
        list.appendChild(item);
    }
}

function display(roll){
    switch (roll) {
        case 1:
            return "&#9856;";
          case 2:
            return "&#9857;";
          case 3:
            return "&#9858;";
          case 4:
            return "&#9859;";
          case 5:
            return "&#9860;";
          case 6:
            return "&#9861;";
          default:
            return "";
      
    }
}

btn.addEventListener("click",()=>{
    dice.classList.add("rollDice");
    setTimeout(()=>{
        dice.classList.remove("rollDice");
        roll();
    },1000)
});