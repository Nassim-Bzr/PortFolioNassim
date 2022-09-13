import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Véritable adepte de  <span className="purple">nouvelles technologies</span>, je cherche constamment à monter en compétence. 
            <p>Je suis passionné par le développement web ( front avec React, back avec Node.Js ), le webdesign, le montage vidéo, le pilotage de drone et l’impression 3D.</p>
          <p>Après quelques années en tant que technicien de maintenance industrielle , puis magasinier, je me suis dirigé vers une de mes passions : le numérique. </p>
          <p>J’ai eu la chance de pouvoir développer mes compétences pendant 6 ans en tant que technicien de proximité, administrateur système et responsable opérationnel.</p>
          Mon intérêt pour le développement Web a commencé en 2012 lorsque j'ai décidé d'essayer d'éditer des thèmes Wordpress - la refonte et la modification des thèmes m'ont beaucoup appris sur HTML et CSS ! 
          
            <br />
            <br />
            Mon objectif professionnel est de devenir développeur Fullstack JS, avec une préférence pour le front end.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
