
async function searchPk() {
    var pkName = document.getElementById("pkName").value;
    if (pkName) {
        const data = await obtenerpk(pkName);
        var respuestaApi = document.getElementById('respuesta-api');
        respuestaApi.innerHTML = `<img width="100" height="100" src="${data.sprites.front_default}">`;
    }
}

function obtenerpk(pkName) {
    var url = `https://pokeapi.co/api/v2/pokemon/${pkName.trim()}`;
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

/*
var dataPromise = obtenerpk();

function mostrarDatosDeAPI(data) {

}

dataPromise.then((data) => {
    mostrarDatosDeAPI(data);
    console.log(data);
})*/