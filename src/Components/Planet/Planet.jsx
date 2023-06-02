import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Planet.module.css';

export const Planet = ({planets}) => {
    const url = parseInt(planets.url.split("/")[5]);

    return (
        <div className={styles.card}>
            <Link to={`/planets/${url}`} className={styles.link}>
                <h2>{planets.name}</h2>
                <div>
                    <p>Климат - {planets.climate}</p>
                    <p>Диамер - {planets.diameter}</p>
                    <p>Население - {planets.population}</p>
                </div>
            </Link>
        </div>
    );
};