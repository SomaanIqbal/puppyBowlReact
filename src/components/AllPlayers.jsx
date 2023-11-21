import { useEffect, useState } from "react";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = ({ setSelectedPlayer }) => {
  const [players, setPlayers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        console.log("hi");
        const response = await fetch(
          " https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players "
        );
        const jsonResponse = await response.json();
        const jsonResponseData = jsonResponse.data;

        // console.log(jsonResponseData.players);

        setPlayers(jsonResponseData.players);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlayers();
  }, []);

  // console.log(players);

  return (
    <>
    <NewPlayerForm setPlayers = {setPlayers} players = {players}/>

      {players ? (
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <p>{player.name}</p> <img src={player.imageUrl} />
              <button onClick={() => setSelectedPlayer(player)}>
                Get More Details Here
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default AllPlayers;
