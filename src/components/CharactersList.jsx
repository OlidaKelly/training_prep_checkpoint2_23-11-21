import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import axios from 'axios';

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [characterAliveClick, setCharacterAliveclick] = useState(false);
  
  useEffect(() => {
      getCharactersFromApi();
  }, []);

  const getCharactersFromApi = () => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => setCharacters(response.data.results))
  }

  

  const filterCharacters = () => {
    if(characterAliveClick === false){
      setCharacterAliveclick(true)
      setCharacters(characters.filter(character => character.status === 'Alive'))
    }
    else{
      setCharacterAliveclick(false);
      getCharactersFromApi();
    }
    
  }

  console.log(characters)


  return (
      <div className='charactersList-div'>
        <div>
          <button className='button-filter' type="button" onClick={() => filterCharacters()} >{characterAliveClick ? "Get All Characters":"Get Alive Characters"}</button>
        </div>
        {
          characters ? characters.map(character => <CharacterCard key={character.id} character={character} />) :
          'loading...'
        }
      </div>
  );
}