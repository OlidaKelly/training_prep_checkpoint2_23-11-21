import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import axios from 'axios';

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
  }, []);

  console.log(characters)


  return (
      <div className='charactersList-div'>
        {
          characters ? characters.map(character => <CharacterCard key={character.id} character={character}/>) :
          'loading...'
        }
      </div>
  );
}