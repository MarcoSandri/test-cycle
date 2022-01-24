let changeColor = document.getElementById("changeColor")
let counter = 0;

changeColor.addEventListener("click",
    function() {
        counter++;
        if(counter==0) {
            changeColor.style.textShadow= "0 0 60px white";
            changeColor.style.color="white";
        } else if(counter==1) {
            changeColor.style.textShadow= "0 0 60px magenta";
            changeColor.style.color="magenta";
        } else if(counter==2) {
            changeColor.style.textShadow= "0 0 60px blue";
            changeColor.style.color="blue";
        } else if(counter==3) {
            changeColor.style.textShadow= "0 0 60px green";
            changeColor.style.color="green";
        } else if(counter==4) {
            changeColor.style.textShadow= "0 0 60px yellow";
            changeColor.style.color="yellow";
        } else if(counter==5) {
            changeColor.style.textShadow= "0 0 60px cyan";
            changeColor.style.color="cyan";
        } else if(counter==6) {
            changeColor.style.textShadow= "0 0 60px gray";
            changeColor.style.color="gray";
            counter= -1;
        }

    }
)