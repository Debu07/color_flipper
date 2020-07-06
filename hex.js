const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//# 012ABC -> 6
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const back = document.getElementById('heading');
btn.addEventListener('click',()=>{

    let hexColor='#';
    for(let i=1;i<=6;i++){
        const random=getRandomnumber();
          hexColor += hex[random];        
    }
    // console.log(hexColor);
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
    // back.style.backgroundColor="Transparent";
});

function getRandomnumber(){
    return (Math.floor(Math.random()*hex.length));
}