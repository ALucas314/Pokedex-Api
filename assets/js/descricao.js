// Recupere a lista de Pokémon e adicione um evento de clique a cada elemento
const pokemonList = document.getElementById("pokemonList");
pokemonList.addEventListener("click", function (event) {
    // Verifique se o elemento clicado é uma <li> (item da lista)
    if (event.target.tagName === "LI") {
        // Recupere o link associado ao Pokémon clicado (você pode definir esses links em algum lugar)
        const pokemonName = event.target.textContent;
        const pokemonLink = getPokemonLinkByName(pokemonName); // Substitua getPokemonLinkByName com sua lógica de obtenção de link
        if (pokemonLink) {
            // Redirecione para o link do Pokémon
            window.location.href = pokemonLink;
        }
    }
});

// Função fictícia para obter o link do Pokémon pelo nome
function getPokemonLinkByName(name) {
    // Você deve implementar a lógica para obter o link do Pokémon com base no nome
    // Este é apenas um exemplo fictício
    const pokemonLinks = {
        "Pikachu": "https://www.example.com/pikachu",
        "Charizard": "https://www.example.com/charizard",
        // Adicione mais Pokémon e seus links aqui
    };
    return pokemonLinks[name];
}
