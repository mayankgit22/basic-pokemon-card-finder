fetchPokemon();
async function fetchPokemon(){
   try{
      const pokemonName=document.getElementById("pokemonInput").value.toLowerCase();
      const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if(!response.ok){
         throw new Error("could not get it")
      }
      const data=await response.json();
      const pokemonSprite=data.sprites.front_default;
      const imgElement=document.getElementById("pokemonSprite");
      imgElement.src=pokemonSprite;
      imgElement.style.display="block"
      imgElement.style.margin="auto"
      imgElement.style.width="400px"
      imgElement.style.height="400px"

   }
   catch (error){
      console.error(error);
   }
}
