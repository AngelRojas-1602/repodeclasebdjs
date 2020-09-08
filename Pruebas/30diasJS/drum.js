function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //Detiene la funcion de correr toda junta
    audio.currentTime = 0; // regresa hacia el incio
    audio.play();
    key.classList.add(`playing`);
}
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);