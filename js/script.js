function search_exercise() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let exercise = document.getElementsByClassName('exercise');
    let card = document.getElementsByClassName('card');

    for (i = 0; i < exercise.length; i++) {
        if (!exercise[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = "none";
        }
        else{
            card[i].style.display = "initial";
        }
    }
}