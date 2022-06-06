
//Issues: create a alarm clock

let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");


setInterval(()=>{
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s=d.getSeconds();
    hRotation=30*h + m/2;
    mRotation=6*m;
    sRotation=6*s;

    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;

    //console.log("time is:"+h+":"+m+":"+s+"hours");
},1000);

document.getElementById("time").addEventListener('click', ()=>{
    alert("The time is "+h+" : "+m+" : "+s+" hours. ");
});

//FORMULAS
// h= number of hours
// m=number of minutes
// s= number of seconds
//HOUR HAND
// for one rotation of hour hand we have 12 hours and 360 degree roation so deiving 360/12 we get 30
// and 12 hours there are 12*60 minutes so 360/12*60= 1/2 
// so for hour hand formaula is = 30*h + m/2

// MINUTE HAND
// We have 360 degrress roatation for 60 minustes so 360/60= 6
// so formula is 6*m

// SECOND HAND
// We have 360 degrress roatation for 60 seconds so 360/60= 6
// so formula is 6*s

