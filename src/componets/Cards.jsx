import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Cards(props) {
  const [Animais, setAnimais] = useState([]);
  console.log(props);
  useEffect(() => {
    async function fetchAnimais() {
      const response = await axios.get("https://webdev103.cyclic.app/adotes2");
      setAnimais(response.data);
    }
    fetchAnimais();
  }, [props.reload]);

  console.log(Animais);

  return (
    <div className="CardContainer">
      {Animais.map((Animal) => (
        <Link 
        
          to={`/Animais/${Animal._id}`}
          key={Animal._id}
          className="Card mb-40 w-64"
        >
          <span className="CategoryTag">{Animal.categoria}</span>
          <img src={Animal.foto} alt="Foto do animal" />
          <p className="Title text-left">{Animal.name}</p>
          <p className="Personality text-left ">{Animal.personalidade}</p>
        </Link>
      ))}
    </div>
  );
}
