// schijf hier tussen je code
currentcolor = "black"

function changeBackground(color) {
        document.body.style.background = color;
        if (currentcolor == "yellow") currentcolor = "black", btn.innerHTML = 'Switch light off', console.log("light is on")
        else currentcolor = "yellow", btn.innerHTML = 'Switch light on', console.log("light is off")
 }
 
window.addEventListener("load",function() { changeBackground(currentcolor) });

var btn = document.createElement('button');

btn.onclick = function(){ changeBackground(currentcolor)}
btn.style.margin = '10px';
btn.innerHTML = 'Switch light on';
document.body.appendChild(btn);





// schijf hier tussen je code