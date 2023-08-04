
const second = document.getElementById('second');
const primary = document.getElementById('primary');


primary.onclick = function (){
    primary.classList.toggle('active')
    second.classList.toggle('active')
}


