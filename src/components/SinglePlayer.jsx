import { useEffect, useState } from "react";

const SinglePlayer = ({ player,setSelectedPlayer }) => {
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/${player.id}`
      );
      const jsonResponse = await response.json();

      console.log(jsonResponse);
      setPlayerDetails(jsonResponse.data.player);
    };
    fetchSinglePlayer();
  }, []);

  return (
    <div>
      {playerDetails ? <div><h2>Name: {playerDetails.name}</h2><h2>Breed: {playerDetails.breed}</h2><h2>ID: {playerDetails.id}</h2><h2>Status: {playerDetails.status}</h2><img src={playerDetails.imageUrl}/></div> : <h2>"loading..."</h2>}
      <button onClick={() => {setSelectedPlayer(undefined)}}>Go Back Now</button>
    </div>
  );
};

export default SinglePlayer;
