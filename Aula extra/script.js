function ajaxCharacter() {
console.log("ajaxCharacter")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://rickandmortyapi.com/api/character", true);

xhr.onload = function () {
const data = JSON.parse(xhr.responseText);
const characterList = document.getElementById("character-list")
console.log(data.results);
data.results.forEach((character) => {
    const listItem = document.createElement("li");
listItem.textContent = `0 personagem ${character.name} está ${character.status}`;
characterList.appendChild(listItem);

});

};

xhr.send();

}





    function ajaxEpisode() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://rickandmortyapi.com/api/episode", true);
        
        xhr.onload = function () {
        const data = JSON.parse(xhr.responseText);
        const episodeList = document.getElementById("episode-list")
        console.log(data.results);
        data.results.forEach((episode) => {
            const listItem = document.createElement("li");
        listItem.textContent = `0 personagem ${episode.name} está ${episode.status}`;
        episodeList.appendChild(listItem);
        
        });
        
        };
        
        xhr.send();

};


function fetchCharacter(){
 fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    if (!response.ok) {
        throw new Error("Não foi possivel efetuar a requisição.");
    }

    return response.json();
})
.then((data) => {
data.results.forEach((character) => {
    const characterList = document.getElementById("character-list");
    const listItem = document.createElement("li");
    listItem.textContent = `O personagem ${character.name} está ${character.status}`;
    characterList.appendChild(listItem);((error) => console.log("", error));
});
})
.catch((error) => console.error("Erro na requisição:", error));
}


function fetchEpisode() {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível efetuar a requisição.");
        }
        return response.json();
      })
      .then((data) => {
        const episodeList = document.getElementById("episode-list");
        data.results.forEach((character) => {
          const listItem = document.createElement("li");
          listItem.textContent = `O personagem ${episode.name} está ${episode.status}`;
          episodeList.appendChild(listItem);
        });
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }
  