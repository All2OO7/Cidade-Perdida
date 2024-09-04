//const avanca = document.querySelectorAll('.BTN-Proximo');
//
//avanca.forEach(button => {
//    button.addEventListener('click',function(){
//        const atual = document.querySelector('.ativo');
//        const ProximoPasso = 'passo-' + this.getAttribute('data-proximo');

//        atual.classList.remove('ativo');
//        document.getElementById(proximoPasso).classList.add('ativo');
//    })
//})

document.addEventListener('DOMContentLoaded', () => {
    const avancar = document.querySelectorAll('.BTN-Proximo');

    avancar.forEach(button => {
        button.addEventListener('click', function() {
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        });
    });
});
