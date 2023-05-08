addEventListener("DOMContentLoaded", (event) => {onCargation()});

async function cargarLista(){
    const response = await fetch("https://my-json-server.typicode.com/YOGURSIO/ListToCargation/tasks")
    const data = await response.json()
    
    return data
}

function onCargation(){
    cargarLista()
        .then((value) => {
            for (const item of value){
                insertarEnLista(item.title, document.getElementById("laLista"))
            }
        })
        .catch(err => {
            console.error(err)
        })
}


function addTask(task){
    
    return fetch("https://my-json-server.typicode.com/YOGURSIO/ListToCargation/tasks",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(task)
    })
}


function insertarLi(idLista, idInput) {
    const elInput = document.getElementById(idInput);
    const laLista = document.getElementById(idLista);

    const elTexto = elInput.value;

    if(elInput){
        insertarEnLista(elTexto, laLista);
    }

    
}

function insertarEnLista(elTexto, laLista){
    if (elTexto && laLista) {
        const nuevoLi = document.createElement('li');
        nuevoLi.innerHTML = `
        <div class="card">
        <h5 class="card-header">${elTexto}</h5>
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>`;
        nuevoLi.onclick = borrarElementoLista;
        nuevoLi.classList.add("col-4")
        nuevoLi.classList.add("m-3")
        laLista.appendChild(nuevoLi);

        
    }
}

function onClick() {
    const elInput = document.getElementById("elInput");
    const laLista = document.getElementById("laLista");

    const elTexto = elInput.value;

    if(elInput){
        insertarEnLista(elTexto, laLista);
        addTask({title:elTexto, desc: "hola", completed: false})
    }

    
}

function onClickUl() {
    insertarLi("laListaUl", "elInputUl");
}


function borrarElementoLista(event) {
    const elLi = event.currentTarget.closest("li"); 
    const padre = elLi.parentElement;
    padre.removeChild(elLi); 
}


//{"id": 1,"title": "Post 1","completed": true}