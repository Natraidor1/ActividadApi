async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

function mostrarTexto(){

    let texto = document.getElementById("pokemonName").value;

    document.getElementById("showText").textContent = texto;
}

function borrarTexto(){

    document.getElementById("pokemonName").value = "ingresa otro pokemon";
}

function borrarTextoImput(){
    document.getElementById("pokemonName").value = "";
}

function verificarTexto(){

    const textoinput = document.getElementById("pokemonName").value;

    const button = document.getElementById("botonPoke");

    if(textoinput == "ingresa otro pokemon"){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
}

function conjuntoDeFunciones(){

    fetchData();
    mostrarTexto();
    borrarTexto();
    verificarTexto();
}