let [seconds,minuites,hours]=[0,0,0];
let displaytime=document.getElementById("displayTime");

let timer=null;
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minuites++;
        if(minuites==60){
            minuites=0;
            hours++;
        }
    }
let h=hours<10?"0"+hours:hours;
let m=minuites<10?"0"+minuites:minuites;
let s=seconds<10?"0"+seconds:seconds;

    displaytime.innerHTML=h+" : "+m +" : "+s
}

function startWatch(){
    document.getElementById('startbtn').disabled = true;
if(timer!==null){
    clearInterval(timer)
}
timer=setInterval(stopWatch,1000)
}

function watchStop(){
    document.getElementById('startbtn').disabled = false;
  clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
 [seconds,minuites,hours]=[0,0,0];

 displaytime.innerHTML="00:00:00"

}