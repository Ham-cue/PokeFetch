

async function fetchData() {
    
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw Error("Could not get resource");
        }

        const data = await response.json();
        const pokemon_spirte = data.sprites.front_default;
        const imgElement = document.getElementById('pokemon_spirte');
        const cry = data.cries.latest;
        const audioElement = document.getElementById("pokemonCry");

        audioElement.src = cry;
        audioElement.volume = 0.2;
        audioElement.style.display = "block";
        imgElement.src = pokemon_spirte;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(error)
    }
}