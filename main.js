const typedtext = document.querySelector(".autotype");

const textArray = ["to Code.",'how write best code.','how to become an coding expert'];
const typingdelay = 200;
const erasingdelay = 100;
const newTextdelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if(charIndex < textArray[textArrayIndex].length)
    {
        typedtext.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type , typingdelay);
    }
    else{
        setTimeout(erase, newTextdelay)
    }
}


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, newTextdelay + 250);

});