import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../api/swapi';

export const Item = () => {
    const [ item, setItem ] = useState([]);

    const {id} = useParams();

    useEffect(() => {
         if (id) {
             getItem(id).then(data => setItem(data));
         }
    }, [id]);

    return (
        <div>
            {item.name}
        </div>
    );
};