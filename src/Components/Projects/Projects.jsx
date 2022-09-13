import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";

// import OlivierRoue from "../Assets/OlivierRoue.png";
// import FranckJezequel from "../Assets/FranckJezequel.png";
import AtelierCombine from "../Assets/AtelierCombine.png";
import WeatherApp from "../Assets/weatherApp.png";
import TiLabel from "../Assets/TiLabel.png";


import { DiReact, DiJavascript, DiGithubBadge, DiHtml5, DiPhotoshop, DiWordpress } from "react-icons/di";
import { SiRedux, SiMaterialUi } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card" style={{ textAlign: "center" }}>
            <Card className="project-card-view">
              <Card.Img variant="top" src= {TiLabel}  alt="Weather App" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                Logiciel d’étiquetage
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Réalisation d'un logiciel afin d'assurer une traçabilité de plusieurs produits
                <p>Mise en place de bases de données pour permettre des mise à jour des références constructeur.</p>
                < br/>
                </Card.Text>
                <div className="Techstacks">
                Stack technique : Windev
                </div>
                
              </Card.Body>
            </Card>
          </Col>
    

          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={AtelierCombine} alt="Clockify Clone" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Site vitrine : L'atelier Combiné
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Construction de toute la charte graphique, logo compris.
                <p>Mise en place du site dans son ensemble sur serveur o2switch.</p>
                Rédaction des contenus. Enregistrement SEO auprès des moteurs de recherche
                </Card.Text>
                <div className="Techstacks">
                  <DiWordpress className="Techstacks-icons" />                 
                  <DiPhotoshop className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://atelier-combine.fr/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Voir le site
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col md={6} className="project-card" style={{ textAlign: "center" }}>
            <Card className="project-card-view">
              <Card.Img variant="top" src= {WeatherApp}  alt="Weather App" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                Application Web- Affichage météo selon la ville
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Le weatherApp permet d’afficher la météo du jour + les prévisions à 5 jours.
                Application développée pour un affichage dynamique.
                Pour afficher la météo de votre ville il suffit de modifier le nom de la ville dans l’url.
                </Card.Text>
                <div className="Techstacks">
                  <DiHtml5 className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  href="https://github.com/Vincent-PERON/Ti-Weather"
                  target="_blank"
                  style={{ marginTop: "5%" }}
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://vincent-peron.github.io/Ti-Weather/index.html?ville=Brest"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Voir le site
                </Button>
              </Card.Body>
            </Card>
          </Col>





          <Col md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};
