import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {
    getPeopleCount,
    getPlanetsCount,
    getShipsCount,
    getFilmsCount,
    getVehiclesCount,
    getSpeciesCount
} from '../../api/swapi';
import stats from '../../assets/stats.jpg';
import styles from './Stats.module.css';


export const Stats = () => {
   const [people, setPeople] = useState(0);
   const [planets, setPlanets] = useState(0);
   const [ships, setShips] = useState(0);
   const [films, setFilms] = useState(0);
   const [vehicles, setVehicles] = useState(0);
   const [species, setSpecies] = useState(0);

   useEffect(() => {
      getPeopleCount().then(data => setPeople(data.count));
      getPlanetsCount().then(data => setPlanets(data.count));
      getShipsCount().then(data => setShips(data.count));
      getFilmsCount().then(data => setFilms(data.count));
      getVehiclesCount().then(data => setVehicles(data.count));
      getSpeciesCount().then(data => setSpecies(data.count));
   },[people, planets, ships, films, vehicles, species]);


   return (
    <Container>
        <Row>
            <h2 className={styles.title}>Статистика</h2>
             <p>Персонажи - {people}</p>
             <p>Планеты - {planets}</p>
             <p>Корабли - {ships}</p>
             <p>Фильмы - {films}</p>
             <p>Транспорт - {vehicles}</p>
             <p>Расы/виды - {species}</p>
        </Row>
        <Row>
            <Col md="12" sm="10" xs="9">
              <Image src={stats} className="m-5" fluid />
            </Col>
        </Row>
    </Container>
   );
};