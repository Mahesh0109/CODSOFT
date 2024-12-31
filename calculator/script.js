let display=document.getElementById("display");
function appendNumber(number){
    if(display.innerText==="0"){
        display.innerText=number;
    }else{
        display.innerText+=number;
    }
}
function appendOperator(Operator){
    const lastChar=display.innerText.slice(-1);
    if(!['+','-','*','/'].includes(lastChar)){
        display.innerText+=Operator;
    }
}
function clearDisplay(){
    display.innerText="0";
}
function backspace(){
    if(display.innerText.length>1){
        display.innerText=display.innerText.slice(0,-1);
    }else{
        display.innerText="0";
    }
}
function calculateResult(){
    try{
        display.innerText=eval(display.innerText);
    }catch(error){
        display.innerText="Error";
    }
    
}