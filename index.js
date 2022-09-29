const elements = document.querySelectorAll('.drum')

function changeColor(){
    for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', function(){
            this.style.color = 'pink';
        })
    }
}

let audio = new Audio('sounds/tom-1.mp3')

function playSound(){
    for(const element of elements){
        element.addEventListener('click', function(){
            audio.play()
        })
    }
}

changeColor();
playSound();

// let elements = document.querySelectorAll('.drum');

// for (const element of elements) {
//     element.addEventListener("click",event => {
//         event.target.style.backgroundColor = "green";
//     });
// };

