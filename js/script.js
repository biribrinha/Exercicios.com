function search_exercise() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let exercise = document.getElementsByClassName('exercise');
    let card = document.getElementsByClassName('card');
    let mensagemElement = document.getElementById('mensagem');


    let cardsVisiveis = false;


    for (i = 0; i < exercise.length; i++) {
        if (!exercise[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = "none";
            console.log("none")
        }
        else {
            card[i].style.display = "initial";
            console.log("initial")
        }


        if (cardsVisiveis) {
            mensagemElement.style.display = 'none';

            //se os cards estão visiveis, ocultar a mensagem
        } else {
            mensagemElement.style.display = 'initial';

            //se não, aparecerá a mensagem

            console.log("teste");

        }
    }
}