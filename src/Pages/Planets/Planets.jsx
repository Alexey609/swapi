import React, { useState, useEffect} from 'react';
import { getPlanets } from '../../api/swapi';
import { Planet } from '../../Components/Planet/Planet';
import styles from './Planets.module.css';

export const Planets = () => {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        getPlanets().then(data => setPlanet(data.data.results));
    }, [planet]);

    return (
      <div>
        <h2 className={styles.title}>Планеты</h2>
          <div>Для перехода на детальную информацию кликните по картчоке</div>
          <div className={styles.gridContainer}>
              {planet.map((planets, id) => {
                  return (
                      <Planet planets={planets} key={id} />
                  )
              })}
          </div>
      </div>
    );
};