import { Link } from 'react-router-dom';
export const CharacterCard = ({ character }) => {
  return (
    <div className='characterCard-div'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>status: {character.status}</p>
      <Link to={`/character/${character.id}`}>View more !</Link>
    </div>
  );
}