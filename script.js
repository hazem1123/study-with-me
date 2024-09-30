
var shortbreak = document.getElementById('short break')
var longbreak = document.getElementById('long break')
var stopp =document.getElementById('stop')
 var second = document.getElementById('seconds')
var minut= document.getElementById('minutes')
let start= document.getElementById('start')
var startt=document.getElementById('startt')
var done= document.getElementById('done')
var dallete=document.getElementById('delete all')
var input=document.getElementById('input')
var words = document.getElementById('words')
let intervalId
var value=60
var value2=49
start.onclick=("click",function(){
value2=49
value=60
 minut.innerHTML='50'
 second.innerHTML='00'
})
shortbreak.onclick=("click",function(){
  value2=14
  value=60
  minut.innerHTML='15'
   second.innerHTML='00'
})
longbreak.onclick=("click",function(){
  value2=119
  value=60
  minut.innerHTML='120'
   second.innerHTML='00'
})
stopp.style.display='none'
startt.onclick=function(){
  
  startt.style.display='none'
   stopp.style.display='block'
   timerInterval = setInterval(() => {
    value=value-1;
    second.textContent = value;
    minut.textContent=value2
    if(value==0){
      value2=value2-1
      value=60
      minut.textContent=value2
      second.textContent='00'
    }
  }, 1000);
  
  }


stopp.onclick=function(){
  
  stopp.style.display='none'
   startt.style.display='block'
   clearInterval(timerInterval)
}
done.onclick=('click', function(){
  words.innerHTML+='<input type="checkbox" >'+input.value
})
dallete.onclick=function(){
  words.textContent=''
}
if(value2==0){
  value2=49
value=60
 minut.innerHTML='50'
 second.innerHTML='00'
}