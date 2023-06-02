import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import stats from '../../assets/stats.jpg';
import styles from './Stats.module.css';


export const Stats = () => {

   return (
    <Container>
        <Row>
            <h2 className={styles.title}>Статистика</h2>

        </Row>
        <Row>
            <Image src={stats} className="m-5" fluid />
        </Row>
    </Container>
   );
};