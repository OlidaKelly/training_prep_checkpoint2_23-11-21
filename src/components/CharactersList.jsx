import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import axios from "axios";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [infos, setInfos] = useState([]);
  const [characterAliveClick, setCharacterAliveclick] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataFromApi(page);
  }, [page]);

  const getDataFromApi = (numberPage) => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
      .then((response) => {
        setCharacters(response.data.results);
        setInfos(response.data.info);
        setPage(numberPage);
      });
  };

  const filterCharacters = () => {
    if (characterAliveClick === false) {
      setCharacterAliveclick(true);
      setCharacters(
        characters.filter((character) => character.status === "Alive")
      );
    } else {
      setCharacterAliveclick(false);
      getDataFromApi();
    }
  };

  console.log(page);

  return (
    <div className="container mx-auto py-4">

      <div>
        <p>Total result : {infos && infos.conut}</p>
        <p>{page} / {infos && infos.pages}</p>
      </div>

      <button className="bg-green-500 hover:bg-green-400 text-white-200 font-bold p-3 border rounded-xl" type="button" onClick={() => filterCharacters()}>
        {characterAliveClick ? "Get All Characters" : "Get Alive Characters"}
      </button>

      <button className="bg-blue-500 hover:bg-blue-400 text-white-200 font-bold p-3 border rounded-xl" type="button" onClick={() => infos.prev !== null && getDataFromApi(page - 1)}>
        Prev
      </button>

      <button className="bg-blue-500 hover:bg-blue-400 text-white-200 font-bold p-3 border rounded-xl" type="button"onClick={() => infos.next !== null && getDataFromApi(page + 1)}>
        Next
      </button>

      <div className="grid grid-cols-1 grid-cols-3 xl:grid-cols-4">
        {characters
          ? characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
            ))
          : "loading..."
        }
      </div>
    </div>
  );
};
