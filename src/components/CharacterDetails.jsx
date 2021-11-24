import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter();
  });

  const getCharacter = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      setCharacter(response.data);
    });
  }

  return (
    <div className='characterCard-div'>
     { character &&  
        
        <h3>{character.name}</h3>

     }
    </div>
  );
}