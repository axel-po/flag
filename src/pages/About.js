import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Bonjour, super le tuto ! Petit bémol : pour une raison que j'ignore,
        j'ai été obligée d'ajouter la ligne ```import React from 'react';```
        dans tous mes fichiers car cela me faisait une erreur lors du lancement
        du serveur Et impossible d'utiliser une partie des snippets Emmet dans
        les fichiers types Home.js
      </p>
      <br />
      <p>
        Bonjour, super le tuto ! Petit bémol : pour une raison que j'ignore,
        j'ai été obligée d'ajouter la ligne ```import React from 'react';```
        dans tous mes fichiers car cela me faisait une erreur lors du lancement
        du serveur Et impossible d'utiliser une partie des snippets Emmet dans
        les fichiers types Home.js
      </p>
    </div>
  );
};

export default About;
