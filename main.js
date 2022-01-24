let changeColor = document.getElementById("changeColor")
let counter = 0;

changeColor.addEventListener("click",
    function() {
        counter++;
        if(counter==0) {
            changeColor.style.color="white";
        } else if(counter==1) {
            changeColor.style.color="magenta";
        } else if(counter==2) {
            changeColor.style.color="blue";
        } else if(counter==3) {
            changeColor.style.color="green";
        } else if(counter==4) {
            changeColor.style.color="yellow";
        } else if(counter==5) {
            changeColor.style.color="cyan";
        } else if(counter==6) {
            changeColor.style.color="gray";
            counter= -1;
        }

    }
)