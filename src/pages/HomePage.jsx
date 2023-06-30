//AQUI VOU DAR O GET -> https://webdev103.cyclic.app/adotes2
//Vou fazer o Map para mostrar cada um
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Conheça nossos bichinhos</h1>
        <p>Lorem Ipsum, adotar faz bem, faça o bem! etc e tal.</p>
      </div>

      <div>
        <div className="Card"></div>
      </div>

      <h1>Home</h1>
    </div>
  );
}
