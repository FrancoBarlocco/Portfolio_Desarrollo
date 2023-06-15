function onClick() {
    const elInput = document.getElementById("elInput");
    const laLista = document.getElementById("laLista");

    const elTexto = elInput.value;

    if (elTexto) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = elTexto;
        nuevoLi.onclick = borrarElementoLista;

        laLista.appendChild(nuevoLi);

        elInput.value = '';
    }
}

function borrarElementoLista(event) {
    const elLi = event.srcElement;
    const padre = elLi.parentElement;

    padre.removeChild(elLi);
}