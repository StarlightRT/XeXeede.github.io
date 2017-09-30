function displayName() {
    document.getElementById("demo").innerHTML = document.getElementById('firstname').value + " " + document.getElementById('lastname').value;
}
function changingColors() {
    var i = 0;
    waitThenColor(i);
}
function waitThenColor(i) {
    var time = (.333333 + (Math.random() * (3))) * 50;        
    var letters = '0123456789ABCDEF';            
    var color = '#';
    var color2 = '#';
    var color3 = '#';
    var howManyTimes = 4000;
    
    var j = i+1;
    for (let q = 0; q < 6; q++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    if(j<=howManyTimes){
        setTimeout(function() {
            waitThenColor(j)
        }, time);
    }
    document.body.style.backgroundColor = color; 
      
    for (let q = 0; q < 6; q++) {
        color2 += letters[Math.floor(Math.random() * 16)];
    } 
    mee.style.color = color2;

    for (let q = 0; q < 6; q++) {
        color3 += letters[Math.floor(Math.random() * 16)];
    } 
    theText.style.color = color3;
}