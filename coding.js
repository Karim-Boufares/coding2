var selc =document.getElementById("sel1");
var ta1 =document.getElementById("ta1");
var ta2 =document.getElementById("ta2");

ta1.addEventListener("input",()=>{
    code_decode();
})
selc.addEventListener("change",()=>{
    code_decode();
})

function code_decode(){
    if(selc.value=="decode"){
    ta2.value = atob(ta1.value);
    }else{
    ta2.value = btoa(ta1.value);
    }
}