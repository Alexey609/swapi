import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItem } from '../../api/swapi';
import styles from './Item.module.css';

export const Item = () => {
    const [ item, setItem ] = useState([]);

    const {id} = useParams();

    useEffect(() => {
         if (id) {
             getItem(id).then(data => setItem(data));
         }
    }, [id]);

    return (
        <div className={styles.detail}>
            <div>
                <h4>{item?.data?.name}</h4>
            </div>
            <div className={styles.body}>
                <p>Климат - {item?.data?.climate}</p>
                <p>Диаметр - {item?.data?.diameter}</p>
                <p>Гравитация - {item?.data?.gravity}</p>
                <p>Население - {item?.data?.population}</p>
                <p>Местность - {item?.data?.terrain}</p>
                <p>Период - {item?.data?.orbital_period}</p>
            </div>
            <Link to="/planets" className={styles.link}>Вернуться</Link>
        </div>
    );
};