(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        // 1. Buscamos el índice actual que tiene la clase de visibilidad
        const currentIndex = sliders.findIndex((slider)=> slider.classList.contains('testimony__body--show'));

        // 2. Quitamos la clase actual
        sliders[currentIndex].classList.remove('testimony__body--show');

        // 3. Calculamos el nuevo índice sumándole el incremento (1 o -1)
        let value = currentIndex + add;

        // 4. Controlamos los límites (si pasa del último o baja del primero)
        if(value === sliders.length){
            value = 0;
        } else if(value < 0){
            value = sliders.length - 1;
        }

        // 5. Añadimos la clase al nuevo elemento calculado
        sliders[value].classList.add('testimony__body--show');
    }
})();