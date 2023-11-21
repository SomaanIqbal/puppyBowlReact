import { useState } from "react";

const NewPlayerForm = ({players, setPlayers}) => {

    const [inputedName,setInputedName] = useState(null)

  const fetchingPost = async () => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputedName,
            breed: "Irish Setter",
          }),
        }
      );

      const result = await response.json();
      console.log(result);

      setPlayers([...players, result.data.newPlayer])

    } catch (err) {
      console.error(err);
    }
  };

  
  return (
      <div>

      <input onChange={(event)=>{setInputedName(event.target.value)}}/>

      <button onClick={() => {fetchingPost()} }>Add Player Here</button>
        
    </div>
  );
};

export default NewPlayerForm;
