const elements = document.querySelectorAll('.drum')
let audio 

function changeColor(){
    for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener('keydown', function(){
            this.style.color = 'blue';
        })
    }
}

function playSound(key){

    switch(key){
        case 'w':
            audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;

        case 'a':
            audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        
        case 's':
            audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;

        case 'd':
            audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;

        case 'j':
            audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;

        case 'k':
            audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;

        case 'l':
            audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;

        default:     
    }
}

function soundOnMouseClick(){
    for(const element of elements){
        element.addEventListener('click', function(){
            playSound(element.innerHTML)
            buttomAnimation(element.innerHTML)
        });
    }
}

function soundOnKeyPress(){
    document.addEventListener('keydown', function(event){
        playSound(event.key)
        buttomAnimation(event.key)
    });
}

function buttomAnimation(currKey){
    var activeButton = document.querySelector("." + currKey)
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed')  
    }, 100)
}

soundOnMouseClick();
soundOnKeyPress();

// let elements = document.querySelectorAll('.drum');

// for (const element of elements) {
//     element.addEventListener("click",event => {
//         event.target.style.backgroundColor = "green";
//     });
// };

