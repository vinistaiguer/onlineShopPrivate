import React from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import AlessandraRich from "./Imagens/17893739_39837993_1000.jpg"
import Valentino from "./Imagens/17528762_37436785_600.jpg"
import DolceGabbana from "./Imagens/17732979_37915976_1000.jpg"
import IsabelMarant from "./Imagens/18664249_40318077_600.jpg"
import { Button,Container,Card } from "react-bootstrap";

import Carrossel from "../Carousel/Carousel";

// import "./CSS/styles.css"
console.log("TESTE")

// const produtos = [
//     {

//     }
// ]

const Mulher = () => {
    return (

        <div>
            <NavBar />

            <div>
                <Carrossel/>
            </div>
            
            <Container className="d-flex flex-row justify-content-center">
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={AlessandraRich} />
                    <Card.Body>
                        <Card.Title>Alessandra Rich</Card.Title>
                        <Card.Text>Blazer cropped metálico</Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={DolceGabbana} />
                    <Card.Body>
                        <Card.Text>
                        <Card.Title>DOLCE & GABBANA</Card.Title>
                        Vestido mangas bufantes com estampa floral 
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={IsabelMarant} />
                    <Card.Body>
                        <Card.Title>Isabel Marant</Card.Title>
                        <Card.Text>
                            Vestido floral com laço na gola
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Valentino} />
                    <Card.Body>
                        <Card.Title>Valentino</Card.Title>
                        <Card.Text>
                            Macacão curto com estampa Optical Valentino
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Footer />
        </div>
    )
}

export default Mulher;
