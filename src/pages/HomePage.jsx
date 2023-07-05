//AQUI VOU DAR O GET -> https://webdev103.cyclic.app/adotes2
//Vou fazer o Map para mostrar cada um
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../componets/Cards";
import FormPublicar from "../componets/FormPublicar";

export default function HomePage() {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <nav>{/* Aqui está a navbar */}</nav>

      <img
        src="/imgs/banner.jpg"
        alt="Banner"
        style={{ width: "100vw", height: "260px", objectFit: "cover" }}
      />

      <div style={{ marginTop: "60px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "600",
            color: "#313D6D",
          }}
        >
          Conheça nossos bichinhos
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            color: "#313D6D",
            marginBottom: "60px",
          }}
        >
          Adotar faz bem, faça o bem! etc e tal.
        </p>
      </div>

      <div style={{ display: "flex", gap: "40px", justifyContent: "center"}}>
        <Cards reload={reload} setReload={setReload} />
      </div>

      <FormPublicar reload={reload} setReload={setReload} />

      
    </div>
  );
}
