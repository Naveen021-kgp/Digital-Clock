function displayTime(){
    var dateTime= new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var nn=document.getElementById('noon');
    var ms=dateTime.getMilliseconds();
    if(hrs>=12){
        // hrs=hrs-12;
        nn.innerHTML='PM';
    }
    else{
        nn.innerHTML='AM';
    }
    if(hrs>12){
        hrs=hrs-12;
    }
    document.getElementById('h').innerHTML=hrs;
    document.getElementById('m').innerHTML=min;
    document.getElementById('s').innerHTML=sec;
    document.getElementById('ms').innerHTML=ms;
}
setInterval(displayTime,10);