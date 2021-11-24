export const CharacterCard = ({ character }) => {
  return (
    <div className='characterCard-div'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>status: {character.status}</p>
    </div>
  );
}